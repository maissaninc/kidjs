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
    for (let theta = degreesToRadians(this.startAngle); theta <= degreesToRadians(this.endAngle); theta = theta + (Math.PI / 20)) {
      this._boundingPolygon.push(new Vector(
        Math.cos(theta) * this.radius,
        Math.sin(theta) * this.radius
      ));
    }
    this._boundingPolygon.push(new Vector(0, 0));
    this.body =  Matter.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
      frictionAir: 0,
      isStatic: true
    });
  }

  render(context) {
    this.prerender(context);
    let angleRadians = degreesToRadians(this.angle);
    let startAngleRadians = degreesToRadians(this.startAngle);
    let endAngleRadians = degreesToRadians(this.endAngle);
    let middleAngle = (startAngleRadians + endAngleRadians) / 2;

    // TO-DO: Average points in bounding polygon to determine new center
    let offsetLength = (4 * this.radius) / (3 * Math.PI);
    let offset = new Vector(
      Math.cos(angleRadians + middleAngle) * offsetLength,
      Math.sin(angleRadians + middleAngle) * offsetLength
    );
    context.arc(
      this.x + offset.x,
      this.y + offset.y,
      this.radius,
      angleRadians + degreesToRadians(this.startAngle),
      angleRadians + degreesToRadians(this.endAngle)
    );
    context.lineTo(this.x + offset.x, this.y + offset.y);
    this.postrender(context);
  }
}

export function pie(x, y, diameter, startAngle = 0, endAngle = 40) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  const shape = new Pie(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(diameter, 'size') / 2,
    startAngle,
    endAngle
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
