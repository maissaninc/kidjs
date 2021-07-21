import Shape from './';
import Vector from '../core/vector';

export default class Curve extends Shape {
  constructor(args) {
    super();
    this.points = [];
    for (let i = 0; i < args.length - 1; i = i + 2) {
      this.points.push(new Vector(args[i], args[i+1]));
    }
  }

  drawSpline(context) {
    let points = [...this.points];
    points.unshift(points[0]);
    points.unshift(points[0]);
    points.push(points[points.length-1]);
    points.push(points[points.length-1]);
    context.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < points.length - 3; i++) {
      for (let t = 0; t <= 1; t += 0.1) {
        let ax = (-points[i].x + 3 * points[i + 1].x - 3 * points[i + 2].x + points[i + 3].x) / 6;
        let ay = (-points[i].y + 3 * points[i + 1].y - 3 * points[i + 2].y + points[i + 3].y) / 6;
        let bx = (points[i].x - 2 * points[i + 1].x + points[i + 2].x) / 2;
        let by = (points[i].y - 2 * points[i + 1].y + points[i + 2].y) / 2;
        let cx = (-points[i].x + points[i + 2].x) / 2;
        let cy = (-points[i].y + points[i + 2].y) / 2;
        let dx = (points[i].x + 4 * points[i + 1].x + points[i + 2].x) / 6;
        let dy = (points[i].y + 4 * points[i + 1].y + points[i + 2].y) / 6;
        context.lineTo(
          ax * Math.pow(t, 3) + bx * Math.pow(t, 2) + cx * t + dx,
          ay * Math.pow(t, 3) + by * Math.pow(t, 2) + cy * t + dy
        );
      }
    }
  }

  render(context) {
    this.prerender(context);
    this.drawSpline(context);
    this.postrender(context);
  }

  postrender(context) {
    context.stroke();
  }
}

export function curve(...args) {
  let shape = new Curve(args);
  return shape;
}
