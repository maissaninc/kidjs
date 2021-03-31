import Shape from './';

export default class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
    this.boundingRadius = radius;
  }

  render(context) {
    this.prerender(context);
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.postrender(context);
  }
}

export function circle(x, y, diameter) {
  const shape = new Circle(x, y, diameter / 2);
  return shape;
}
