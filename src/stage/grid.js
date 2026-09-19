export default class Grid {

  /**
   * Create a new grid.
   *
   * @constructor
   * @param {int} size - Grid size
   * @param {string} color - Grid line color
   */
  constructor(color = '#f6f6f6') {
    this.color = color;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = 0;
    this.canvas.style.left = 0;
    this.canvas.style.display = 'block';
    this.canvas.style.imageRendering = 'pixelated';
  }

  /**
   * Render grid.
   *
   * @param {CanvasRenderingContext2D} context - Rendering context
   */
  render(width = 'auto', height = 'auto') {

    // Resize canvas
    if (width == 'auto' && height == 'auto') {
      this.canvas.style.objectFit = 'cover';
      this.canvas.style.objectPosition = 'top left';
    } else {
      this.canvas.style.objectFit = 'contain';
      this.canvas.style.objectPosition = 'center';
    }
    if (width == 'auto') {
      width = window.innerWidth;
    }
    if (height == 'auto') {
      height = window.innerHeight;
    }
    this.canvas.width = width;
    this.canvas.height = height;

    // Redraw grid
    let size = window._kidjs_.settings.pixelSize;
    if (window._kidjs_.settings.grid && size >= 5) {
      for (let x = 0; x < this.canvas.width + size; x = x + size) {
        for (let y = 0; y < this.canvas.height + size; y = y + size) {
          this.context.fillStyle = this.color;
          this.context.fillRect(x + size, y, 1, size);
          this.context.fillRect(x, y + size, size, 1);
        }
      }
    }
  }
}
