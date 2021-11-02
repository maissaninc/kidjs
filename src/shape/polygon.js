import Shape from './';
import Vector from '../core/vector';
import Matter from 'matter-js';

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
      this.updateBoundingPolygon();
      if (this.body) {
        Matter.Body.setVertices(this.body, this._boundingPolygon);
      }
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
}

export function polygon(...args) {
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
