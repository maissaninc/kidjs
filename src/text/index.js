import Actor from '../stage/actor';
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
  }

  render(context) {
    context.fillStyle = this.fill;
    context.font = parseFontSize(this.fontSize) + ' ' + this.font;
    context.textAlign = this.textAlign;
    context.textBaseline = this.textBaseline;
    const output = this.live ? window._kidjs_.eval(this.text) : this.text;
    context.fillText(output, this.x, this.y);
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
  window.stage.addChild(actor);

  // Update cursor position
  if (linebreak) {
    cursorX = 5;
    cursorY = cursorY + parseInt(parseFontSize(actor.fontSize)) * lineHeight;
  } else {
    window.stage.context.font = parseFontSize(actor.fontSize) + ' ' + actor.font;
    const metrics = window.stage.context.measureText(text);
    cursorX = cursorX + metrics.width;
  }

  return actor;
}
