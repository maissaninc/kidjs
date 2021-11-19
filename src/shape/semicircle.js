import Shape from './';
import Vector from '../core/vector';
import Matter from 'matter-js';

export default class Semicircle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  init() {
    this._boundingPolygon = [];
    for (let theta = 0; theta <= Math.PI; theta = theta + (Math.PI / 20)) {
      this._boundingPolygon.push(new Vector(
        Math.cos(theta) * this.radius,
        Math.sin(theta) * this.radius
      ));
    }
    this.body =  Matter.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
      frictionAir: 0,
      isStatic: true
    });
  }

  render(context) {
    this.prerender(context);
    let angleRadians = this.angle * (Math.PI / 180);
    let offsetLength = (4 * this.radius) / (3 * Math.PI);
    let offset = new Vector(
      Math.cos(angleRadians - Math.PI / 2) * offsetLength,
      Math.sin(angleRadians - Math.PI / 2) * offsetLength
    );
    context.arc(this.x + offset.x, this.y + offset.y, this.radius, angleRadians, angleRadians + Math.PI);
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
