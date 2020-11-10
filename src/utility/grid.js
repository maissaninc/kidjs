function Grid() {
  this.container = document.createElement('div');
  this.container.style.overflow = 'hidden';
  this.container.style.position = 'fixed';
  this.container.style.top = 0;
  this.container.style.left = 0;
  this.container.style.width = '100%';
  this.container.style.height = '100%';
  this.container.zIndex = 100;
  this.canvas = document.createElement('canvas');
  this.canvas.id = 'grid';
  this.canvas.style.position = 'absolute';
  this.canvas.style.top = 0;
  this.canvas.style.left = 0;
  this.canvas.style.width = '4096px';
  this.canvas.style.height = '2160px';
  this.canvas.style.imageRendering = 'pixelated';
  this.canvas.width = 4096;
  this.canvas.height = 2160;
  this.container.appendChild(this.canvas);
  document.body.appendChild(this.container);
  this.gridColor = '#f6f6f6';
  this.draw();
}

Grid.prototype = {

  constructor: Grid,

  draw: function() {
    var context = this.canvas.getContext('2d');
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (KID.settings.grid) {
      for (var x = 0; x < this.canvas.width; x = x + KID.settings.pixelSize) {
        for (var y = 0; y < this.canvas.height; y = y + KID.settings.pixelSize) {
          context.fillStyle = this.gridColor;
          context.fillRect(x + KID.settings.pixelSize, y, 1, KID.settings.pixelSize);
          context.fillRect(x, y + KID.settings.pixelSize, KID.settings.pixelSize, 1);
        }
      }
    }
  }
};

export { Grid }
