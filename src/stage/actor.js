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
    this.frame = 0;
    this.state = 'default';
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.angle = 0;
    this.angularVelocity = 0;
    this.angularAcceleration = 0;
    this.mass = 1;
    this.inverseMass = 1;
    this.friction = 0.8;
    this.bounciness = 0.2;
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

  get x() { return this.position.x; }
  get y() { return this.position.y; }
  set x(value) { this.position.x = value; }
  set y(value) { this.position.y = value; }

  set mass(value) {
    this.mass = value;
    if (value != 0) {
      this.inverseMass = 1 / value;
    }
  }

  get inertia() {
    return this.mass * Math.pow(this.boundingRadius, 2);
  }

  /**
   * Update the position of Actor on stage.
   * This is called each frame.
   */
  update() {
    this.frame++;

    // Update position
    this.position = this.position.add(this.velocity);
    this.angle = this.angle + this.angularVelocity;

    // Apply gravity
    if (!this.weightless) {
      this.velocity.y = this.velocity.y + parseInt(window.gravity) / 2;
      if (window.floor && this.position.y > stage.height) {
        this.position.y = stage.height;
      }
    }

    // Update velocity
    this.velocity = this.velocity.add(this.acceleration);
    this.angularVelocity = this.angularVelocity + this.angularAcceleration;
  }

  spin(speed = 5) {
    this.angularVelocity = speed;
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
      let v = this.position.subtract(actor.position);
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
            'start': actor.position.add(u)
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
