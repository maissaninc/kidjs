import Circle from '../shape/circle';
import Collision from './collision';
import { circleCollidesWithCircle, polygonCollidesWithPolygon, circleCollidesWithPolygon } from './collision';
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
    this.friction = 0.8;
    this.bounciness = 0.2;
    this.anchored = true;

    // Bounds
    this.boundingRadius = 0;
    this.faceNormals = [];

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

  get inverseMass() {
    return this.anchored || this.mass === 0 ? 0 : 1 / this.mass;
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
    if (!this.anchored) {
      this.velocity.y = this.velocity.y + parseInt(window.gravity) / 2;
      if (window.floor && this.position.y > stage.height) {
        this.position.y = stage.height;
      }
    }

    // Update velocity
    this.velocity = this.velocity.add(this.acceleration);
    this.angularVelocity = this.angularVelocity + this.angularAcceleration;
  }

  /**
   * Rotate specified number of degrees.
   *
   * @param {float} angle - Number of degrees to rotate
   * @return {Actor} Reference to self
   */
  rotate(degrees) {
    this.angle = this.angle + degrees;
    return this;
  }

  /**
   * Change the position.
   *
   * @param {int} x - Number of pixels to move along x axis
   * @param {int} y - Number of pixels to move along y axis
   * @return {Actor} Reference to self
   */
  move(x = 0, y = 0) {
    this.position.x = this.position.x + x;
    this.position.y = this.position.y + y;
    return this;
  }

  /**
   * Start spinning motion.
   *
   * @param {float} speed - Angular velocity
   * @return {Actor} Reference to self
   */
  spin(speed = 5) {
    this.angularVelocity = speed;
    return this;
  }

  stop() {
    this.frame = 0;
    this.state = 'default';
  }

  /**
   * Determine if this Actor is a polygon.
   *
   * @returns {boolean} True if Actor is a polygon.
   */
  isPolygon() {
    if (this.boundingPolygon && this.boundingPolygon.length > 2);
  }

  /**
   * Detect if this actor collects with another actor.
   *
   * @param {Actor} actor - Second actor
   * @returns {(Collision|false)} Object containing collision data, or false if no collision occured.
   */
  collidesWith(actor) {
    let v = this.position.subtract(actor.position);
    let distance = v.length;
    let radiusSum = this.boundingRadius + actor.boundingRadius;

    // Bounding circles do not collide
    if (distance >= radiusSum) {
      return false;
    }

    // Circle colliding with circle
    if (this.constructor.name === 'Circle' && actor.constructor.name === 'Circle') {
      return circleCollidesWithCircle(this, actor);
    }

    // Polygon colliding with polygon
    if (this.isPolygon() && actor.isPolygon()) {
      return polygonCollidesWithPolygon(this, actor);
    }

    // Circle colliding with polygon
    if (this.constructor.name === 'Circle' && actor.isPolygon()) {
      return circleCollidesWithPolygon(this, actor);
    }
    if (actor.constructor.name === 'Circle' && this.isPolygon()) {
      return circleCollidesWithPolygon(actor, this);
    }
  }
}
