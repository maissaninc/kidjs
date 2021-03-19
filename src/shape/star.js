import Polygon from './polygon';
import Vector from './vector';

export default class Star extends Polygon {
  constructor(x, y, outerRadius, innerRadius, points = 5) {
    super(x, y);

    let angle = 360 / points;
    let outerVector = new Vector(0, outerRadius);
    let innerVector = new Vector(0, innerRadius);
    innerVector.rotate(angle / 2);

    for (let i = 0; i < points; i++) {
      this.addPoint(outerVector.x, outerVector.y);
      this.addPoint(innerVector.x, innerVector.y);
      outerVector.rotate(angle);
      innerVector.rotate(angle);
    }
  }
}

export function star(x, y, outerRadius, innerRadius = false, points = 5) {
  if (innerRadius === false) {
    let goldenRatio = (1 + Math.sqrt(5)) / 2;
    innerRadius = outerRadius * (1 / Math.pow(goldenRatio, 2));
  }

  let shape = new Star(x, y, outerRadius, innerRadius, points);
  return shape;
}
