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
    this._boundingPolygon = [];
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
    this.updateFaceNormals();
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
   * Compute face normals. These are used in collision detection.
   */
  updateFaceNormals() {
    this.faceNormals = [];
    if (this._boundingPolygon.length > 2) {

      // Determine if points are clockwise
      let sum = 0;
      for (let i = 0; i < this._boundingPolygon.length; i++) {
        let p1 = this._boundingPolygon[i];
        let p2 = this._boundingPolygon[(i + 1) % this._boundingPolygon.length];
        sum = sum + (p2.x - p1.x) * (p2.y + p1.y);
      }
      const clockwise = (sum >= 0);

      // Calculate face normal for each edge
      for (let i = 0; i < this._boundingPolygon.length; i++) {
        let edge = this._boundingPolygon[i].subtract(
          this._boundingPolygon[(i + 1) % this._boundingPolygon.length]
        );
        let perpendicular = clockwise ?
          new Vector(edge.y, -edge.x) :
          new Vector(-edge.y, edge.x);
        this.faceNormals.push(perpendicular.normalize());
      }
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
