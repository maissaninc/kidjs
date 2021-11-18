import Actor from './actor';

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
   * Add an actor to the group.
   *
   * @param {Actor} actor - Actor to add to the group.
   */
  addChild(actor) {
    if (actor.body) {
      actor.body.collisionFilter.group = -this.id;
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
}
