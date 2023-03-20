import Actor from '../stage/actor';
import Matter from 'matter-js';
import { degreesToRadians }  from '../core/math';
import { parseLength } from '../core/units';

let cursorX = 5;
let cursorY = 5;
let lineHeight = 1.1;

export default class Text extends Actor {
  constructor(x, y, text, live) {
    super(x, y);
    this.text = text;
    this.live = live;
    this.fill = window.fontColor;
    this.font = window.font;
    this.fontSize = window.fontSize;
    this.textAlign = window.textAlign;
    this.textBaseline = window.textBaseline;
    this._boundingPolygon = [];

    // Determine text metrics
    window.stage.context.font = parseFontSize(this.fontSize) + ' ' + this.font;
    this._textMetrics = window.stage.context.measureText(text);
    this._width = this._textMetrics.width;
    this._height = this._textMetrics.actualBoundingBoxAscent + this._textMetrics.actualBoundingBoxDescent;
  }

  init() {
    let x, y;
    switch (this.textAlign) {
      case 'center':
        x = this.position.x - (this._width / 2);
        break;
      case 'right':
        x = this.position.x - this._width;
        break;
      default:
        x = this.position.x;
    }
    switch (this.textBaseline) {
      case 'top':
        y = this.position.y;
        break;
      case 'middle':
        y = this.position.y - (this._height / 2);
        break;
      case 'bottom':
        y = this.position.y - this._height;
        break;
      case 'alphabetic':
      default:
        y = this.position.y - this._textMetrics.actualBoundingBoxAscent;
    }
    this.body = Matter.Bodies.rectangle(x, y, this._width, this._height, {
      friction: window.friction,
      frictionAir: 0,
      isStatic: true
    });
  }

  render(context) {
    context.fillStyle = this.fill;
    context.font = parseFontSize(this.fontSize) + ' ' + this.font;
    context.textAlign = this.textAlign;
    context.textBaseline = this.textBaseline;
    const output = this.live ? window._kidjs_.eval(this.text) : this.text;
    context.save();
    context.translate(this.x, this.y);
    context.rotate(degreesToRadians(this.angle));
    context.translate(-this.x, -this.y);
    context.fillText(output, this.x, this.y);
    context.restore();
  }
}

function parseFontSize(value) {
  if (typeof value === 'number') {
    return value + 'px';
  }
  var regex = /(\d+)(px)/i;
  var match = regex.exec(value);
  if (!match) {
    return '40px';
  }
  if (match[2] == 'px') {
    return parseFloat(match[1]) + 'px';
  }
}

export function display(x, y, text) {
  const actor = new Text(
    parseLength(x, 'x'),
    parseLength(y, 'y'),
    text,
    true
  );
  actor.init();
  window.stage.addChild(actor);
  return actor;
}

export function write(x, y, text) {
  if (typeof y == 'undefined' && typeof text == 'undefined') {
    return _write(x);
  } else {
    const actor = new Text(
      parseLength(x, 'x'),
      parseLength(y, 'y'),
      text,
      false
    );
    actor.init();
    window.stage.addChild(actor);
    return actor;
  }
}

export function writeln(text) {
  return _write(text, true);
}

export function resetCursor() {
  cursorX = 5;
  cursorY = 5;
}

function _write(text, linebreak) {
  const actor = new Text(cursorX, cursorY, text, false);
  actor.textAlign = 'left';
  actor.textBaseline = 'top';
  actor.init();
  window.stage.addChild(actor);

  // Update cursor position
  if (linebreak) {
    cursorX = 5;
    cursorY = cursorY + parseInt(parseFontSize(actor.fontSize)) * lineHeight;
  } else {
    cursorX = cursorX + actor._width;
  }

  return actor;
}
