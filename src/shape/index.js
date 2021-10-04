import Actor from '../stage/actor';
import Style from '../style';

let defaultStyle;

export default class Shape extends Actor {
  constructor(x, y) {
    super(x, y);
    this.fill = window.fill;
    this.stroke = window.stroke;
    this.lineWidth = window.lineWidth;
  }

  prerender(context) {

    // Create default style
    if (!defaultStyle) {
      defaultStyle = new Style(context);
    }
    if (!this.style) {
      this.style = defaultStyle;
    }

    // Choose random color
    if (this.fill == 'random') {
      this.fill = `rgb(${r}, ${g}, ${b})`;
    }

    // Choose next color in theme
    if (this.fill == 'theme') {
      this.fill = this.style.nextColor();
    }

    context.beginPath();
  }

  postrender(context) {
    context.closePath();
    this.style.fill(this.fill);
    this.style.stroke(this.stroke, this.lineWidth);
  }
}
