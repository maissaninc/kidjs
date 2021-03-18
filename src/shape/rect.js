import Polygon from './polygon';

export function rect(x, y, width, height) {
  const shape = new Polygon();

  shape.x = x;
  shape.y = y;
  shape.addPoint(-width / 2, -height / 2);
  shape.addPoint(width / 2, -height / 2);
  shape.addPoint(width / 2, height / 2);
  shape.addPoint(-width / 2, height / 2);

  window.stage.addChild(shape);

  return shape;
}
