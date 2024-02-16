import Shape from './';
import Vector from '../core/vector';
import Matter from 'matter-js';
import { parseLength } from '../core/units';

export default class Polygon extends Shape {

  /**
   * Create a new polygon and add it to the stage.
   *
   * @constructor
   * @param {int} x - Initial x coordinate
   * @param {int} y - Initial y coordinate
   */
  constructor(x, y) {
    super(x, y);
    this.points = [];
    this._boundingPolygon = [];
  }

  init() {
    this.body = Matter.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
      friction: window.friction,
      frictionStatic: window.friction,
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

  /**
   * Remove all points from the polygon.
   */
  clearPoints() {
    this.points = [];
    this.updateBoundingPolygon();
  }

  /**
   * Add point to the polygon.
   *
   * @param {int} x - X coordinate
   * @param {int} y - Y coordinate
   */
  addPoint(x, y) {
    let v = new Vector(x, -y);
    if (v.length > this.boundingRadius) {
      this.boundingRadius = v.length;
    }
    this.points.push(v);
    this.updateBoundingPolygon();
  }

  /**
   * Update point to the polygon.
   *
   * @param {int} index - Which point
   * @param {int} x - X coordinate
   * @param {int} y - Y coordinate
   */
  updatePoint(index, x, y) {
    if (index < this.points.length) {
      if (typeof x == 'number') this.points[index].x = x;
      if (typeof y == 'number') this.points[index].y = y;
      this.updateBody();
    }
  }

  /**
   * Update physics body.
   */
  updateBody() {
    this.updateBoundingPolygon();
    if (this.body) {
      Matter.Body.setVertices(this.body, this._boundingPolygon);
    }
  }

  /**
   * Use gift wraping algorithm to determine convex hull.
   */
  updateBoundingPolygon() {

    const orientation = function(p, q, r) {
      let a = (q.y - p.y) * (r.x - q.x) -
        (q.x - p.x) * (r.y - q.y);
      if (a == 0) return 0;
      return a > 0 ? 1 : 2;
    }

    this._boundingPolygon = [];
    if (this.points.length > 2) {
      let leftmost = 0;
      for (let i = 1; i < this.points.length; i++) {
        if (this.points[i].x < leftmost.x) {
          leftmost = i;
        }
      }
      let p = leftmost;
      let q = leftmost;
      do {
        this._boundingPolygon.push(this.points[p]);
        q = (p + 1) % this.points.length;
        for (let j = 0; j < this.points.length; j++) {
          if (orientation(this.points[p], this.points[j], this.points[q]) == 2) {
            q = j;
          }
        }
        p = q;
      } while (p != leftmost)
    }
  }

  /**
   * Render polygon.
   *
   * @param {CanvasRenderingContext2D} context - Canvas drawing context.
   */
  render(context) {
    if (this.points.length < 2) {
      return;
    }
    this.prerender(context);
    let v = this.points[0].rotate(this.angle);
    context.moveTo(this.x + v.x, this.y + v.y);
    for (let point of this.points) {
      v = point.rotate(this.angle);
      context.lineTo(this.x + v.x, this.y + v.y);
    }
    this.postrender(context);
  }

  /**
   * Explode this polygon into sub-polygons
   */
  explode() {

    // Shape is locked
    if (this.locked) return;

    // Don't explode twice
    if (this.exploded) return;
    this.exploded = true;

    // Explode into fragments
    let fragments = [];
    for (let i = 0; i < this.points.length; i = i + 1) {

      // Determine points in fragment
      let points = [
        this.points[i],
        this.points[(i + 1) % this.points.length],
        new Vector(0, 0)
      ];

      // Determine center point of fragment
      let cp = Vector.average(points);

      // Create new polygon at center point
      let fragment = new Polygon(
        this.x + cp.x,
        this.y + cp.y
      );
      for (let j = 0; j < points.length; j = j + 1) {
        let v = points[j].subtract(cp);
        fragment.addPoint(v.x, v.y);
      }

      // Add to stage
      fragment.fill = this.fill;
      fragment.stroke = this.stroke;
      fragment.init();
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
   * Assign properties of another polygon to this one.
   *
   * @param {Circle} source
   */
  assign(source) {
    super.assign(source);
    for (let i = 0; i < source.points.length; i = i + 1) {
      this.addPoint(source.points[i].x, -source.points[i].y);
    }
  }
}

export function polygon(...args) {
  for (let i = 0; i < args.length - 1; i = i + 2) {
    args[i] = parseLength(args[i], 'x');
    args[i + 1] = parseLength(args[i + 1], 'y');
  }
  if (args.length > 3) {
    const shape = new Polygon(args[0], args[1]);
    for (let i = 2; i < args.length - 1; i = i + 1) {
      shape.addPoint(args[i], args[i + 1]);
    }
  }
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
