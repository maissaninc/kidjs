import Shape from './';
import Vector from '../core/vector';
import { parseLength } from '../core/units';

export default class Line extends Shape {
  constructor(x1, y1, x2, y2) {
    super(x1, y1);
    if (!this.stroke) {
      this.stroke = 'black';
    }
    this.v = new Vector(x2 - x1, y2 - y1);
    this.u = this.v.normalize();
    this.dashed = false;
    this.cap = false;
  }

  get x1() {
    return this.x;
  }

  set x1(value) {
    let x2 = this.x + this.v.x;
    this.x = value;
    this.v.x = x2 - value;
  }

  get y1() {
    return this.y;
  }

  set y1(value) {
    let y2 = this.y + this.v.y;
    this.y = value;
    this.v.y = y2 - value;
  }

  get x2() {
    return this.x + this.v.x;
  }

  set x2(value) {
    this.v.x = value - this.x;
  }

  get y2() {
    return this.y + this.v.y;
  }

  set y2(value) {
    this.v.y = value - this.y;
  }

  get color() {
    return this.stroke;
  }

  set color(value) {
    this.stroke = value;
  }

  render(context) {
    this.prerender(context);

    // Dashed line
    if (this.dashed) {
      context.setLineDash([5, 5]);
    }

    // Line cap
    switch (this.cap) {
      case 'round': 
        context.lineCap = 'round';
        break;
      case 'square':
        context.lineCap = 'square';
        break;
      default: 
        context.lineCap = 'butt';
    }

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
    this.style.stroke(context, this.stroke, this.lineWidth);
    context.setLineDash([]);
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
  if (x1 == null || y1 == null || x2 == null || y2 == null) {
    return;
  }
  let shape = new Line(
    parseLength(x1, 'x'),
    parseLength(y1, 'y'),
    parseLength(x2, 'x'),
    parseLength(y2, 'y')
  );
  window.stage.addChild(shape);
  return shape;
}
