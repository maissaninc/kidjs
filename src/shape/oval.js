import Shape from './';

export default class Oval extends Shape {
  constructor(x, y, radiusX, radiusY) {
    super(x, y);
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.boundingRadius = Math.max(radiusX, radiusY);
  }

  render(context) {
    this.prerender(context);
    let angleRadians = this.angle * (Math.PI / 180);
    context.ellipse(this.x, this.y, this.radiusX, this.radiusY, angleRadians, 0, Math.PI * 2);
    this.postrender(context);
  }
}

export function oval(x, y, width, height) {
  const shape = new Oval(x, y, width / 2, height / 2);
  window.stage.addChild(shape);
  return shape;
}
