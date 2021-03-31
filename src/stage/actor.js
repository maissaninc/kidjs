import Vector from '../core/vector';

export default class Actor {
  constructor(x, y, stage) {

    // Current state
    this.frame = 0;
    this.state = 'default';

    // Position and movement
    this.x = x;
    this.y = y;
    this.rotation = 0;
    this.speed = {
      x: 0,
      y: 0,
      rotation: 0
    };
    this.acceleration = {
      x: 0,
      y: 0,
      rotation: 0
    };
    this.weightless = true;

    // Bounds
    this.boundingRadius = 0;

    // Add to stage
    if (typeof stage === 'undefined') {
      window.stage.addChild(this);
    } else {
      stage.addChild(this);
    }
  }

  update() {
    this.frame++;

    // Update position
    this.x = this.x + this.speed.x;
    this.y = this.y + this.speed.y;
    this.rotation = this.rotation + this.speed.rotation;

    // Apply gravity
    if (!this.weightless) {
      this.speed.y = this.speed.y + parseInt(window.gravity) / 2;
      if (window.floor && this.y > stage.height) {
        this.y = stage.height;
      }
    }

    // Update velocity
    this.speed.x = this.speed.x + this.acceleration.x;
    this.speed.y = this.speed.y + this.acceleration.y;
    this.speed.rotation = this.speed.rotation + this.acceleration.rotation;
  }

  spin(speed = 5) {
    this.speed.rotation = speed;
  }

  stop() {
    this.frame = 0;
    this.state = 'default';
  }

  collidesWith(actor) {
    let v = new Vector(this.x - actor.x, this.y - actor.y);
    if (v.length < this.boundingRadius + actor.boundingRadius) {
      return true;
    } else {
      return false;
    }
  }
}
