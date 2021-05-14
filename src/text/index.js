import Actor from '../stage/actor';

export default class Text extends Actor {
  constructor(x, y, text, live) {
    super(x, y);
    this.text = text;
    this.live = live;
  }

  render(context) {
    context.fillStyle = 'black';
    context.font = '80px Verdana';
    context.textBaseline = 'top';
    const output = this.live ? window._kidjs_.eval(this.text) : this.text;
    context.fillText(output, this.x, this.y);
  }
}

export function display(x, y, text, live = false) {
  const actor = new Text(x, y, text, live);
  return actor;
}
