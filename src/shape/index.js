export default class Shape {
  constructor() {
    this.fill = window.fill;
    this.stroke = window.stroke;
    this.lineWidth = window.lineWidth;

    this.speed = {
      x: 0,
      y: 0
    };
    this.acceleration = {
      x: 0,
      y: 0
    };

    this.state = 'default';
    this.frame = 0;

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
    this.frame++;
  }

  updatePosition() {
    this.x = this.x + this.speed.x;
    this.y = this.y + this.speed.y;
    this.speed.x = this.speed.x + this.acceleration.x;
    this.speed.y = this.speed.y + this.acceleration.y;
  }
}
