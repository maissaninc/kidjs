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

    // Create bounding polygon
    this._boundingPolygon = [];
    this._boundingPolygon.push(new Vector(0, 0));
    for (let theta = this.startAngle; theta <= this.endAngle; theta = theta + (Math.PI / 20)) {
      this._boundingPolygon.push(new Vector(
        Math.cos(theta) * this.radius,
        Math.sin(theta) * this.radius
      ));
    }

    // Determine center point of pie
    let points = [
      this._boundingPolygon[0],
      this._boundingPolygon[1],
      this._boundingPolygon[this._boundingPolygon.length - 1]
    ];
    this._cp = Vector.average(points);

    // Center bounding polygon around center points
    for (let i = 0; i < this._boundingPolygon.length; i = i + 1) {
      this._boundingPolygon[i] = this._boundingPolygon[i].subtract(this._cp);
    }

    // Create Matter.js body
    this.body =  Matter.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
      friction: window.friction,
      frictionStatic: window.friction,
      frictionAir: 0,
      isStatic: true
    });
  }

  render(context) {
    this.prerender(context);
    context.moveTo(this.body.vertices[0].x, this.body.vertices[0].y);
    for (let i = 0; i < this.body.vertices.length; i = i + 1) {
      context.lineTo(this.body.vertices[i].x, this.body.vertices[i].y);
    }
    this.postrender(context);
  }

  /**
   * Copy shape.
   */
  copy() {
    let shape = new this.constructor(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    shape.assign(this);
    return shape;
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
