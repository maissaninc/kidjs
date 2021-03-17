import Shape from './';

export function rect(x, y, width, height) {
  const shape = new Shape();

  shape.x = x;
  shape.y = y;
  shape.width = width;
  shape.height = height;

  shape.render = function(context) {
    this.prerender(context);
    context.moveTo(this.x - (this.width / 2), this.y - (this.height / 2));
    context.lineTo(this.x + (this.width / 2), this.y - (this.height / 2));
    context.lineTo(this.x + (this.width / 2), this.y + (this.height / 2));
    context.lineTo(this.x - (this.width / 2), this.y + (this.height / 2));
    this.postrender(context);
  }

  window.stage.addChild(shape);

  return shape;
}
