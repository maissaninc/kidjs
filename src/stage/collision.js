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
