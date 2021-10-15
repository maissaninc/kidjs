import Polygon from './polygon';
import RegularPolygon from './regular';
import Vector from '../core/vector';

export default class Triangle extends Polygon {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.addPoint(-width / 2, -height / 2);
    this.addPoint(width / 2, -height / 2);
    this.addPoint(0, height / 2);
  }
}

export function triangle(x, y, width, height) {
  if (x == null || y == null || width == null) {
    return;
  }
  let shape;
  if (height == null) {
    shape = new RegularPolygon(x, y, width / 2, 3);
  } else {
    shape = new Triangle(x, y, width, height);
  }
  shape.init();
  window.stage.addChild(shape);
  return shape;
}