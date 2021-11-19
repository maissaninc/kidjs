import Shape from './';
import Vector from '../core/vector';
import Matter from 'matter-js';

export default class Semicircle extends Shape {
  constructor(x, y, radius) {
    super(x, y - (radius / 2));
    this.radius = radius;
    this._boundingPolygon = [];
    for (let theta = 0; theta <= Math.PI; theta = theta + (Math.PI / 10)) {
      this._boundingPolygon.push(new Vector(
        Math.cos(theta) * this.radius,
        Math.sin(theta) * this.radius
      ));
    }
  }

  init() {
    this.body =  Matter.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
      frictionAir: 0,
      isStatic: true
    });
  }

  get boundingPolygon() {
    let points = [];
    for (let i = 0; i < this._boundingPolygon.length; i++) {
      let p = this._boundingPolygon[i].rotate(this.angle);
      p = p.add(this.position);
      points.push(p);
    }
    return points;
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
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
