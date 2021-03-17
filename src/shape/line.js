import Shape from './';

/**
 * Adds a line to the stage
 */
export function line(x1, y1, x2, y2) {
  const shape = new Shape();

  shape.x1 = x1;
  shape.y1 = y1;
  shape.x2 = x2;
  shape.y2 = y2;

  /**
   * Render shape based on current frame and state
   */
  shape.render = function(context) {
    this.prerender(context);

    switch (this.state) {
      case 'wiggle':
        context.strokeStyle = 'red';
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y2);
        if (this.frame > 300) {
          this.frame = 0;
          this.state = 'default';
        }
        break;

      default:
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y2);
    }
    this.postrender(context);
  }

  /**
   * Make the line wiggle
   */
  shape.wiggle = function() {
    this.state = 'wiggle';
  }

  window.stage.addChild(shape);
  return shape;
}
