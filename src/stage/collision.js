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

  // Calculate relative velocities
  let relativeVelocity = collision.b.velocity.subtract(collision.a.velocity);
  let relativeVelocityInNormal = relativeVelocity.dot(collision.normal);

  // Objects are already moving apart
  if (relativeVelocityInNormal > 0) return;

  // Apply impulse along normal
  let bounciness = Math.min(collision.a.bounciness, collision.b.bounciness);
  let friction = Math.min(collision.a.friction, collision.b.friction);
  let jN = -(1 + bounciness) * relativeVelocityInNormal;
  jN = jN / (collision.a.inverseMass + collision.b.inverseMass);
  collision.a.velocity = collision.a.velocity.subtract(
    collision.normal.scale(jN * collision.a.inverseMass)
  );
  collision.b.velocity = collision.b.velocity.add(
    collision.normal.scale(jN * collision.b.inverseMass)
  );

  // Apply impulse along tangent
  let tangent = relativeVelocity.subtract(
    collision.normal.scale(relativeVelocity.dot(collision.normal))
  );
  tangent = tangent.normalize().scale(-1);
  let jT = -(1 + bounciness) * relativeVelocity.dot(tangent) * friction;
  jT = jT / (collision.a.inverseMass + collision.b.inverseMass);
  jT = Math.min(jT, jN);
  collision.a.velocity = collision.a.velocity.subtract(
    tangent.scale(jT * collision.a.inverseMass)
  );
  collision.b.velocity = collision.b.velocity.add(
    tangent.scale(jT * collision.b.inverseMass)
  );
}
