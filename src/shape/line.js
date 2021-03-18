import Shape from './';
import Vector from './vector';

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
        context.moveTo(this.x1, this.y1);
        for (let i = 0; i < this.vectors.length - 1; i = i + 2) {
          let magnitude = Math.sin(this.frame / 5) * 10
          context.bezierCurveTo(
            this.x1 + this.vectors[i].x - this.u.y * magnitude,
            this.y1 + this.vectors[i].y + this.u.x * magnitude,
            this.x1 + this.vectors[i].x + this.u.y * magnitude,
            this.y1 + this.vectors[i].y - this.u.x * magnitude,
            this.x1 + this.vectors[i + 1].x,
            this.y1 + this.vectors[i + 1].y
          );
        }
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

  shape.postrender = function(context) {
    context.stroke();
    this.frame++;
  }

  /**
   * Make the line wiggle
   */
  shape.wiggle = function() {
    this.state = 'wiggle';
    this.v = new Vector(x2 - x1, y2 - y1);
    this.u = this.v.normalize();
    this.vectors = [];
    let segment = this.v.length / 10;
    for (let i = 1; i <= 10; i++) {
      this.vectors.push(
        new Vector(this.u.x * segment * i, this.u.y * segment * i)
      );
    }
  }

  window.stage.addChild(shape);
  return shape;
}
