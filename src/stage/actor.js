import Circle from '../shape/circle';
import Vector from '../core/vector';
import { degreesToRadians, radiansToDegrees }  from '../core/math';
import Matter from 'matter-js';

export default class Actor {

  /**
   * Create a new actor and add it to the stage.
   *
   * @constructor
   * @param {int} x - Initial x coordinate
   * @param {int} y - Initial y coordinate
   */
  constructor(x, y) {
    this.frame = 0;
    this.state = 'default';
    this.destination = new Vector(x, y);

    // Internal properties
    this.position = new Vector(x, y);
    this._angle = 0;

    // Detect change in velocity
    this.velocity = new Vector(0, 0);
    this.velocity.onchange = () => {
      this.anchored = false;
      if (this.body) {
        Matter.Body.setVelocity(this.body, this.velocity);
      }
    }

    // Event listeners
    this.eventListeners = {};
  }

  get x() {
    return this.body ? this.body.position.x : this.position.x;
  }

  get y() {
    return this.body ? this.body.position.y : this.position.y;
  }

  set x(value) {
    this.position.x = value;
    this.velocity.x = 0;
    this.velocity.y = 0;
    if (this.body) {
      this.body.position.x = value;
    }
  }

  set y(value) {
    this.position.y = value;
    this.velocity.x = 0;
    this.velocity.y = 0;
    if (this.body) {
      this.body.position.y = value;
    }
  }

  get angle() {
    return this.body ? radiansToDegrees(this.body.angle) : this._angle;
  }

  set angle(value) {
    this._angle = value;
    if (this.body) {
      Matter.Body.setAngle(this.body, degreesToRadians(this._angle));
    }
  }

  set anchored(value) {
    if (this.body) {
      Matter.Body.setStatic(this.body, value);
    }
  }

  /**
   * Update the position of Actor on stage.
   * This is called each frame.
   */
  update() {
    this.frame++;

    // Move along vector to destination
    if (this.status == 'sliding') {
      let v = this.destination.subtract(this.position);
      if (v.length > 0.05) {
        this.position = this.position.add(v.scale(0.05));
        this.status = 'default';
      } else {
        this.position = this.destination;
      }
    }
  }

  /**
   * Rotate specified number of degrees.
   *
   * @param {float} angle - Number of degrees to rotate
   * @return {Actor} Reference to self
   */
  rotate(degrees) {
    this.angle = this.angle + degrees;
    if (this.body) {
      Matter.Body.setAngle(this.angle);
    }
    return this;
  }

  /**
   * Move relative to current position.
   *
   * @param {int} x - Number of pixels to move along x axis
   * @param {int} y - Number of pixels to move along y axis
   * @return {Actor} Reference to self
   */
  move(x = 0, y = 0) {
    this.position.x = this.position.x + x;
    this.position.y = this.position.y + y;
    if (this.body) {
      Matter.Body.setPosition(this.body, this.position);
    }
    return this;
  }

  /**
   * Slide relative to current position.
   *
   * @param {int} x - Number of pixels to move along x axis
   * @param {int} y - Number of pixels to move along y axis
   * @return {Actor} Reference to self
   */
  slide(x = 0, y = 0) {
    this.status = 'sliding';
    this.destination.x = this.position.x + x;
    this.destination.y = this.position.y + y;
    if (this.body) {
      Matter.Body.setPosition(this.body, this.position);
    }
  }

  /**
   * Apply directional force.
   *
   * @param {int} x - Horizontal force
   * @param {int} y - Vertical force
   * @return {Actor} Reference to self
   */
  push(x = 0, y = 0) {
    if (this.body) {
      this.anchored = false;
      Matter.Body.setVelocity(this.body, new Vector(
        this.body.velocity.x + x,
        this.body.velocity.y + y
      ));
    }
  }

  /**
   * Start spinning motion.
   *
   * @param {float} speed - Angular velocity
   * @return {Actor} Reference to self
   */
  spin(speed = 5) {
    if (this.body) {
      Matter.Body.setAngularVelocity(this.body, speed);
    }
    return this;
  }

  /**
   * Stop all motion.
   */
  stop() {
    if (this.body) {
      Matter.Body.setAngularVelocity(this.body, 0);
      Matter.Body.setVelocity(new Vector(0, 0));
      Matter.Body.setAcceleration(new Vector(0, 0));
    }
    this.frame = 0;
    this.state = 'default';
  }

  /**
   * Determine if this Actor is a polygon.
   *
   * @returns {boolean} True if Actor is a polygon.
   */
  isPolygon() {
    if (this.boundingPolygon && this.boundingPolygon.length > 2) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Determine if Actor contains point.
   *
   * @param {int} x - Point X coordinate
   * @param {int} y - Point Y coordinate
   * @return {boolean}
   */
  containsPoint(x, y) {

    // If polygon
    if (this.isPolygon()) {
      let inside = false;
      for (let i = 0; i < this.boundingPolygon.length; i++) {
        let j = (i + 1) % this.boundingPolygon.length;
        if (
          ((this.boundingPolygon[j].y > y) != (this.boundingPolygon[i].y > y)) &&
          (x < (this.boundingPolygon[i].x - this.boundingPolygon[j].x) *
          (y - this.boundingPolygon[j].y) /
          (this.boundingPolygon[i].y - this.boundingPolygon[j].y) +
          this.boundingPolygon[j].x)
        ) {
          inside = !inside;
        }
      }
      return inside;

    // Circle
    } else {
      let v = this.position.subtract(new Vector(x, y));
      let distance = v.length;
      return (distance < this.boundingRadius);
    }
  }

  /**
   * Add event listener to actor.
   *
   * @param {string} [event] - Name of event.
   * @param {function} [handler] - Event handler to execute when event occurs.
   */
  addEventListener(event, handler) {
    if (this.eventListeners[event] == undefined) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(handler);
  }

  /**
   * Alias for add event listener.
   *
   * @param {string} [event] - Name of event.
   * @param {function} [handler] - Event handler to execute when event occurs.
   */
  on(event, handler) {
    if (typeof event === 'string') {
      if (typeof handler === 'string') {
        if (typeof this[handler] == 'function') {
          handler = this[handler];
        } else if (typeof window._kidjs_.get(handler) == 'function') {
          handler = window._kidjs_.get(handler);
        }
      }
      this.addEventListener(event, handler);
    }
  }

  /**
   * Remove event listener from actor.
   *
   * @param {string} [event] - Name of event.
   * @param {function} [handler] - Event handler to remove.
   */
  removeEventListener(event, handler) {
    if (this.eventListeners[event] !== undefined) {
      this.eventListeners[event] = this.eventListeners[event].filter(item => item !== handler);
    }
  }

  /**
   * Execute event handler.
   *
   * @param {Event} [event] - Event object.
   */
  dispatchEvent(event, context = this) {
    if (this.eventListeners[event.type] !== undefined) {
      for (let handler of this.eventListeners[event.type]) {
        switch (event.type) {
          case 'collision':
            handler.call(context, this, event.detail);
            break;
          default:
            handler.call(context);
        }
      }
    }
  }
}
