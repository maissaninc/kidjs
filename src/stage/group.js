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
   * Render group.
   *
   * @param {CanvasRenderingContext2D} context - Canvas drawing context.
   */
  render(context) {
    for (let i = 0; i < this.children.length; i = i + 1) {
      this.children[i].render(context);
    }
  }
}

export function group(...actors) {
  let group = new Group();
  for (const actor of actors) {
    actor.remove();
    group.addChild(actor);
  }
  window.stage.addChild(group);
  return group;
}
