function Sprite(image) {
  this.x = 0;
  this.y = 0;
  this.width = false;
  this.height = false;
  this.image = image;
  this.direction = 0;
  this.speed = 0;
  this.acceleration = 0;
  KID._scene.addSprite(this);
}

Sprite.prototype = {

  constructor: Sprite,

  _draw: function() {
    if (typeof this.draw === 'function') {
      this.draw.apply(KID._scene.canvas, [this.x, this.y]);
    } else {
      if (this.image) {

        // Draw image
        if (this.width !== false && this.height !== false) {
          this.image = KID._scene.canvas.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
          this.image = KID._scene.canvas.drawImage(this.image, this.x, this.y);
        }

        // Set width and height from image
        if (this.image instanceof Image) {
          if (this.width === false) {
            this.width = this.image.width;
          }
          if (this.height === false) {
            this.height = this.image.height;
          }
        }
      }
    }
  },

  updatePosition: function() {
    this.speed = this.speed + this.acceleration;
    this.x = this.x + Math.cos(this.degreesToRadians(this.direction)) * this.speed;
    this.y = this.y + Math.sin(this.degreesToRadians(this.direction)) * this.speed;
  },

  degreesToRadians: function(degrees) {
    return degrees * Math.PI / 180;
  }
};

export { Sprite }
