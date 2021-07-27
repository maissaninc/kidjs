import Shape from './';
import Matter from 'matter-js';

export default class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  get body() {
    if (!this._body) {
      this._body =  Matter.Bodies.circle(this.position.x, this.position.y, this.radius, {
        friction: 0,
        frictionAir: 0,
        restitution: 1,
        isStatic: true
      });
    }
    return this._body;
  }

  render(context) {
    this.prerender(context);
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.postrender(context);
  }
}

export function circle(x, y, diameter) {
  const shape = new Circle(x, y, diameter / 2);
  window.stage.addChild(shape);
  return shape;
}
