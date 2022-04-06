import Actor from './actor';
import Matter from 'matter-js';
import Vector from '../core/vector';

let counter = 0;

export default class Group extends Actor {

  /**
   * Create a new group of actors.
   *
   * @constructor
   */
  constructor() {
    super(0, 0);
    counter = counter + 1;
    this.id = counter;
    this.children = [];
    this.constraints = [];
    this._anchored = true;
  }

  set anchored(value) {
    this._anchored = value;
    for (let i = 0; i < this.children.length; i = i + 1) {
      this.children[i].anchored = value;
    }
  }

  get anchored() {
    return this._anchored;
  }

  get angle() {
    let total = 0;
    for (let i = 0; i < this.children.length; i = i + 1) {
      total += this.children[i].angle;
    }
    return total / this.children.length;
  }

  set angle(value) {
    let cp = new Vector(this.x, this.y);
    let delta = value - this.angle;
    for (let i = 0; i < this.children.length; i = i + 1) {
      this.children[i].angle += delta;
      let v = this.children[i].position.subtract(cp);
      v = v.rotate(delta)
      this.children[i].x = cp.x + v.x;
      this.children[i].y = cp.y + v.y;
    }
  }

  set x(value) {
    let delta = value - this.x;
    for (let i = 0; i < this.children.length; i = i + 1) {
      this.children[i].x += delta;
    }
  }

  get x() {
    let total = 0;
    for (let i = 0; i < this.children.length; i = i + 1) {
      total += this.children[i].x;
    }
    return total / this.children.length;
  }

  set y(value) {
    let delta = value - this.y;
    for (let i = 0; i < this.children.length; i = i + 1) {
      this.children[i].y += delta;
    }
  }

  get y() {
    let total = 0;
    for (let i = 0; i < this.children.length; i = i + 1) {
      total += this.children[i].y;
    }
    return total / this.children.length;
  }

  /**
   * Add an actor to the group.
   *
   * @param {Actor} actor - Actor to add to the group.
   */
  addChild(actor) {
    if (actor.body) {
      actor.body.collisionFilter.group = -this.id;
      for (const child of this.children) {
        if (child.body) {
          this.constraints.push(Matter.Constraint.create({
            bodyA: child.body,
            bodyB: actor.body,
            pointA: new Vector(-20, 20),
            pointB: new Vector(20, 20),
            stiffness: 1
          }));
          this.constraints.push(Matter.Constraint.create({
            bodyA: child.body,
            bodyB: actor.body,
            pointA: new Vector(20, 20),
            pointB: new Vector(-20, 20),
            stiffness: 1
          }));
          this.constraints.push(Matter.Constraint.create({
            bodyA: child.body,
            bodyB: actor.body,
            pointA: new Vector(-20, -20),
            pointB: new Vector(20, -20),
            stiffness: 1
          }));
          this.constraints.push(Matter.Constraint.create({
            bodyA: child.body,
            bodyB: actor.body,
            pointA: new Vector(20, -20),
            pointB: new Vector(-20, -20),
            stiffness: 1
          }));
        }
      }
    }
    this.children.push(actor);
  }

  /**
   * Add event listener to all children.
   *
   * @param {string} [event] - Name of event.
   * @param {function} [handler] - Event handler to execute when event occurs.
   */
  on(event, handler) {
    for (let i = 0; i < this.children.length; i = i + 1) {
      this.children[i].on(event, handler);
    }
  }

  /**
   * Explode group.
   */
  explode() {
    for (let i = 0; i < this.children.length; i = i + 1) {
      if (typeof this.children[i].explode == 'function') {
        this.children[i].explode();
      }
    }
  }
}

export function group(...actors) {
  let group = new Group();
  for (const actor of actors) {
    group.addChild(actor);
  }
  return group;
}
