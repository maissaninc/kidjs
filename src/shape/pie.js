import Shape from './';
import Vector from '../core/vector';
import Matter from 'matter-js';
import { degreesToRadians } from '../core/math';
import { parseLength } from '../core/units';

export default class Pie extends Shape {
  constructor(x, y, radius, startAngle, endAngle) {
    super(x, y);
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
  }

  init() {
    this._boundingPolygon = [];
    this._boundingPolygon.push(new Vector(0, 0));
    for (let theta = this.startAngle; theta <= this.endAngle; theta = theta + (Math.PI / 20)) {
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
    let angleRadians = degreesToRadians(this.angle);
    let points = [
      this._boundingPolygon[0],
      this._boundingPolygon[1],
      this._boundingPolygon[this._boundingPolygon.length - 1]
    ];
    let offset = Vector.average(points);
    context.arc(
      this.x - offset.x,
      this.y - offset.y,
      this.radius,
      angleRadians + this.startAngle,
      angleRadians + this.endAngle
    );
    context.lineTo(this.x - offset.x, this.y - offset.y);
    this.postrender(context);
  }
}

export function pie(x, y, diameter, startAngle = 0, endAngle = 60) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  const shape = new Pie(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(diameter, 'size') / 2,
    degreesToRadians(startAngle),
    degreesToRadians(endAngle)
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
