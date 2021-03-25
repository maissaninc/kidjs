import Actor from './actor';

export default class Text extends Actor {
  constructor(x, y, text, isVariable) {
    super(x, y);
    this.text = text;
    this.isVariable = isVariable;
  }

  render(context) {
    context.fillStyle = 'black';
    context.font = '80px Verdana';
    context.textBaseline = 'top';
    const st = this.isVariable ? window._kidjs_.get(this.text) : this.text;
    context.fillText(st, this.x, this.y);
  }
}

export function display(x, y, text, isVariable = false) {
  const actor = new Text(x, y, text, isVariable);
  return actor;
}
