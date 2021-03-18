import Shape from './';
import Vector from './vector';

export default class Line extends Shape {
  constructor(x1, y1, x2, y2) {
    super();
    this.x = x1;
    this.y = y1;
    this.v = new Vector(x2 - x1, y2 - y1);
    this.u = this.v.normalize();
    return this;
  }

  render(context) {
    this.prerender(context);

    switch (this.state) {
      case 'wiggle':
        context.moveTo(this.x, this.y);
        for (let i = 0; i < this.vectors.length - 1; i = i + 2) {
          let magnitude = Math.sin(this.frame / 5) * 10
          context.bezierCurveTo(
            this.x + this.vectors[i].x - this.u.y * magnitude,
            this.y + this.vectors[i].y + this.u.x * magnitude,
            this.x + this.vectors[i].x + this.u.y * magnitude,
            this.y + this.vectors[i].y - this.u.x * magnitude,
            this.x + this.vectors[i + 1].x,
            this.y + this.vectors[i + 1].y
          );
        }
        if (this.frame > 300) {
          this.frame = 0;
          this.state = 'default';
        }
        break;

      default:
        context.moveTo(this.x, this.y);
        context.lineTo(this.x + this.v.x, this.y + this.v.y);
    }
    this.postrender(context);
  }

  postrender(context) {
    context.stroke();
    this.frame++;
  }

  wiggle() {
    this.state = 'wiggle';
    this.vectors = [];
    let segment = this.v.length / 10;
    for (let i = 1; i <= 10; i++) {
      this.vectors.push(
        new Vector(this.u.x * segment * i, this.u.y * segment * i)
      );
    }
  }
}

export function line(x1, y1, x2, y2) {
  let shape = new Line(x1, y1, x2, y2);
  window.stage.addChild(shape);
  return shape;
}
