import Shape from './';
import Vector from '../core/vector';
import Matter from 'matter-js';

export default class Semicircle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  init() {
    let points = [];
    for (let theta = 0; theta <= Math.PI; theta = theta + 0.1) {
      points.push(new Vector(
        Math.cos(theta) * this.radius,
        Math.sin(theta) * this.radius
      ));
    }
    this.body =  Matter.Bodies.fromVertices(this.position.x, this.position.y, points, {
      frictionAir: 0,
      isStatic: true
    });
  }

  render(context) {
    this.prerender(context);
    let angleRadians = this.angle * (Math.PI / 180);
    context.arc(this.x, this.y - (this.radius / 2), this.radius, angleRadians, angleRadians + Math.PI);
    this.postrender(context);
  }
}

export function semicircle(x, y, diameter) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  const shape = new Semicircle(x, y, diameter / 2);
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
