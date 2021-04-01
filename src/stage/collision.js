import Vector from '../core/vector';

export default class Collision {

  constructor({depth, normal, start}) {
    this.depth = depth;
    this.normal = normal;
    this.start = start;
  }
}
