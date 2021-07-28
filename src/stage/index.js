import { evaluateTriggers } from '../core';
import Matter from 'matter-js';

export default class Stage {

  /**
   * Create a new stage.
   *
   * @constructor
   * @param {int} [width] - Optional stage width. Defaults to browser width.
   * @param {int} [height] - Optional stage height. Defaults to browser height.
   */
  constructor(width = window.innerWidth, height = window.innerHeight) {
    this.running = false;
    this.frame = 0;
    this.width = width;
    this.height = height;

    // Create Matter.js engine and listen for events
    this.engine = Matter.Engine.create();
    Matter.Events.on(this.engine, 'collisionStart', (event) => this.onCollisionStart(event));

    // Create canvas
    let scale = window.devicePixelRatio;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = Math.floor(this.width * scale);
    this.canvas.height = Math.floor(this.height * scale);
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.canvas.style.display = 'block';
    this.context.scale(scale, scale);

    // Set global width and height
    window.width = width;
    window.height = height;

    // Initialize
    this.actors = [];
    this.eventListeners = {};
  }

  /**
   * Resize the stage.
   * This is often called by a resize event handler.
   *
   * @param {int} [width] - Optional stage width. Defaults to browser width.
   * @param {int} [height] - Optional stage height. Defaults to browser height.
   */
  resize(width = window.innerWidth, height = window.innerHeight) {
    this.width = width;
    this.height = height;
    let scale = window.devicePixelRatio;
    this.canvas.width = Math.floor(this.width * scale);
    this.canvas.height = Math.floor(this.height * scale);
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.context.scale(scale, scale);
    window.width = width;
    window.height = height;
  }

  /**
   * Add an actor to the stage.
   *
   * @param {Actor} actor - Actor to add to the stage.
   */
  addChild(actor) {
    this.actors.push(actor);
    if (actor.body) {
      Matter.Composite.add(this.engine.world, actor.body);
    }
  }

  /**
   * Find actor from Matter.js body.
   *
   * @param {Matter.Body} body - Matter.js body
   * @return {Actor} Actor if found
   */
  findChildByBody(body) {
    for (let actor of this.actors) {
      if (actor.body && actor.body.id == body.id) {
        return actor;
      }
    }
  }

  /**
   * Clear all actors from the stage.
   */
  clear() {
    Matter.Composite.clear(this.engine.world);
    this.actors = [];
  }

  /**
   * Clear stage and reset fill and stroke.
   */
  reset() {

    // Reset fill and stroke
    window.fill = 'white';
    window.stroke = 'black';
    window.lineWidth = 2;

    // Reset font properties
    window.font = 'Arial';
    window.fontColor = 'black';
    window.fontSize = '40px';
    window.fill = 'white';
    window.stroke = 'black';
    window.lineWidth = 2;

    // Reset audio properties
    window.tempo = 60;

    // Reset physics properties
    window.gravity = 1;
    window.floor = true;
    window.walls = true;

    // Clear stage
    this.clear();

    // Clear event listeners
    this.removeAllEventListeners();
  }

  /**
   * Start rendering
   */
  run() {
    if (!this.running) {
      this.running = true;
      this.render();
    }
  }

  /**
   * Stop rendering
   */
  stop() {
    if (this.running) {
      cancelAnimationFrame(this.animation);
      this.running = false;
    }
  }

  /**
   * Render a single frame.
   */
  render() {
    if (this.running) {
      this.frame++;
      this.context.clearRect(0, 0, this.width, this.height);

      // Detect collisions
      /*for (let i = 0; i < this.actors.length; i++) {
        for (let j = i + 1; j < this.actors.length; j++) {
          let collision = this.actors[i].collidesWith(this.actors[j]);
          if (collision) {
            this.actors[i].dispatchEvent(new CustomEvent('collision', { detail: this.actors[j] }));
            this.actors[j].dispatchEvent(new CustomEvent('collision', { detail: this.actors[i] }));
            if (!(this.actors[i].anchored && this.actors[j].anchored)) {
              console.log(this.actors[i]);
              console.log(this.actors[j]);
              console.log(collision);
              resolveCollision(collision);
              console.log(this.actors[i]);
              console.log(this.actors[j]);
              //KID.stop();
            }
          }
        }
      }*/

      // Update physics simulation
      this.engine.gravity.y = window.gravity;
      Matter.Engine.update(this.engine);

      // Render actors
      for (let actor of this.actors) {
        actor.update();
        actor.render(this.context);
      }

      window._kidjs_.onframe();
      this.animation = requestAnimationFrame(() => this.render());
    }
  }

  /**
   * Add event listener to stage.
   *
   * @param {string} [event] - Name of event.
   * @param {function} [handler] - Event handler to execute when event occurs.
   */
  addEventListener(event, handler) {
    if (this.eventListeners[event] == undefined) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(handler);
  }

  /**
   * Remove event listener from stage.
   *
   * @param {string} [event] - Name of event.
   * @param {function} [handler] - Event handler to remove.
   */
  removeEventListener(event, handler) {
    if (this.eventListeners[event] !== undefined) {
      this.eventListeners[event] = this.eventListeners[event].filter(item => item !== handler);
    }
  }

  /**
   * Remove all event listeners from stage.
   */
  removeAllEventListeners() {
    this.eventListeners = {};
  }

  /**
   * Execute event handler.
   *
   * @param {Event} [event] - Event object.
   */
  dispatchEvent(event, context = window) {
    if (this.eventListeners[event.type] !== undefined) {
      for (let handler of this.eventListeners[event.type]) {
        switch (event.constructor.name) {
          case 'KeyboardEvent':
            handler.call(context, event.key);
            break;
          default:
            handler.call(context);
        }
      }
    }
  }

  /**
   * Respond to collision events.
   *
   * @param {Event} [event] - Event object.
   */
  onCollisionStart(event) {
    for (let pair of event.pairs) {
      let a = this.findChildByBody(pair.bodyA);
      let b = this.findChildByBody(pair.bodyB);
      if (a && b) {
        a.dispatchEvent(new CustomEvent('collision', { detail: b }));
        b.dispatchEvent(new CustomEvent('collision', { detail: a }));
      }
    }
  }
}
