import Actor from '../stage/actor';

export default class Shape extends Actor {
  constructor(x, y) {
    super(x, y);
    this.fill = window.fill;
    this.stroke = window.stroke;
    this.lineWidth = window.lineWidth;
  }

  prerender(context) {

    context.strokeStyle = 'gray';
    context.beginPath();
    context.arc(this.x, this.y, this.boundingRadius, 0, Math.PI * 2);
    context.stroke();

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
