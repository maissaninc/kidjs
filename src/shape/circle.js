import Shape from './';
import Matter from 'matter-js';

export default class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  init() {
    this.body =  Matter.Bodies.circle(this.position.x, this.position.y, this.radius, {
      frictionAir: 0,
      isStatic: true
    });
    this.bounciness = 1;
  }

  render(context) {
    this.prerender(context);
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.postrender(context);
  }

  grow(amount, duration = 1, tween = 'easeInOut', queue = false) {
    return this.animate({
      radius: this.radius + (amount / 2)
    }, duration, tween)
  }
}

export function circle(x, y, diameter) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  const shape = new Circle(x, y, diameter / 2);
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
