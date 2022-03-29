export default class Grid {

  /**
   * Create a new grid.
   *
   * @constructor
   * @param {int} size - Grid size
   * @param {string} color - Grid line color
   */
  constructor(size = 10, color = '#f6f6f6') {
    this.size = size;
    this.color = color;
  }

  /**
   * Render grid.
   *
   * @param {CanvasRenderingContext2D} context - Rendering context
   */
  render(context) {
    for (let x = 0; x < context.canvas.width; x = x + this.size) {
      for (let y = 0; y < context.canvas.height; y = y + this.size) {
        context.fillStyle = this.color;
        context.fillRect(x + this.size, y, 1, this.size);
        context.fillRect(x, y + this.size, this.size, 1);
      }
    }
  }
}
