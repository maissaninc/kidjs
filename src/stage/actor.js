import Animation from '../animation';
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

    // Internal properties
    this.position = new Vector(x, y);
    this._angle = 0;
    this._angularVelocity = 0;
    this.spinnable = true;
    this._bounciness = 0.8;
    this._ghost = false;

    // Detect change in velocity
    this.velocity = new Vector(0, 0);
    this.velocity.onchange = () => {
      this.anchored = false;
      if (this.body) {
        Matter.Body.setVelocity(this.body, this.velocity);
      }
    }

    // Detect change in acceleration
    this.acceleration = new Vector(0, 0);
    this.acceleration.onchange = () => {
      this.anchored = false;
      if (this.body) {
        Matter.Body.setAcceleration(this.body, this.acceleration);
      }
    }

    // Animation queue
    this.animations = [];
    this.animationActive = 0;
    this.animationRepeat = 0;

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
    if (this.body) {
      setTimeout(() => Matter.Body.setPosition(this.body, this.position));
    }
  }

  set y(value) {
    this.position.y = value;
    if (this.body) {
      setTimeout(() => Matter.Body.setPosition(this.body, this.position));
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

  get angularVelocity() {
    if (this.body && !this.body.isStatic) {
      return radiansToDegrees(this.body.angularVelocity);
    }
    return this._angularVelocity;
  }

  set angularVelocity(value) {
    this._angularVelocity = value;
    if (this.body) {
      Matter.Body.setAngularVelocity(this.body, degreesToRadians(this._angularVelocity));
    }
  }

  set anchored(value) {
    if (this.body) {
      Matter.Body.setStatic(this.body, value);
      this.body.restitution = this._bounciness;
    }
  }

  get anchored() {
    if (this.body) {
      return this.body.isStatic;
    } else {
      return true;
    }
  }

  set bounciness(value) {
    this._bounciness = value;
    if (this.body) {
      this.body.restitution = value;
    }
  }

  get bounciness() {
    return this.body ? this.body.restitution : 0;
  }

  set direction(value) {
    if (this.body) {
      Matter.Body.setVelocity(this.body, new Vector(
        Math.cos(degreesToRadians(value)) * this.speed,
        Math.sin(degreesToRadians(value)) * this.speed
      ));
    }
  }

  get direction() {
    if (this.body) {
      let a = Math.atan2(this.body.velocity.y, this.body.velocity.x)
      if (a < 0) a = a + Math.PI * 2;
      return radiansToDegrees(a);
    }
  }

  set friction(value) {
    if (this.body) {
      this.body.friction = value;
    }
  }

  get friction() {
    return this.body ? this.body.friction : 0;
  }

  set ghost(value) {
    if (value == this._ghost) return;
    this._ghost = value;
    if (this.body) {
      if (value) {
        this.body.isSensor = true;
      } else {
        this.body.isSensor = false;
      }
    }
  }

  get ghost() {
    return this._ghost;
  }

  set mass(value) {
    if (this.body) {
      Matter.Body.setMass(this.body, value);
    }
  }

  get mass() {
    return this.body ? this.body.mass : 0;
  }

  set speed(value) {
    if (this.body) {
      this.anchored = false;
      Matter.Body.setVelocity(this.body, new Vector(
        Math.cos(degreesToRadians(this.direction)) * value,
        -Math.sin(degreesToRadians(this.direction)) * value
      ));
    }
  }

  get speed() {
    if (this.body) {
      let v = new Vector(this.body.velocity.x, this.body.velocity.y);
      return v.length;
    }
    return 0;
  }

  /**
   * Update the position of Actor on stage.
   * This is called each frame.
   */
  update() {
    this.frame++;

    // Apply angular velocity
    if (!this.spinnable) {
      this.angularVelocity = 0;
    } else {
      if (!this.body || this.body.isStatic) {
        this.angle = this.angle + this.angularVelocity;
      }
    }

    // Update animations
    if (this.animations.length > 0) {
      if (this.animations[this.animationActive].status == 'queued') {
        this.animations[this.animationActive].status = 'ready';
      }
      for (let i = this.animationActive; i < this.animations.length; i = i + 1) {
        if (this.animations[i].status == 'queued') break;
        this.animations[i].update();
      }
      if (this.animations[this.animationActive].status == 'complete') {
        this.animationActive = this.animationActive + 1;

        // Queue complete
        if (this.animationActive == this.animations.length) {

          // Repeat animations
          if (this.animationRepeat != 0) {
            this.animationActive = 0;
            for (let i = 0; i < this.animations.length; i = i + 1) {
              this.animations[i].status = this.animations[i].queue ? 'queued' : 'ready';
            }
            if (this.animationRepeat > 0) {
              this.animationRepeat = this.animationRepeat - 1;
            }

          // Clear queue
          } else {
            this.animations = [];
            this.animationActive = 0;
            this.animationRepeat = 0;
          }
        }
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
    this._angle = this._angle + degrees;
    if (this.body) {
      Matter.Body.setAngle(this.body, degreesToRadians(this._angle));
    }
    return this;
  }

  /**
   * Add animation.
   *
   * @param {object} properties - Properties to animate
   * @param {int} duration - Duration to animation properties over
   * @param {string} tween - Easing function
   * @param {boolean} queue - Delay until active animations complete
   * @return void
   */
  animate(properties, duration, tween = false, queue = false) {
    let animation = new Animation(this, properties, duration, tween, queue);
    this.animations.push(animation);
    return animation;
  }

  /**
   * Move to a new position.
   *
   * @param {int} x - Destination x coordinate
   * @param {int} y - Destination y coorindate
   * @param {int} duration - Length of animation in seconds
   * @param {string} tween - Easing function
   * @param {boolean} queue - Delay until active animations complete
   * @return {Animation} Animation object
   */
  moveTo(x, y, duration = 1, tween = false, queue = false) {
    return this.animate({
      x: x,
      y: y
    }, duration, tween, queue);
  }

  /**
   * Move relative to current position.
   *
   * @param {int} x - Number of pixels to move along x axis
   * @param {int} y - Number of pixels to move along y axis
   * @param {int} duration - Length of animation in seconds
   * @param {string} tween - Easing function
   * @param {boolean} queue - Delay until active animations complete
   * @return {Animation} Animation object
   */
  move(x = 0, y = 0, duration = 1, tween = false, queue = false) {
    return this.moveTo(this.x + x, this.y + y, duration, tween, queue);
  }

  /**
   * Move relative to current position.
   *
   * @param {int} amount - Number of pixels to grow
   * @param {int} duration - Length of animation in seconds
   * @param {string} tween - Easing function
   * @param {boolean} queue - Delay until active animations complete
   * @return {Animation} Animation object
   */
  shrink(amount, duration = 1, tween = false, queue = false) {
    return this.grow(-amount, duration, tween, queue);
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
    if (this.children) {
      this.anchored = false;
      for (let i = 0; i < this.children.length; i = i + 1) {
        if (this.children[i].body) {
          Matter.Body.setVelocity(this.children[i].body, new Vector(
            this.children[i].body.velocity.x + x,
            this.children[i].body.velocity.y + y
          ));
        }
      }
    }
  }

  /**
   * Start spinning motion.
   *
   * @param {float} speed - Angular velocity
   * @return {Actor} Reference to self
   */
  spin(speed = 1) {
    this.angularVelocity = speed;
    return this;
  }

  /**
   * Stop all motion.
   */
  stop() {
    if (this.body) {
      Matter.Body.setAngularVelocity(this.body, 0);
      Matter.Body.setVelocity(this.body, new Vector(0, 0));
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
    if (this.body) {
      return Matter.Bounds.contains(this.body.bounds, new Vector(x, y));
    }
  }

  /**
   * Add event listener to actor.
   *
   * @param {string} [event] - Name of event.
   * @param {function} [handler] - Event handler to execute when event occurs.
   * @param {object} [meta] - Additional details about event handler.
   */
  addEventListener(event, handler, meta = {}) {
    if (event == 'doubleclick') {
      event = 'dblclick';
    }
    if (this.eventListeners[event] == undefined) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push({
      handler: handler,
      ...meta
    });
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
      this.eventListeners[event] = this.eventListeners[event].filter(
        item => item.handler !== handler
      );
    }
  }

  /**
   * Execute event handler.
   *
   * @param {Event} [event] - Event object.
   */
  dispatchEvent(event, context = this) {
    if (this.eventListeners[event.type] !== undefined) {
      for (let listener of this.eventListeners[event.type]) {
        switch (event.type) {
          case 'collision':
            listener.handler.call(context, this, event.detail);
            break;
          default:
            listener.handler.call(context);
        }
      }
    }
  }

  /**
   * Remove actor from stage.
   */
  remove() {
    window.stage.removeChild(this);
  }

  /**
   * Assign properties of another actor to this one.
   *
   * @param {Actor} source
   */
  assign(source) {
    this.x = source.x;
    this.y = source.y;
    this.angle = source.angle;
    for (let type in source.eventListeners) {
      this.eventListeners[type] = source.eventListeners[type].filter(
        item => !item.group
      );
    }
  }
}
