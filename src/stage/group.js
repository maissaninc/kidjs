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
          for (let i = 0; i < child.anchorPoints.length; i = i + 1) {
            for (let j = 0; j < actor.anchorPoints.length; j = j + 1) {
              this.constraints.push(Matter.Constraint.create({
                bodyA: child.body,
                bodyB: actor.body,
                pointA: child.anchorPoints[i],
                pointB: actor.anchorPoints[j],
                stiffness: 1
              }));
            }
          }
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
    for (const child of this.children) {
      child.render(context);
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
