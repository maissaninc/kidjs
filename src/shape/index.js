import Actor from '../stage/actor';
import Style from '../style';

export default class Shape extends Actor {
  constructor(x, y) {
    super(x, y);
    this.fill = window.fill;
    this.stroke = window.stroke;
    this.lineWidth = window.lineWidth;
    this.opacity = 1;
    this.themeColor = false;
    this._fragments = [];
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

  get bounds() {
    if (this.body) {
      return this.body.bounds;
    }
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
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      this.fill = `rgb(${r}, ${g}, ${b})`;
    }

    // Choose next color in theme
    if (this.fill == 'theme' || this.fill == 'default') {
      if (!this.themeColor) {
        this.themeColor = this.style.nextColor();
      }
      this.fill = this.themeColor;
    }

    context.beginPath();
    context.globalAlpha = this.opacity;
  }

  postrender(context) {
    context.closePath();
    this.style.fill(this.fill);
    this.style.stroke(this.stroke, this.lineWidth);
  }

  /**
   * Remove shape (and any fragments) from stage.
   */
  remove() {
    super.remove();
    for (let i = 0; i < this._fragments.length; i = i + 1) {
      this._fragments[i].remove();
    }
    this._fragments = [];
  }

  /**
   * Copy shape.
   */
  copy() {
    return new this.constructor(this.x, this.y);
  }

  /**
   * Assign properties of another shape to this one.
   *
   * @param {Shape} source
   */
  assign(source) {
    super.assign(source);
    this.fill = source.fill;
    this.stroke = source.stroke;
    this.lineWidth = source.lineWidth;
  }

  /**
   * Clone shape.
   *
   * @param {int} x - Optional x coordinate
   * @param {int} y - Optional y coordinate
   */
  clone(x = false, y = false) {
    if (this.body) {
      let width = this.body.bounds.max.x - this.body.bounds.min.x;
      let copy = new this.copy();
      copy.assign(this);
      if (x !== false && y !== false) {
        copy.x = x;
        copy.y = y;
      } else {
        this.x = this.x + width + 5;
      }
      copy.init();
      copy.angle = this.angle;
      copy.anchored = this.anchored;
      window.stage.addChild(copy);
      return copy;
    }
  }
}
