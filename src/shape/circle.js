import Shape from './';
import Matter from 'matter-js';
import Pie from './pie';
import Vector from '../core/vector';
import { parseLength } from '../core/units';

export default class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
    this.boundingRadius = radius;
  }

  get size() {
    return this.radius * 2;
  }

  set size(value) {
    this.radius = value / 2;
  }

  init() {
    this.body = Matter.Bodies.circle(this.position.x, this.position.y, this.radius, {
      friction: window.friction,
      frictionStatic: window.friction,
      frictionAir: 0,
      isStatic: true
    });
    this.bounciness = 1;
  }

  render(context) {
    this.prerender(context);
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.postrender(context);
  }

  grow(amount, duration = 1, tween = 'easeInOut', queue = false) {
    return this.animate({
      radius: this.radius + (amount / 2)
    }, duration, tween)
  }

  explode() {

    // Shape is locked
    if (this.locked) return;

    // Don't explode twice
    if (this.exploded) return;
    this.exploded = true;

    // Break into 6 pie pieces
    let fragments = [];
    for (let angle = 0; angle < Math.PI * 5/3; angle = angle + Math.PI * 1/3) {

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
    let shape = new this.constructor(this.x, this.y, this.radius);
    shape.assign(this);
    return shape;
  }
}

export function circle(x, y, diameter) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  const shape = new Circle(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(diameter, 'size') / 2);
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
