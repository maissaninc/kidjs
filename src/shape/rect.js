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

  init() {
    this.body = Matter.Bodies.rectangle(this.position.x, this.position.y, this.width, this.height, {
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
      restitution: 1,
      isStatic: true
    });
  }
}

export function rect(x, y, width, height) {
  const shape = new Rect(x, y, width, height);
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
