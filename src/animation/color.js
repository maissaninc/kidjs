export default class Color {
  constructor(color) {
    let rgb = this.toRGB(color);
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
  }

  toRGB(color) {
    let context = document.createElement('canvas').getContext('2d');
    context.fillStyle = color;
    let hex = context.fillStyle;
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
}
