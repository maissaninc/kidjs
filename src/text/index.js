import Actor from '../stage/actor';
import Matter from 'matter-js';
import Vector from '../core/vector';
import { degreesToRadians }  from '../core/math';
import { parseLength } from '../core/units';

let cursorX = 5;
let cursorY = 5;
let lineHeight = 1.1;

export default class Text extends Actor {
  constructor(x, y, text, live) {
    super(x, y);
    this._text = text;
    this.live = live;
    this.fill = window.fontColor;
    this._font = window.font;
    this._fontSize = window.fontSize;
    this._fontWeight = window.fontWeight;
    this._textAlign = window.textAlign;
    this._textBaseline = window.textBaseline;
    this._boundingPolygon = [];
    this.updateMetrics();
  }

  set text(value) {
    this._text = value;
    this.updateMetrics();
    this.updateBody();
  }

  get text() {
    return this._text;
  }

  set font(value) {
    this._font = value;
    this.updateMetrics();
    this.updateBody();
  }

  get font() {
    return this._font;
  }

  set fontSize(value) {
    this._fontSize = value;
    this.updateMetrics();
    this.updateBody();
  }

  get fontSize() {
    return this._fontSize;
  }

  set fontWeight(value) {
    this._fontWeight = value;
    this.updateMetrics();
    this.updateBody();
  }

  get fontWeight() {
    return this._fontWeight;
  }

  set textAlign(value) {
    this._textAlign = value;
    this.updateMetrics();
    this.updateBody();
  }

  get textAlign() {
    return this._textAlign;
  }

  set textBaseline(value) {
    this._textBaseline = value;
    this.updateMetrics();
    this.updateBody();
  }

  get textBaseline() {
    return this._textBaseline;
  }

  /**
   * Update text metrics.
   */
  updateMetrics() {
    window.stage.context.textBaseline = this.textBaseline;
    window.stage.context.font = this.fontWeight + ' ' + parseFontSize(this.fontSize) + ' ' + this.font;
    this._textMetrics = window.stage.context.measureText(this.text);
    this._width = this._textMetrics.width;
    this._height = this._textMetrics.actualBoundingBoxAscent + this._textMetrics.actualBoundingBoxDescent;
  }

  /**
   * Update physics body.
   */
  updateBody() {
    this.updateBoundingPolygon();
    if (this.body) {
      Matter.Body.setVertices(this.body, this._boundingPolygon);
    }
  }

  /**
   * Create bounding polygon around text.
   */
  updateBoundingPolygon() {
    this._boundingPolygon = [];

    // Determine left most coordinate
    let x;
    switch (this.textAlign) {
      case 'center':
        x = -(this._width / 2);
        break;
      case 'right':
        x = -this._width;
        break;
      default:
        x = 0;
    }
    
    // Points across top of text
    for (let i = 0; i < this.text.length; i = i + 1) {
      let metrics = window.stage.context.measureText(this.text[i]);
      this._boundingPolygon.push(new Vector(x, -metrics.actualBoundingBoxAscent));
      x = x + metrics.width;
      this._boundingPolygon.push(new Vector(x, -metrics.actualBoundingBoxAscent));
    }

    // Continue back across bottom of text
    for (let i = this.text.length - 1; i >= 0; i = i - 1) {
      let metrics = window.stage.context.measureText(this.text[i]);
      this._boundingPolygon.push(new Vector(x, metrics.actualBoundingBoxDescent));
      x = x - metrics.width;
      this._boundingPolygon.push(new Vector(x, metrics.actualBoundingBoxDescent));
    }
  }

  init() {
    this.updateBoundingPolygon();
    this.body = Matter.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
      friction: window.friction,
      frictionAir: 0,
      isStatic: true
    });
  }

  render(context) {
    context.fillStyle = this.fill;
    context.font = this.fontWeight + ' ' + parseFontSize(this.fontSize) + ' ' + this.font;
    context.textAlign = this.textAlign;
    context.textBaseline = this.textBaseline;
    const output = this.live ? window._kidjs_.eval(this.text) : this.text;
    context.save();
    context.translate(this.x, this.y);
    context.rotate(degreesToRadians(this.angle));
    context.translate(-this.x, -this.y);
    context.fillText(output, this.x, this.y);
    context.restore();

    // Debug bounding polygon
    /*if (this._boundingPolygon.length > 0) {
      let v = this._boundingPolygon[0].rotate(this.angle);
      context.beginPath();
      context.moveTo(this.x + v.x, this.y + v.y);
      for (let point of this._boundingPolygon) {
        v = point.rotate(this.angle);
        context.lineTo(this.x + v.x, this.y + v.y);
      }
      context.stroke();
    }*/
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
