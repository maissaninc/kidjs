function Scene() {
  this.sprites = [];
  this.walls = [];
  this.canvas = new KID.Canvas('kidjs-scene');
  window.addEventListener('click', this.onClick.bind(this));
  requestAnimationFrame(this.drawFrame.bind(this));
}

Scene.prototype = {

  constructor: Scene,

  addSprite: function(sprite) {
    this.sprites.push(sprite);
  },

  addWall: function(wall) {
    this.walls.push(wall);
  },

  reset: function() {
    this.sprites.splice(0, this.sprites.length);
    this.walls.splice(0, this.walls.length);
    this.canvas.clear();
  },

  drawFrame: function() {

    // Clear frame
    this.canvas.clear();

    // Draw walls
    for (var i = 0; i < this.walls.length; i = i + 1) {
      this.walls[i]._draw();
    }

    // Update and draw sprites
    for (var i = 0; i < this.sprites.length; i = i + 1) {
      this.sprites[i]._draw();
      this.sprites[i].updatePosition();
    }

    // Check for collisions
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
          var event = new Event('collision');
          event.a = this.sprites[i];
          event.b = this.sprites[j];
          window.dispatchEvent(event);
        }
      }
    }

    requestAnimationFrame(this.drawFrame.bind(this));
  },

  onClick: function(e) {
    for (var i = 0; i < this.sprites.length; i = i + 1) {
      if (this.canvas.context.isPointInPath(
        this.sprites[i]._boundingPath,
        e.clientX,
        e.clientY
      )) {
        var event = new Event('click');
        this.sprites[i].dispatchEvent(event);
      }
    }
  }
};

export { Scene }
