import Shape from './';
import Vector from './vector';

export default class Polygon extends Shape {
  constructor(x, y) {
    super(x, y);
    this.points = [];
  }

  addPoint(x, y) {
    this.points.push(new Vector(x, y));
  }

  render(context) {
    if (this.points.length < 2) {
      return;
    }
    this.prerender(context);
    let v = this.points[0].rotate(this.rotation);
    context.moveTo(this.x + v.x, this.y - v.y);
    for (let point of this.points) {
      v = point.rotate(this.rotation);
      context.lineTo(this.x +v.x, this.y - v.y);
    }
    this.postrender(context);
  }
}
