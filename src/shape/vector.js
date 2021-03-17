export default class Vector {
  constructor(x, y, length = 1) {
    this.x = x;
    this.y = y;
    this.length = length;
  }

  rotate(degrees) {
    let angle = degress * (Math.PI / 180);
    let vector = {
      x: this.x * Math.cos(angle) - this.y * Math.sin(angle),
      y: this.x * Math.sin(angle) + this.y * Math.cos(angle)
    };
    this.x = vector.x;
    this.y = vector.y;
  }
}
