import Polygon from './polygon';
import Matter from 'matter-js';

export default class Rect extends Polygon {
  constructor(x, y, width, height) {
    super(x + width / 2, y + height / 2);
    this.width = width;
    this.height = height;
    this.addPoint(-width / 2, -height / 2);
    this.addPoint(width / 2, -height / 2);
    this.addPoint(width / 2, height / 2);
    this.addPoint(-width / 2, height / 2)
  }

  get body() {
    if (!this._body) {
      this._body = Matter.Bodies.rectangle(this.position.x, this.position.y, this.width, this.height, {
        friction: 0,
        frictionAir: 0,
        restitution: 1,
        isStatic: true
      });
    }
    return this._body;
  }
}

export function rect(x, y, width, height) {
  const shape = new Rect(x, y, width, height);
  window.stage.addChild(shape);
  return shape;
}
