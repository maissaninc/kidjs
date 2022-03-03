import Polygon from './polygon';
import Vector from '../core/vector';
import { parseLength } from '../core/units';

export default class RegularPolygon extends Polygon {
  constructor(x, y, diameter, sides) {
    super(x, y);
    this.sides = sides;
    this.diameter = diameter;
    if (this.sides > 2) {
      let angle = 360 / this.sides;
      let v = new Vector(0, this.diameter / 2);
      for (let i = 0; i < this.sides; i++) {
        this.addPoint(v.x, v.y);
        v = v.rotate(angle);
      }
    }
  }

  grow(amount, duration = 1, tween = 'easeInOut', queue = false) {
    return this.animate({
      size: this.size + amount
    }, duration, tween)
  }

  /**
   * Get size (diameter) of the polygon.
   */
  get size() {
    return this.diameter;
  }

  /**
   * Set size (diameter) of polygon and regenerate points.
   *
   * @param {int} value - Diameter of polygon
   */
  set size(value) {
    this.diameter = parseLength(value, 'size');
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].length = this.diameter / 2;
    }
  }
}

/**
 * Create new pentagon and add it to the stage.
 *
 * @param {int} x - X coordinate
 * @param {int} y - Y coordinate
 * @param {int} diameter - Diameter of polygon
 */
export function pentagon(x, y, diameter) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  let shape = new RegularPolygon(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(diameter, 'size'),
    5
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}

/**
 * Create new hexagon and add it to the stage.
 *
 * @param {int} x - X coordinate
 * @param {int} y - Y coordinate
 * @param {int} diameter - Diameter of polygon
 */
export function hexagon(x, y, diameter) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  let shape = new RegularPolygon(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(diameter, 'size'),
    6
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}

/**
 * Create new heptagon and add it to the stage.
 *
 * @param {int} x - X coordinate
 * @param {int} y - Y coordinate
 * @param {int} diameter - Diameter of polygon
 */
export function heptagon(x, y, diameter) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  let shape = new RegularPolygon(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(diameter, 'size'),
    7
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}

/**
 * Create new octagon and add it to the stage.
 *
 * @param {int} x - X coordinate
 * @param {int} y - Y coordinate
 * @param {int} diameter - Diameter of polygon
 */
export function octagon(x, y, diameter) {
  if (x == null || y == null || diameter == null) {
    return;
  }
  let shape = new RegularPolygon(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(diameter, 'size'),
    8
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
