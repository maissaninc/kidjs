import Polygon from './polygon';

export default class Triangle extends Polygon {
  constructor(x, y, width, height) {
    super(x, y);
    this.addPoint(0, -height / 2);
    this.addPoint(width / 2, height / 2);
    this.addPoint(-width / 2, height / 2);
  }
}

export function triangle(x, y, width, height = false) {
  if (height === false) {
    height = width * Math.sqrt(3) / 2;
  }

  let shape = new Triangle(x, y, width, height);
  return shape;
}
