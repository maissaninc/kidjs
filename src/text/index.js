import Actor from '../stage/actor';

export default class Text extends Actor {
  constructor(x, y, text, live) {
    super(x, y);
    this.text = text;
    this.live = live;
    this.fill = window.fontColor;
    this.font = window.font;
    this.fontSize = window.fontSize;
  }

  render(context) {
    context.fillStyle = this.fill;
    context.font = this.fontSize + ' ' + this.font;
    context.textBaseline = 'top';
    const output = this.live ? window._kidjs_.eval(this.text) : this.text;
    context.fillText(output, this.x, this.y);
  }
}

export function display(x, y, text) {
  const actor = new Text(x, y, text, true);
  return actor;
}

export function write(x, y, text) {
  const actor = new Text(x, y, text, false);
  return actor;
}
