import Texture from './texture';
import paint from './textures/paint.jpg';
import seedrandom from 'seedrandom';

export default class Style {
  constructor(context) {
    this.context = context;
    this.colors = [
      '#e15241', '#d63964', '#9036aa', '#6140b0', '#4253af', '#4896ec',
      '#4aa7ee', '#53b9d1', '#429488', '#67ac5b', '#97c05c', '#d0db59',
      '#fceb60', '#f6c244', '#f19c38', '#ec6237'
    ];
    this.texture = new Texture(context, paint);
    this.reset();
  }

  reset() {
    let random = seedrandom(window._kidjs_.seed);
    this.colorIndex = Math.floor(random() * this.colors.length);
  }

  nextColor() {
    this.colorIndex = (this.colorIndex + 1) % this.colors.length;
    return this.colors[this.colorIndex];
  }

  fill(context, color) {
    context.fillStyle = color;
    context.fill();
    context.fillStyle = this.texture.pattern;
    context.globalAlpha = this.context.globalAlpha * this.texture.opacity;
    context.globalCompositeOperation = 'overlay';
    context.fill();
    context.globalAlpha = 1;
    context.globalCompositeOperation = 'source-over';
  }

  stroke(context, color, width) {
    if (!color) {
      color = 'transparent';
    }
    context.strokeStyle = color;
    context.lineWidth = width;
    context.stroke();
  }
}
