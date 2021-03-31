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

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  subtract(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  scale(s) {
    return new Vector(this.x * s, this.y * s);
  }

  normalize() {
    let l = this.length;
    return l > 0 ? new Vector(this.x / l, this.y / l) : new Vector(0, 0);
  }

  dot(v) {
    return (this.x * v.x + this.y * v.y);
  }

  cross(v) {
    return (this.x * v.y - this.y * v.x);
  }

  rotate(deg) {
    let angle = deg * (Math.PI / 180);
    return new Vector(
      this.x * Math.cos(angle) - this.y * Math.sin(angle),
      this.x * Math.sin(angle) + this.y * Math.cos(angle)
    );
  }

  distance(v) {
    return Math.sqrt(
      Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2)
    );
  }
}
