import Actor from './actor';
import Matter from 'matter-js';
import Vector from '../core/vector';

let counter = 0;
let groups = [];

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

    this._deltaX = 0;
    this._deltaY = 0;
    this._deltaAngle = 0;
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
    return this._angle;
  }

  set angle(value) {
    this._deltaAngle = value - this.angle;
  }

  set x(value) {
    this._deltaX = value - this.x;
  }

  get x() {
    let total = 0;
    for (let i = 0; i < this.children.length; i = i + 1) {
      total += this.children[i].x;
    }
    return total / this.children.length;
  }

  set y(value) {
    this._deltaY = value - this.y;
  }

  get y() {
    let total = 0;
    for (let i = 0; i < this.children.length; i = i + 1) {
      total += this.children[i].y;
    }
    return total / this.children.length;
  }

  get bounds() {
    let bounds = {
      max: new Vector(this.x, this.y),
      min: new Vector(this.x, this.y)
    };
    for (let i = 0; i < this.children.length; i = i + 1) {
      if (this.children[i].bounds) {
        if (this.children[i].bounds.min.x < bounds.min.x) {
          bounds.min.x = this.children[i].bounds.min.x;
        }
        if (this.children[i].bounds.max.x > bounds.max.x) {
          bounds.max.x = this.children[i].bounds.max.x;
        }
        if (this.children[i].bounds.min.y < bounds.min.y) {
          bounds.min.y = this.children[i].bounds.min.y;
        }
        if (this.children[i].bounds.max.y > bounds.max.y) {
          bounds.max.y = this.children[i].bounds.max.y;
        }
      }
    }
    return bounds;
  }

  /**
   * Update the position and orientation of group.
   * This is called each frame.
   */
  update() {

    // Update children
    let cp = new Vector(this.x, this.y);
    for (let i = 0; i < this.children.length; i = i + 1) {
      this.children[i].angle += this._deltaAngle;
      let v = this.children[i].position.subtract(cp);
      v = v.rotate(this._deltaAngle)
      this.children[i].x = cp.x + v.x + this._deltaX;
      this.children[i].y = cp.y + v.y + this._deltaY;
    }

    this._angle = this._angle + this._deltaAngle;
    this._deltaAngle = 0;
    this._deltaX = 0;
    this._deltaY = 0;
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
      this.children[i].addEventListener(event, function(...args) {
        handler.apply(this, args);
      }.bind(this), {
        canonicalHandler: handler,
        group: this
      });
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

  /**
   * Remove group.
   */
  remove() {
    for (let i = 0; i < this.children.length; i = i + 1) {
      window.stage.removeChild(this.children[i]);
    }
    groups = groups.filter(function(item) {
      return item.id != this.id;
    });
    this.children = [];
  }

  /**
   * Clone group.
   *
   * @param {int} x - Optional x coordinate
   * @param {int} y - Optional y coordinate
   */
  clone(x = false, y = false) {
    let width = this.bounds.max.x - this.bounds.min.x;
    let group = new Group();
    group.assign(this);
    for (let i = 0; i < this.children.length; i = i + 1) {

      // Copy of child
      let copy = this.children[i].copy();
      copy.assign(this.children[i]);
      copy.init();
      copy.angle = this.children[i].angle;
      copy.anchored = this.children[i].anchored;
      group.addChild(copy);
      window.stage.addChild(copy);
    }

    // Position group
    if (x !== false && y !== false) {
      group.x = group.x - this.x + x;
      group.y = group.y - this.y + y;
    } else {
      this.x = this.x + width + 5;
    }

    // Initialize constraints
    for (const constraint of group.constraints) {
      Matter.Composite.add(window.stage.engine.world, constraint);
    }

    groups.push(group);
    return group;
  }
}

export function group(...actors) {
  let group = new Group();
  for (const actor of actors) {
    group.addChild(actor);
    for (const constraint of group.constraints) {
      Matter.Composite.add(window.stage.engine.world, constraint);
    }
  }
  groups.push(group);
  return group;
}

export function updateGroups() {
  for (let i = 0; i < groups.length; i = i + 1) {
    groups[i].update();
  }
}
