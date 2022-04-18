import Shape from './';
import Vector from '../core/vector';
import Matter from 'matter-js';
import { parseLength } from '../core/units';

export default class Oval extends Shape {
  constructor(x, y, radiusX, radiusY) {
    super(x, y);
    this.radiusX = radiusX;
    this.radiusY = radiusY;
  }

  init() {
    this._boundingPolygon = [];
    for (let theta = 0; theta <= Math.PI * 2; theta = theta + (Math.PI / 20)) {
      this._boundingPolygon.push(new Vector(
        Math.cos(theta) * this.radiusX,
        Math.sin(theta) * this.radiusY
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
    context.ellipse(this.x, this.y, this.radiusX, this.radiusY, angleRadians, 0, Math.PI * 2);
    this.postrender(context);
  }
}

export function oval(x, y, width, height) {
  if (x == null || y == null || width == null || height == null) {
    return;
  }
  const shape = new Oval(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(width, 'x') / 2,
    parseLength(height, 'y') / 2
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
