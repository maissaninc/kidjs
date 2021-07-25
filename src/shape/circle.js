import Shape from './';
import Matter from 'matter-js';

export default class Circle extends Shape {
  constructor(x, y, radius) {
    let body = Matter.Bodies.circle(x, y, radius);
    super(x, y, body);
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
