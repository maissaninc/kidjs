import Actor from '../stage/actor';
import * as textureImage from './texture.jpg';

let colors = [
  '#e15241',
  '#d63964',
  '#9036aa',
  '#6140b0',
  '#4253af',
  '#4896ec',
  '#4aa7ee',
  '#53b9d1',
  '#429488',
  '#67ac5b',
  '#97c05c',
  '#d0db59',
  '#fceb60',
  '#f6c244',
  '#f19c38',
  '#ec6237'
];

let nextColor = Math.floor(Math.random() * colors.length);

export default class Shape extends Actor {
  constructor(x, y) {
    super(x, y);
    this.fill = window.fill;
    this.stroke = window.stroke;
    this.lineWidth = window.lineWidth;
    this.texture = true;
  }

  prerender(context) {
    switch (this.fill) {
      case 'theme':
        this.fill = colors[nextColor];
        nextColor = (nextColor + 1) % colors.length;
        context.fillStyle = this.fill;
        break;

      case 'random':
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.fill = `rgb(${r}, ${g}, ${b})`;
        context.fillStyle = this.fill;
        break;

      default:
        context.fillStyle = this.fill;
    }

    if (!this.stroke) {
      this.stroke = 'transparent';
    }

    context.strokeStyle = this.stroke;
    context.lineWidth = this.lineWidth;
    context.beginPath();
  }

  postrender(context) {
    context.closePath();
    context.fill();

    if (this.texture) {
      console.log(textureImage);
      let pattern = context.createPattern(textureImage, 'repeat');
      context.fillStyle = pattern;
      context.fill();
    }

    context.stroke();
  }
}
