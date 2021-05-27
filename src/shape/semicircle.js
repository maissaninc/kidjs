import Shape from './';

export default class Semicircle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
    this.boundingRadius = radius;
  }

  render(context) {
    this.prerender(context);
    let angleRadians = this.angle * (Math.PI / 180);
    context.arc(this.x, this.y, this.radius, angleRadians, angleRadians + Math.PI);
    this.postrender(context);
  }
}

export function semicircle(x, y, diameter) {
  const shape = new Semicircle(x, y, diameter / 2);
  return shape;
}
