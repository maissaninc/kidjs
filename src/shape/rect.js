import Polygon from './polygon';
import Matter from 'matter-js';

export default class Rect extends Polygon {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.addPoint(-width / 2, -height / 2);
    this.addPoint(width / 2, -height / 2);
    this.addPoint(width / 2, height / 2);
    this.addPoint(-width / 2, height / 2)
  }

  init() {
    this.body = Matter.Bodies.rectangle(this.position.x, this.position.y, this.width, this.height, {
      frictionAir: 0,
      isStatic: true
    });
  }
}

export function rect(x, y, width, height) {
  if (x == null || y == null || width == null || height == null) {
    return;
  }
  const shape = new Rect(x, y, width, height);
  shape.init();
  window.stage.addChild(shape);
  return shape;
}

export function square(x, y, size) {
  if (x == null || y == null || size == null) {
    return;
  }
  let shape = new Rect(x, y, size, size);
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
