import Shape from './';

export function circle(x, y, radius) {
  const shape = new Shape();

  shape.x = x;
  shape.y = y;
  shape.radius = radius;

  shape.render = function(context) {
    this.prerender(context);
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.postrender(context);
  }

  window.stage.addChild(shape);

  return shape;
}
