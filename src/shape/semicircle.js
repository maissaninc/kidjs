import Shape from './';

export default class Semicircle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  render(context) {
    this.prerender(context);
    let angleRadians = this.angle * (Math.PI / 180);
    context.arc(this.x, this.y, this.radius, angleRadians, angleRadians + Math.PI);
    this.postrender(context);
  }
}

export function semicircle(x, y, diameter) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  const shape = new Semicircle(x, y, diameter / 2);
  window.stage.addChild(shape);
  return shape;
}
