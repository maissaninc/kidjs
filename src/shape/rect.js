import Polygon from './polygon';
import Matter from 'matter-js';

export default class Rect extends Polygon {
  constructor(x, y, width, height) {
    x = x + (width / 2);
    y = y + (height / 2);
    let body = Matter.Bodies.rectangle(x, y, width, height);
    super(x, y, body);
    this.addPoint(-width / 2, -height / 2);
    this.addPoint(width / 2, -height / 2);
    this.addPoint(width / 2, height / 2);
    this.addPoint(-width / 2, height / 2)
  }
}

export function rect(x, y, width, height) {
  const shape = new Rect(x, y, width, height);
  return shape;
}
