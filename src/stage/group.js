import Actor from './actor';
import Matter from 'matter-js';

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
  }

  /**
   * Initialize physics body.
   */
  init() {
    let bodies = [];
    for (let i = 0; i < this.children.length; i = i + 1) {
      if (this.children[i].body) {
        bodies.push(this.children[i].body);
      }
    }
    this.body = Matter.Body.create({
      friction: window.friction,
      frictionStatic: window.friction,
      frictionAir: 0,
      isStatic: true,
      parts: bodies
    });
  }

  /**
   * Render group.
   *
   * @param {CanvasRenderingContext2D} context - Context to render on.
   */
  render(context) {

    // Debug information
    if (window.debug) {
      context.beginPath();
      context.rect(this.bounds.min.x, this.bounds.min.y, this.bounds.max.x - this.bounds.min.x, this.bounds.max.y - this.bounds.min.y);
      context.strokeStyle = 'red';
      context.lineWidth = 0.5;
      context.stroke();
    }

    for (let i = 0; i < this.children.length; i = i + 1) {
      this.children[i].render(context);
    }
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
    
    // Copy children
    for (let i = 0; i < this.children.length; i = i + 1) {
      let copy = this.children[i].copy();
      copy.assign(this.children[i]);
      copy.init();
      copy.angle = this.children[i].angle;
      copy.anchored = this.children[i].anchored;
      group.children.push(copy);
    }
    group.init();

    // Position group
    if (x !== false && y !== false) {
      group.x = group.x - this.x + x;
      group.y = group.y - this.y + y;
    } else {
      this.x = this.x + width + 5;
    }

    window.stage.addChild(group);
    return group;
  }
}

export function group(...actors) {
  let group = new Group();
  group.children = actors;

  // Remove children from stage
  for (let i = 0; i < actors.length; i = i + 1) {
    window.stage.removeChild(actors[i]);
  }

  // Initialize group and add to stage
  group.init();
  window.stage.addChild(group);
  return group;
}
