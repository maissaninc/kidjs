import Actor from '../stage/actor';

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
  const actor = new Text(x, y, text, true);
  window.stage.addChild(actor);
  return actor;
}

export function write(x, y, text) {
  const actor = new Text(x, y, text, false);
  window.stage.addChild(actor);
  return actor;
}
