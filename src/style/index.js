import Texture from './texture';
import paint from './textures/paint.jpg';

export default class Style {
  constructor(context) {
    this.context = context;
    this.colors = [
      '#e15241', '#d63964', '#9036aa', '#6140b0', '#4253af', '#4896ec',
      '#4aa7ee', '#53b9d1', '#429488', '#67ac5b', '#97c05c', '#d0db59',
      '#fceb60', '#f6c244', '#f19c38', '#ec6237'
    ];
    this.colorIndex = Math.floor(Math.random() * this.colors.length);
    this.texture = new Texture(context, paint);
  }

  nextColor() {
    this.colorIndex = (this.colorIndex + 1) % this.colors.length;
    return this.colors[this.colorIndex];
  }

  fill(color) {
    this.context.fillStyle = color;
    this.context.fill();
    this.context.fillStyle = this.texture.pattern;
    this.context.globalAlpha = this.texture.opacity;
    this.context.globalCompositeOperation = 'overlay';
    this.context.fill();
    this.context.globalAlpha = 1;
    this.context.globalCompositeOperation = 'source-over';
  }

  stroke(color, width) {
    if (!color) {
      color = 'transparent';
    }
    this.context.strokeStyle = color;
    this.context.lineWidth = width;
    this.context.stroke();
  }
}