import Shape from './';
import Pie from './pie';
import Vector from '../core/vector';
import Matter from 'matter-js';
import { parseLength } from '../core/units';

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
      friction: window.friction,
      frictionStatic: window.friction,
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

  explode() {

    // Shape is locked
    if (this.locked) return;

    // Don't explode twice
    if (this.exploded) return;
    this.exploded = true;

    // Break into 6 pie pieces
    let fragments = [];
    for (let angle = this.angle; angle < this.angle + Math.PI; angle = angle + Math.PI * 1/3) {

      // Create new fragment
      let points = [
        new Vector(0, 0),
        new Vector(
          Math.cos(angle) * this.radius,
          Math.sin(angle) * this.radius
        ),
        new Vector(
          Math.cos(angle + Math.PI * 1/3) * this.radius,
          Math.sin(angle + Math.PI * 1/3) * this.radius
        )
      ];
      let cp = Vector.average(points);
      let fragment = new Pie(
        this.x + cp.x,
        this.y + cp.y,
        this.radius,
        angle,
        angle + Math.PI * 1/3
      );

      // Add to stage
      fragment.init();
      fragment.fill = this.fill;
      fragment.stroke = this.stroke;
      window.stage.addChild(fragment);

      // Push away from origin
      let n = cp.normalize();
      fragment.push(n.x * 5, n.y * 5);
      fragment.angularVelocity = Math.random() * 5;
      fragments.push(fragment);
    }

    // Remove self from stage
    this.remove();
    this._fragments = fragments;
  }

  /**
   * Copy shape.
   */
  copy() {
    return new this.constructor(this.x, this.y, this.radius);
  }
}

export function semicircle(x, y, diameter) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  const shape = new Semicircle(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(diameter, 'size') / 2
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
