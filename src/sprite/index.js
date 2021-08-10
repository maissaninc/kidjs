import Actor from '../stage/actor';
import assetUrlFilter from '../core';

export default class Sprite extends Actor {

  /**
   * Create a new image and add it to the stage.
   *
   * @constructor
   * @param {int} x - Initial x coordinate
   * @param {int} y - Initial y coordinate
   * @param {string} imageUrl - Path to image
   */
  constructor(x, y, imageUrl) {
    super(x, y);
    this.image = new Image();
    this.image.onload = () => this.loaded = true;
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
        this.x - (this.image.width * this.scale / 2),
        this.y - (this.image.height * this.scale / 2),
        this.image.width * this.scale,
        this.image.height * this.scale
      );
    }
  }
}

export function image(x, y, url) {
  const sprite = new Sprite(x, y, url);
  return sprite;
}
