import Shape from './';
import Vector from './vector';

export default class Polygon extends Shape {
  constructor() {
    super();
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
    context.moveTo(this.x + this.points[0].x, this.y - this.points[0].y);
    for (let point of this.points) {
      context.lineTo(this.x + point.x, this.y - point.y);
    }
    this.postrender(context);
  }
}
