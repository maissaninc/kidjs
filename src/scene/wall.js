function Wall(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;

  KID._scene.addWall(this);
}

Wall.prototype = {

  constructor: Wall,

  _draw: function() {
    if (typeof this.draw === 'function') {
      this.draw.apply(KID._scene.canvas, [this.x1, this.y1, this.x2, this.y2]);
    } else {
      KID._scene.canvas.moveTo(this.x1, this.y1);
      KID._scene.canvas.lineTo(this.x2, this.y2);
    }
  }
};

export { Wall }
