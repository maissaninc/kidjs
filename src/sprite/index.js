import Actor from '../stage/actor';
import { assetUrlFilter } from '../core';

export default class Sprite extends Actor {

  /**
   * Create a new image and add it to the stage.
   *
   * @constructor
   * @param {string} imageUrl - Path to image
   * @param {int} x - Initial x coordinate
   * @param {int} y - Initial y coordinate
   * @param {int}
   */
  constructor(imageUrl, x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
      if (this.width === false) {
        this.width = this.image.width;
      }
      if (this.height === false) {
        this.height = this.image.height;
      }
    }
    this.image.src = assetUrlFilter(imageUrl);
    this.scale = 1;
  }

  /**
   * Render image.
   *
   * @param {CanvasRenderingContext2D} context - Canvas drawing context.
   */
  render(context) {
    if (this.loaded) {
      context.drawImage(
        this.image,
        this.x - (this.width * this.scale / 2),
        this.y - (this.height * this.scale / 2),
        this.width * this.scale,
        this.height * this.scale
      );
    }
  }
}

export function image(url, x, y, width = false, height = false) {
  const sprite = new Sprite(url, x, y, width, height);
  window.stage.addChild(sprite);
  return sprite;
}
