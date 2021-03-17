export default class Shape {
  constructor() {
    this.fill = window.fill;
    this.stroke = window.stroke;
    this.lineWidth = window.lineWidth;
    return this;
  }

  prerender(context) {
    context.fillStyle = this.fill;
    context.strokeStyle = this.stroke;
    context.lineWidth = this.lineWidth;
    context.beginPath();
  }

  postrender(context) {
    context.closePath();
    context.fill();
    context.stroke();
  }
}
