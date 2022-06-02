export default class Grid {

  /**
   * Create a new grid.
   *
   * @constructor
   * @param {int} size - Grid size
   * @param {string} color - Grid line color
   */
  constructor(size = window._kidjs_.settings.pixelSize, color = '#f6f6f6') {
    this.size = size;
    this.color = color;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = 0;
    this.canvas.style.left = 0;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.display = window._kidjs_.settings.grid ? 'block' : 'none';
  }

  /**
   * Render grid.
   *
   * @param {CanvasRenderingContext2D} context - Rendering context
   */
  render() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    if (window._kidjs_.settings.grid && this.size >= 5) {
      for (let x = 0; x < this.canvas.width; x = x + this.size) {
        for (let y = 0; y < this.canvas.height; y = y + this.size) {
          this.context.fillStyle = this.color;
          this.context.fillRect(x + this.size, y, 1, this.size);
          this.context.fillRect(x, y + this.size, this.size, 1);
        }
      }
    }
  }
}
