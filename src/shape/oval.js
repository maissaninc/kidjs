import Polygon from './polygon';
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
    this.body = Matter.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
      friction: window.friction,
      frictionStatic: window.friction,
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

  explode() {

    // Don't explode twice
    if (this.exploded) return;
    this.exploded = true;

    // Break into 4 pie pieces
    let fragments = [];
    for (let angle = 0; angle < Math.PI * 2; angle = angle + Math.PI * 1/2) {

      // Create new fragment
      let points = [
        new Vector(0, 0)
      ];
      for (let theta = angle; theta <= angle + Math.PI * 1/2; theta = theta + (Math.PI / 20)) {
        points.push(new Vector(
          Math.cos(theta) * this.radiusX,
          Math.sin(theta) * this.radiusY
        ));
      }
      let cp = Vector.average(points);
      let fragment = new Polygon(
        this.x + cp.x,
        this.y + cp.y
      );
      for (let i = 0; i < points.length; i = i + 1) {
        let v = points[i].subtract(cp);
        fragment.addPoint(v.x, v.y);
      }

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
    return new this.constructor(this.x, this.y, this.radiusX, this.radiusY);
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
