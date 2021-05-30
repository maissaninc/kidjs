import Actor from '../stage/actor';

export default class Shape extends Actor {
  constructor(x, y) {
    super(x, y);
    this.fill = window.fill;
    this.stroke = window.stroke;
    this.lineWidth = window.lineWidth;
  }

  prerender(context) {
    switch (this.fill) {
      case 'random':
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.fill = `rgb(${r}, ${g}, ${b})`;
        context.fillStyle = this.fill;
        break;

      default:
        context.fillStyle = this.fill;
    }

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
