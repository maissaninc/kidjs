import Vector from '../core/vector';

export default class Collision {

  /**
   * Create an object containing collision data.
   *
   * @constructor
   * @param {Actor} a - First actor in collision
   * @param {Actor} b - Second actor in collision
   * @param {int} depth - Depth of collision
   * @param {Vector} normal - Normal vector indicating direction of collision
   * @param {Vector} start - Start of collision vector
   */
  constructor({a, b, depth, normal, start}) {
    this.a = a;
    this.b = b;
    this.depth = depth;
    this.normal = normal;
    this.start = start;
  }

  get end() {
    return this.start.add(this.normal.scale(this.depth));
  }
}

/**
 * Find the farthest point in the opposite direction of a face normal.
 * This is used in detecting collisions between polygons.
 *
 * @param {Actor} actor - Polygon
 * @param {Vector} direction - Normal vector indicating direction
 * @param {Vector} p - Point on face
 * @return {Object} Object containing support point and distance
 */
function findSupportPoint(actor, direction, p) {
  let supportPoint = false;
  let max;
  for (let i = 0; i < actor.boundingPolygon.length; i++) {
    let v = actor.boundingPolygon[i].subtract(p);
    let projection = v.dot(direction);
    if (projection > 0 && (supportPoint === false || projection > max)) {
      max = projection;
      supportPoint = actor.boundingPolygon[i];
    }
  }
  return {
    'point': supportPoint,
    'distance': max
  }
}

/**
 * Determine the axis of least penetration between two polygons.
 * This is used in detecting collisions between polygons.
 *
 * @param {Actor} actor - First polygon
 * @param {Actor} actor - Second polygon
 * @return {Collision} Object containing collision data
 */
function findAxisLeastPenetration(a, b) {
  let supportPoint;
  let faceNormal = false;
  let faceNormalIndex = -1;
  let min;
  for (let i = 0; i < a.faceNormals.length; i++) {
    supportPoint = findSupportPoint(b,
      a.faceNormals[i].scale(-1),
      a.boundingPolygon[i]
    );
    if (supportPoint.point === false) {
      return false;
    }
    if (faceNormal === false || supportPoint.distance < min) {
      min = supportPoint.distance;
      faceNormal = a.faceNormals[i];
      faceNormalIndex = i;
    }
  }

  console.log(a);
  console.log(faceNormalIndex);
  console.log(faceNormal);

  return new Collision({
    'a': a,
    'b': b,
    'depth': min,
    'normal': faceNormal,
    'start': supportPoint.point.add(faceNormal.scale(min))
  });
}

/**
 * Determine if two polygons collide.
 *
 * @param {Actor} actor - First polygon
 * @param {Actor} actor - Second polygon
 * @return {Collision} Object containing collision data
 */
export function polygonCollidesWithPolygon(a, b) {
  let collisionA = findAxisLeastPenetration(a, b);
  if (collisionA) {
    let collisionB = findAxisLeastPenetration(b, a);
    if (collisionB) {
      if (collisionA.depth < collisionB.depth) {
        let v = collisionA.normal.scale(collisionA.depth);
        return new Collision({
          'a': a,
          'b': b,
          'depth': collisionA.depth,
          'normal': collisionA.normal,
          'start': collisionA.start.subtract(v)
        });
      } else {
        return new Collision({
          'a': a,
          'b': b,
          'depth': collisionB.depth,
          'normal': collisionB.normal.scale(-1),
          'start': collisionB.start
        });
      }
    }
  }
  return false;
}

/**
 * Determine if two circles collide.
 *
 * @param {Actor} actor - First circle
 * @param {Actor} actor - Second circle
 * @return {Collision} Object containing collision data
 */
export function circleCollidesWithCircle(a, b) {
  let v = b.position.subtract(a.position);
  let distance = v.length;
  let radiusSum = a.boundingRadius + b.boundingRadius;

  // Circles at exactly the same position
  if (distance === 0) {
    return new Collision({
      'a': a,
      'b': b,
      'depth': radiusSum,
      'normal': new Vector(0, -1),
      'start': a.boundingRadius > b.boundingRadius ?
        new Vector(a.x, a.y + a.boundingRadius) :
        new Vector(b.x, b.x + b.boundingRadius)
    });

  // Circles at different positions
  } else {
    let u = v.normalize().scale(-b.boundingRadius);
    return new Collision({
      'a': a,
      'b': b,
      'depth': radiusSum - distance,
      'normal': v.normalize(),
      'start': b.position.add(u)
    });
  }
}

