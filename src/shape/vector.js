export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2)
    );
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

  normalize() {
    return new Vector(
      this.x / this.length,
      this.y / this.length
    );
  }

  dotProduct(v) {
    return (this.x * v.x + this.y * v.y);
  }
}
