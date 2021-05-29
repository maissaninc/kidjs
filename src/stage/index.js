import { evaluateTriggers } from '../core';
import { resolveCollision } from './collision';

export default class Stage {

  /**
   * Create a new stage.
   *
   * @constructor
   * @param {int} [width] - Optional stage width. Defaults to browser width.
   * @param {int} [height] - Optional stage height. Defaults to browser height.
   */
  constructor(width = window.innerWidth, height = window.innerHeight) {
    this.frame = 0;
    this.width = width;
    this.height = height;

    // Stage properties
    window.gravity = 1;
    window.floor = true;

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

    // Set initial fill and stroke
    window.fill = 'white';
    window.stroke = 'black';
    window.lineWidth = 2;

    // Set global width and height
    window.width = width;
    window.height = height;

    // Initialize
    this.actors = [];
    this.eventListeners = {};
    this.render();
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
  }

  /**
   * Clear all actors from the stage.
   */
  clear() {
    this.actors = [];
  }

  /**
   * Clear stage and reset fill and stroke.
   */
  reset() {
    window.fill = 'white';
    window.stroke = 'black';
    window.lineWidth = 2;
    window.tempo = 60;
    this.clear();
  }

  /**
   * Render a single frame.
   */
  render() {
    this.frame++;
    this.context.clearRect(0, 0, this.width, this.height);

    // Detect collisions
    for (let i = 0; i < this.actors.length; i++) {
      for (let j = i + 1; j < this.actors.length; j++) {
        let collision = this.actors[i].collidesWith(this.actors[j]);
        if (collision) {
          this.actors[i].dispatchEvent(new CustomEvent('collision', { detail: this.actors[j] }));
          this.actors[j].dispatchEvent(new CustomEvent('collision', { detail: this.actors[i] }));
          resolveCollision(collision);
        }
      }
    }

    // Update actors
    for (let actor of this.actors) {
      actor.update();
      actor.render(this.context);
    }

    window._kidjs_.onframe();
    requestAnimationFrame(() => this.render());
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
}
