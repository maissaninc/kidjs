import Shape from './';
import Vector from '../core/vector';

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
    if (this.points.length > 2) {
      this.updateBoundingPolygon();
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

    this.boundingPolygon = [];
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
        this.boundingPolygon.push(this.points[p]);
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

    // Draw bounding polygon
    if (this.boundingPolygon.length > 1) {
      context.strokeStyle = 'gray';
      context.beginPath();
      context.moveTo(
        this.position.x + this.boundingPolygon[0].x,
        this.position.y + this.boundingPolygon[0].y
      );
      for (let i = 1; i < this.boundingPolygon.length; i++) {
        context.lineTo(
          this.position.x + this.boundingPolygon[i].x,
          this.position.y + this.boundingPolygon[i].y
        );
      }
      context.closePath();
      context.stroke();
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
