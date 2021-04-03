import Vector from '../core/vector';

export default class Collision {
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
}
