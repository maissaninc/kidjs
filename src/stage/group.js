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
    this.body = Matter.Body.create();
  }

  get bounds() {
    return this.body.bounds;
  }

  /**
   * Add an actor to the group.
   *
   * @param {Actor} actor - Actor to add to the group.
   */
  addChild(actor) {
    if (actor.body) {
      Matter.Body.setParts(this.body, [...this.body.parts, actor.body]);
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

    groups.push(group);
    return group;
  }
}

export function group(...actors) {
  let group = new Group();
  for (const actor of actors) {
    group.addChild(actor);
  }
  groups.push(group);
  return group;
}

export function updateGroups() {
  for (let i = 0; i < groups.length; i = i + 1) {
    groups[i].update();
  }
}
