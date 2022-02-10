import Actor from '../stage/actor';
import Style from '../style';

export default class Shape extends Actor {
  constructor(x, y) {
    super(x, y);
    this.fill = window.fill;
    this.stroke = window.stroke;
    this.lineWidth = window.lineWidth;
  }

  _rgb() {
    window.stage.context.fillStyle = this.fill;
    let hex = window.stage.context.fillStyle;
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : {
      r: 0,
      g: 0,
      b: 0
    };
  }

  get r() {
    return this._rgb().r;
  }

  set r(value) {
    this.fill = `rgb(${value}, ${this.g}, ${this.b})`;
  }

  get g() {
    return this._rgb().g;
  }

  set g(value) {
    this.fill = `rgb(${this.r}, ${value}, ${this.b})`;
  }

  get b() {
    return this._rgb().b;
  }

  set b(value) {
    this.fill = `rgb(${this.r}, ${this.g}, ${value})`;
  }

  get color() {
    return this.fill;
  }

  set color(value) {
    this.fill = value;
  }

  prerender(context) {

    // Create default style
    if (!window._kidjs_.defaultStyle) {
      window._kidjs_.defaultStyle = new Style(context);
    }
    if (!this.style) {
      this.style = window._kidjs_.defaultStyle;
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
