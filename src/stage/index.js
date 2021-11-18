import { evaluateTriggers } from '../core';
import Rect from '../shape/rect';
import Matter from 'matter-js';
import { log } from '../debug';

const WALL_DEPTH = 200;

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
    this.width = parseInt(width);
    this.height = parseInt(height);

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
    window.width = this.width;
    window.height = this.height;

    // Initialize
    this.actors = [];
    this.eventListeners = {};

    log('Stage created');
  }

  /**
   * Resize the stage.
   * This is often called by a resize event handler.
   *
   * @param {int} [width] - Optional stage width. Defaults to browser width.
   * @param {int} [height] - Optional stage height. Defaults to browser height.
   */
  resize(width = window.innerWidth, height = window.innerHeight) {
    this.width = parseInt(width);
    this.height = parseInt(height);
    let scale = window.devicePixelRatio;
    this.canvas.width = Math.floor(this.width * scale);
    this.canvas.height = Math.floor(this.height * scale);
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.context.scale(scale, scale);
    window.width = width;
    window.height = height;

    // Resize walls
    this._leftWall.y = height / 2;
    this._leftWall.height = height;
    this._rightWall.x = width + WALL_DEPTH / 2;
    this._rightWall.y = height / 2;
    this._rightWall.height = height;
    this._ceiling.x = width / 2;
    this._ceiling.width = width;
    this._floor.x = width / 2;
    this._floor.y = height + WALL_DEPTH / 2;
    this._floor.width = width;
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
    if (actor.constraints) {
      for (const constraint of actor.constraints) {
        Matter.Composite.add(this.engine.world, constraint);
      }
    }
  }

  /**
   * Remove actor from stage.
   *
   * @param {Actor} actor - Actor to remove from the stage.
   */
  removeChild(actor) {
    this.actors = this.actors.filter((item) => {
      return item != actor;
    });
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
    log('Stage cleared');
    this.actors = [];
    Matter.Composite.clear(this.engine.world);

    // Add walls
    this._leftWall = rect(-WALL_DEPTH / 2, this.height / 2, WALL_DEPTH, this.height);
    this._rightWall = rect(this.width + WALL_DEPTH / 2, this.height / 2, WALL_DEPTH, this.height);
    this._ceiling = rect(this.width / 2, -WALL_DEPTH / 2, this.width, WALL_DEPTH);
    this._floor = rect(this.width / 2, this.height + WALL_DEPTH / 2, this.width, WALL_DEPTH);
  }

  /**
   * Clear stage and reset fill and stroke.
   */
  reset() {
    log('Stage reset');

    // Reset fill and stroke
    window.fill = 'theme';
    window.stroke = false;
    window.lineWidth = 3;

    // Reset font properties
    window.font = 'Arial';
    window.fontColor = 'black';
    window.fontSize = '40px';
    window.textAlign = 'center';
    window.textBaseline = 'middle';

    // Reset animation properties
    window.easing = 'easeInOutElastic';

    // Reset audio properties
    window.tempo = 60;

    // Reset physics properties
    window.gravity = 1;
    window.ceiling = true;
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

      // Update physics simulation
      this._leftWall.ghost = !window.walls;
      this._rightWall.ghost = !window.walls;
      this._ceiling.ghost = !window.ceiling;
      this._floor.ghost = !window.floor;
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
    if (event == 'doubleclick') {
      event = 'dblclick';
    }
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
        if (typeof handler == 'function') {
          switch (event.constructor.name) {
            case 'KeyboardEvent':
              handler.call(context, event.key);
              break;
            case 'MouseEvent':
            case 'PointerEvent':
              handler.call(context, event.x, event.y);
              break;
            default:
              handler.call(context);
          }
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
