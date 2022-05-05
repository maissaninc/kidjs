import Polygon from './polygon';
import Matter from 'matter-js';
import { parseLength } from '../core/units';

export default class Rect extends Polygon {
  constructor(x, y, width, height) {
    super(x, y);
    this._width = width;
    this._height = height;
    this.addPoint(-width / 2, -height / 2);
    this.addPoint(width / 2, -height / 2);
    this.addPoint(width / 2, height / 2);
    this.addPoint(-width / 2, height / 2)
  }

  init() {
    this.body = Matter.Bodies.rectangle(this.position.x, this.position.y, this._width, this._height, {
      frictionAir: 0,
      isStatic: true
    });
  }

  set width(value) {
    this._width = value;
    this.updatePoint(0, -value / 2);
    this.updatePoint(1, value / 2);
    this.updatePoint(2, value / 2);
    this.updatePoint(3, -value / 2);
  }

  get width() {
    return this._width;
  }

  set height(value) {
    this._height = value;
    this.updatePoint(0, null, -value / 2);
    this.updatePoint(1, null, -value / 2);
    this.updatePoint(2, null, value / 2);
    this.updatePoint(3, null, value / 2);
  }

  get height() {
    return this._height;
  }

  copy() {
    return new Rect(this.x, this.y, this.width, this.height);
  }
}

export function rect(x, y, width, height) {
  if (x == null || y == null || width == null || height == null) {
    return;
  }
  const shape = new Rect(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(width, 'x'),
    parseLength(height, 'y')
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}

export function square(x, y, size) {
  if (x == null || y == null || size == null) {
    return;
  }
  let shape = new Rect(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    parseLength(size, 'size'),
    parseLength(size, 'size')
  );
  shape.init();
  window.stage.addChild(shape);
  return shape;
}
