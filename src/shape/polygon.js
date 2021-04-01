import Shape from './';
import Vector from '../core/vector';

export default class Polygon extends Shape {
  constructor(x, y) {
    super(x, y);
    this.points = [];
  }

  addPoint(x, y) {
    let v = new Vector(x, -y);
    if (v.length > this.boundingRadius) {
      this.boundingRadius = v.length;
    }
    this.points.push(v);
  }

  render(context) {
    if (this.points.length < 2) {
      return;
    }
    this.prerender(context);
    let v = this.points[0].rotate(this.angle);
    context.moveTo(this.x + v.x, this.y - v.y);
    for (let point of this.points) {
      v = point.rotate(this.angle);
      context.lineTo(this.x + v.x, this.y - v.y);
    }
    this.postrender(context);
  }
}
