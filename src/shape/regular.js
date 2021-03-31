import Polygon from './polygon';
import Vector from '../core/vector';

export default class RegularPolygon extends Polygon {
  constructor(x, y, radius, sides) {
    super(x, y);

    if (sides > 2) {
      let angle = 360 / sides;
      let v = new Vector(0, -radius);

      for (let i = 0; i < sides; i++) {
        this.addPoint(v.x, v.y);
        this.addPoint(v.x, v.y);
        v = v.rotate(angle);
      }
    }
  }
}

export function square(x, y, diameter) {
  let shape = new RegularPolygon(x, y, diameter / 2, 4);
  return shape;
}

export function pentagon(x, y, diameter) {
  let shape = new RegularPolygon(x, y, diameter / 2, 5);
  return shape;
}

export function hexagon(x, y, diameter) {
  let shape = new RegularPolygon(x, y, diameter / 2, 6);
  return shape;
}

export function heptagon(x, y, diameter) {
  let shape = new RegularPolygon(x, y, diameter / 2, 7);
  return shape;
}

export function octagon(x, y, diameter) {
  let shape = new RegularPolygon(x, y, diameter / 2, 8);
  return shape;
}
