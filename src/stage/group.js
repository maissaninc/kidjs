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
    this.opacity = 1;
  }

  /**
   * Initialize physics body.
   */
  init() {
    this.updateBody();
  }

  /**
   * Update physics body.
   */
  updateBody() {
    let bodies = [];
    for (let i = 0; i < this.children.length; i = i + 1) {
      if (this.children[i].body) {
        this.children[i].anchored = false;
        bodies.push(this.children[i].body);
      }
    }
    this.body = Matter.Body.create({
      friction: window.friction,
      frictionStatic: window.friction,
      frictionAir: 0,
      isStatic: true,
      parts: bodies,
    });
    this.position.x = this.body.position.x;
    this.position.y = this.body.position.y;
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
      context.beginPath();
      context.moveTo(this.body.vertices[0].x, this.body.vertices[0].y);
      for (let i = 1; i < this.body.vertices.length; i = i + 1) {
        context.lineTo(this.body.vertices[i].x, this.body.vertices[i].y);
      }
      context.closePath();
      context.strokeStyle = 'orange';
      context.stroke();
    }

    // Draw children on temporary canvas
    let scale = context.canvas.width / window.width;
    let tempCanvas = document.createElement('canvas');
    tempCanvas.width = context.canvas.width;
    tempCanvas.height = context.canvas.height;
    let tempContext = tempCanvas.getContext('2d');
    tempContext.scale(scale, scale);
    for (let i = 0; i < this.children.length; i = i + 1) {
      this.children[i].render(tempContext);
    }

    // Copy to main canvas
    context.globalAlpha = this.opacity;
    context.save();
    context.resetTransform();
    context.drawImage(tempCanvas, 0, 0);
    context.restore();
    context.globalAlpha = 1;
  }

  /**
   * Explode group.
   */
  explode() {

    // Don't explode twice
    if (this.exploded) return;
    this.exploded = true;

    window.stage.removeChild(this);
    for (let i = 0; i < this.children.length; i = i + 1) {
      window.stage.addChild(this.children[i]);
      if (typeof this.children[i].explode == 'function') {
        this.children[i].explode();
      }
    }
  }

  /**
   * Add child to group.
   */
  addChild(actor) {
    actor.parent = this;
    this.children.push(actor);
    window.stage.removeChild(actor);
  }

  /**
   * Alias for add child.
   */
  add(actor) {
    this.addChild(actor);
  }

  /**
   * Remove child from group.
   */
  removeChild(actor) {
    let index = this.children.indexOf(actor);
    if (index > -1) {
      actor.parent = null;
      this.children.splice(index, 1);
      this.updateBody();
      window.stage.addChild(actor);
    }
  }

  /**
   * Remove group.
   */
  remove(actor = false) {

    // Remove child from group
    if (actor) {
      return this.removeChild(actor);
    }

    // Remove entire group from stage
    window.stage.removeChild(this);
    this.children = [];
    this.updateBody();
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
      copy.init();
      copy.assign(this.children[i]);
      group.children.push(copy);
    }
    group.init();

    // Position group
    if (x !== false && y !== false) {
      group.x = group.x - this.x + x;
      group.y = group.y - this.y + y;
    } else {
      group.x = this.x + width + 5;
      group.y = this.y;
    }

    window.stage.addChild(group);
    return group;
  }
}

export function group(...actors) {
  let group = new Group();
  group.children = actors;

  // Set parent and remove from stage
  for (let i = 0; i < actors.length; i = i + 1) {
    actors[i].parent = group;
    window.stage.removeChild(actors[i]);
  }
  
  // Initialize group and add to stage
  group.init();
  window.stage.addChild(group);
  return group;
}