/**
 * Attempt to resolve a collision between two actors.
 *
 * @param {Collision} collision - Object containing collision data
 */
export function resolveCollision(collision) {

  // Both objects are anchored
  if (collision.a.inverseMass === 0 && collision.b.inverseMass === 0) {
    return;
  }

  // Reposition objects
  let v = collision.normal.scale(
    collision.depth / (collision.a.inverseMass + collision.b.inverseMass)
  );
  collision.a.position = collision.a.position.add(
    v.scale(-collision.a.inverseMass)
  );
  collision.b.position = collision.b.position.add(
    v.scale(collision.b.inverseMass)
  );

  // Determine point of collision
  let start = collision.start.scale(
    collision.b.inverseMass / (collision.a.inverseMass + collision.b.inverseMass)
  );
  let end = collision.end.scale(
    collision.a.inverseMass / (collision.a.inverseMass + collision.b.inverseMass)
  );
  let p = start.add(end);
  let r1 = p.subtract(collision.a.position);
  let r2 = p.subtract(collision.b.position);

  // Determine linear velocities at point of collision
  let v1 = collision.a.velocity.add(new Vector(
    -1 * collision.a.angularVelocity * r1.y,
    collision.a.angularVelocity * r1.x
  ));
  let v2 = collision.b.velocity.add(new Vector(
    -1 * collision.b.angularVelocity * r2.y,
    collision.b.angularVelocity * r2.x
  ));

  // Calculate relative velocities
  let relativeVelocity = v2.subtract(v1);
  let relativeVelocityInNormal = relativeVelocity.dot(collision.normal);

  // Objects are already moving apart
  if (relativeVelocityInNormal > 0) return;

  // Apply impulse along normal
  let bounciness = Math.min(collision.a.bounciness, collision.b.bounciness);
  let friction = Math.min(collision.a.friction, collision.b.friction);
  let r1CrossNormal = r1.cross(collision.normal);
  let r2CrossNormal = r2.cross(collision.normal);
  let jN = -(1 + bounciness) * relativeVelocityInNormal;
  jN = jN / (
    collision.a.inverseMass + collision.b.inverseMass +
    Math.pow(r1CrossNormal, 2) * collision.a.inertia +
    Math.pow(r2CrossNormal, 2) * collision.b.inertia
  );

  // Adjust linear velocity
  collision.a.velocity = collision.a.velocity.subtract(
    collision.normal.scale(jN * collision.a.inverseMass)
  );
  collision.b.velocity = collision.b.velocity.add(
    collision.normal.scale(jN * collision.b.inverseMass)
  );

  // Adjust rotational velocity
  collision.a.angularVelocity = collision.a.angularVelocity - (r1CrossNormal * jN * collision.a.inertia);
  collision.b.angularVelocity = collision.b.angularVelocity + (r2CrossNormal * jN * collision.b.inertia);

  // Apply impulse along tangent
  let tangent = relativeVelocity.subtract(
    collision.normal.scale(relativeVelocity.dot(collision.normal))
  );
  tangent = tangent.normalize().scale(-1);
  let r1CrossTangent = r1.cross(tangent);
  let r2CrossTangent = r2.cross(tangent);
  let jT = -(1 + bounciness) * relativeVelocity.dot(tangent) * friction;
  jT = jT / (
    collision.a.inverseMass + collision.b.inverseMass +
    Math.pow(r1CrossTangent, 2) * collision.a.inertia +
    Math.pow(r2CrossTangent, 2) * collision.b.inertia
  );
  jT = Math.min(jT, jN);

  // Adjust linear velocity
  collision.a.velocity = collision.a.velocity.subtract(
    tangent.scale(jT * collision.a.inverseMass)
  );
  collision.b.velocity = collision.b.velocity.add(
    tangent.scale(jT * collision.b.inverseMass)
  );

  // Adjust angular velocity
  collision.a.angularVelocity = collision.a.angularVelocity - (r1CrossTangent * jT * collision.a.inertia);
  collision.b.angularVelocity = collision.b.angularVelocity + (r2CrossTangent * jT * collision.b.inertia);
}
