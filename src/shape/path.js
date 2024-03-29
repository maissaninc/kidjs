import Shape from './';

export default class Path extends Shape {

  constructor(x = 0, y = 0) {
    super(x, y);
    this._path = new Path2D();
    this.stroke = 'black';
  }

  moveTo(x, y) {
    this._path.moveTo(x, y);
  }

  lineTo(x, y) {
    this._path.lineTo(x, y);
  }

  bezierCurveTo(x1, y1, x2, y2, x3, y3) {
    this._path.bezierCurveTo(x1, y1, x2, y2, x3, y3);
  }

  quadraticCurveTo(x1, y1, x2, y2) {
    this._path.quadraticCurveTo(x1, y1, x2, y2);
  }

  render(context) {
    context.strokeStyle = this.stroke;
    context.lineWidth = this.lineWidth;
    context.stroke(this._path);
  }
}

export function path() {
  const shape = new Path();
  window.stage.addChild(shape);
  return shape;
}