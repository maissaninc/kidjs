import Actor from './actor';
import Matter from 'matter-js';

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
    this.body = Matter.Body.create({
      friction: window.friction,
      frictionStatic: window.friction,
      frictionAir: 0,
      isStatic: true
    });
  }

  get bounds() {
    return this.body.bounds;
  }

  /**
   * Render group.
   *
   * @param {CanvasRenderingContext2D} context - Context to render on.
   */
  render(context) {
    context.beginPath();
    context.rect(this.bounds.min.x, this.bounds.min.y, this.bounds.max.x - this.bounds.min.x, this.bounds.max.y - this.bounds.min.y);
    context.strokeStyle = 'yellow';
    context.lineWidth = 2;
    context.stroke();
    for (let i = 0; i < this.children.length; i = i + 1) {
      this.children[i].render(context);
    }
  }

  /**
   * Add an actor to the group.
   *
   * @param {Actor} actor - Actor to add to the group.
   */
  addChild(actor) {

    // Add to group and remove from stage
    this.children.push(actor);
    window.stage.removeChild(actor);

    // Update parts in body
    let bodies = [];
    for (let i = 0; i < this.children.length; i = i + 1) {
      if (this.children[i].body) {
        bodies.push(this.children[i].body);
      }
    }
    Matter.Body.setParts(this.body, bodies);
  }

  /**
   * Explode group.
   */
  explode() {
    window.stage.removeChild(group);
    for (let i = 0; i < this.children.length; i = i + 1) {
      window.stage.addChild(this.children[i]);
      if (typeof this.children[i].explode == 'function') {
        this.children[i].explode();
      }
    }
  }

  /**
   * Remove group.
   */
  remove() {
    window.stage.removeChild(this);
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
    }

    // Position group
    if (x !== false && y !== false) {
      group.x = group.x - this.x + x;
      group.y = group.y - this.y + y;
    } else {
      this.x = this.x + width + 5;
    }

    groups.push(group);
    window.stage.addChild(group);
    return group;
  }
}

export function group(...actors) {
  let group = new Group();
  for (const actor of actors) {
    group.addChild(actor);
  }
  groups.push(group);
  window.stage.addChild(group);
  return group;
}
