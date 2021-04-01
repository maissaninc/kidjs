import Circle from '../shape/circle';
import Collision from './collision';
import Vector from '../core/vector';

export default class Actor {

  /**
   * Create a new actor and add it to the stage.
   *
   * @constructor
   * @param {int} x - Initial x coordinate
   * @param {int} y - Initial y coordinate
   * @param {Stage} [stage] - Optional stage to add actor to. Defaults to stage object on window.
   */
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

  /**
   * Update the position of Actor on stage.
   * This is called each frame.
   */
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

  /**
   * Detect if this actor collects with another actor.
   *
   * @param {Actor} actor - Second actor
   * @returns {(object|false)} Object containing collision data, or false if no collision occured.
   */
  collidesWith(actor) {

    // Circle colliding with circle
   if (this.constructor.name === 'Circle' && actor.constructor.name === 'Circle') {
      let v = new Vector(this.x - actor.x, this.y - actor.y);
      let distance = v.length;
      let radiusSum = this.boundingRadius + actor.boundingRadius;
      if (distance < radiusSum) {

        // Circles at exactly the same position
        if (distance === 0) {
          return new Collision({
            'depth': radiusSum,
            'normal': new Vector(0, -1),
            'start': this.boundingRadius > actor.boundingRadius ?
              new Vector(this.x, this.y + this.boundingRadius) :
              new Vector(actor.x, actor.x + actor.boundingRadius)
          });

        // Circles at different positions
        } else {
          let u = v.normalize().scale(-actor.boundingRadius);
          return new Collision({
            'depth': radiusSum - distance,
            'normal': v.normalize(),
            'start': new Vector(actor.x + u.x, actor.y + u.y)
          });
        }
      } else {
        return false;
      }
    }

    // Unable to determine collision
    return false;
  }
}
