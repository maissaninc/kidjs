import Polygon from './polygon';

export default class Rect extends Polygon {
  constructor(x, y, width, height) {
    super(x + (width / 2), y + (height / 2));
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
