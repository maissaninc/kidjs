function Sprite(image) {
  this._x = 0;
  this._y = 0;
  this.width = false;
  this.height = false;
  this.image = image;
  this.direction = 0;
  this.speed = 0;
  this.acceleration = 0;
  this._listeners = {};

  KID._scene.addSprite(this);
}

Sprite.prototype = {

  constructor: Sprite,

  set x(val) {
    this._x = val;
    this._updateBoundingPath();
  },

  get x() {
    return this._x;
  },

  set y(val) {
    this._y = val;
    this._updateBoundingPath();
  },

  get y() {
    return this._y;
  },

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

  _updateBoundingPath: function() {
    this._boundingPath = new Path2D();
    this._boundingPath.moveTo(this.x, this.y);
    this._boundingPath.lineTo(this.x + this.width, this.y);
    this._boundingPath.lineTo(this.x + this.width, this.y + this.height);
    this._boundingPath.lineTo(this.x, this.y + this.height);
    this._boundingPath.closePath();
  },

  updatePosition: function() {
    this.speed = this.speed + this.acceleration;
    if (this.speed > 0) {
      this.x = this.x + Math.cos(this.degreesToRadians(this.direction)) * this.speed;
      this.y = this.y + Math.sin(this.degreesToRadians(this.direction)) * this.speed;
    }
  },

  degreesToRadians: function(degrees) {
    return degrees * Math.PI / 180;
  },

  addEventListener(event, listener) {
    if (!Array.isArray(this._listeners[event])) {
      this._listeners[event] = [];
    }
    this._listeners[event].push(listener);
  },

  removeEventListener(event, listener) {
    if (Array.isArray(this._listeners[event])) {
      for (var i = this._listeners[event].length; i >= 0; i = i - 1) {
        if (this._listeners[event][i] == listener) {
          this._listeners[event].splice(i, 1);
        }
      }
    }
  },

  dispatchEvent(event) {
    if (Array.isArray(this._listeners[event.type])) {
      for (var i = 0; i < this._listeners[event.type].length; i = i + 1) {
        this._listeners[event.type][i].call(this);
      }
    }
  }
};

export { Sprite }
