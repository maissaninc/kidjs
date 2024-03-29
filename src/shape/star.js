import Polygon from './polygon';
import Vector from '../core/vector';
import { parseLength } from '../core/units';

export default class Star extends Polygon {
  constructor(x, y, outerRadius, innerRadius, points = 5) {
    super(x, y);

    let angle = 360 / points;
    let outerVector = new Vector(0, outerRadius);
    let innerVector = new Vector(0, innerRadius);
    innerVector = innerVector.rotate(angle / 2);

    for (let i = 0; i < points; i++) {
      this.addPoint(outerVector.x, outerVector.y);
      this.addPoint(innerVector.x, innerVector.y);
      outerVector = outerVector.rotate(angle);
      innerVector = innerVector.rotate(angle);
    }
  }
}

export function star(x, y, outerDiameter, innerDiameter = false, points = 5) {
  if (x == null || y == null || outerDiameter == null) {
    return;
  }

  let goldenRatio = (1 + Math.sqrt(5)) / 2;
  let outerRadius = parseLength(outerDiameter, 'size') / 2;
  let innerRadius = innerDiameter !== false ?
    parseLength(innerDiameter, 'size') / 2 :
    parseLength(outerRadius, 'size') * (1 / Math.pow(goldenRatio, 2));

  let shape = new Star(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    outerRadius,
    innerRadius,
    points
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
