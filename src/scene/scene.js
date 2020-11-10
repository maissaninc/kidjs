function Scene() {
  this.sprites = [];
  this.canvas = new KID.Canvas('kidjs-scene');
}

Scene.prototype = {

  constructor: Scene,

  addSprite: function(sprite) {
    this.sprites.push(sprite);
  },

  drawFrame: function() {

    // Clear frame
    this.canvas.clear();

    // Update and draw sprites
    for (var i = 0; i < this.sprites.length; i = i + 1) {
      this.sprites[i]._draw();
      this.sprites[i].updatePosition();
    }

    // Check for collisions
    if (typeof window.onCollision == 'function') {
      for (var i = 0; i < this.sprites.length; i = i + 1) {
        for (var j = i + 1; j < this.sprites.length; j = j + 1) {

          // Check for box collision
          if (
            this.sprites[i].width && this.sprites[i].height &&
            this.sprites[j].width && this.sprites[j].height &&
            this.sprites[i].x + this.sprites[i].width > this.sprites[j].x &&
            this.sprites[i].x < this.sprites[j].x + this.sprites[j].width &&
            this.sprites[i].y + this.sprites[i].height > this.sprites[j].y &&
            this.sprites[i].y < this.sprites[j].y + this.sprites[j].height
          ) {
            window.onCollision(this.sprites[i], this.sprites[j]);
          }
        }
      }
    }
  }
};

export { Scene }
