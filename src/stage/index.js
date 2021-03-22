import { evaluateTriggers } from '../core';

export default class Stage {
  constructor(width, height) {
    this.frame = 0;

    // Default width and height
    if (width === undefined || height === undefined) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    } else {
      this.width = width;
      this.height = height;
    }

    // Create canvas
    let scale = window.devicePixelRatio;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = Math.floor(this.width * scale);
    this.canvas.height = Math.floor(this.height * scale);
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.context.scale(scale, scale);

    // Set initial fill and stroke
    window.fill = 'white';
    window.stroke = 'black';
    window.lineWidth = 2;

    // Initialize
    this.children = [];
    this.render();
  }

  resize(width, height) {
    if (width === undefined || height === undefined) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    } else {
      this.width = width;
      this.height = height;
    }
    let scale = window.devicePixelRatio;
    this.canvas.width = Math.floor(this.width * scale);
    this.canvas.height = Math.floor(this.height * scale);
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.context.scale(scale, scale);
  }

  addChild(obj) {
    this.children.push(obj);
  }

  clear() {
    this.children = [];
  }

  render() {
    this.frame++;
    this.context.clearRect(0, 0, this.width, this.height);
    for (let obj of this.children) {
      obj.update();
      obj.render(this.context);
    }
    if (typeof window._onframe == 'function') {
      window._onframe();
    }
    requestAnimationFrame(() => this.render());
  }
}
