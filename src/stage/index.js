import { resetCursor } from '../text';
import Matter from 'matter-js';
import { log } from '../debug';

const WALL_DEPTH = 1000;

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

    // Create Matter.js engine and listen for events
    this.engine = Matter.Engine.create();
    Matter.Events.on(this.engine, 'collisionStart', (event) => this.onCollisionStart(event));
    Matter.Resolver._restingThresh = 0.001;

    // Create canvas
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.style.display = 'block';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0px';
    this.canvas.style.left = '0px';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.objectFit = 'contain';

    // Initialize
    this.actors = [];
    this.eventListeners = {};

    log(`Stage created (${width} x ${height})`);
    this.resize(width, height);
  }

  /**
   * Resize the stage.
   * This is often called by a resize event handler.
   *
   * @param {int} [width] - Optional stage width. Defaults to browser width.
   * @param {int} [height] - Optional stage height. Defaults to browser height.
   */
  resize(width, height) {

    // If no width or height default to window size
    if (!parseInt(width)) width = window.innerWidth;
    if (!parseInt(height)) height = window.innerHeight;

    // If size has changed
    if (this.width != parseInt(width) || this.height != parseInt(height)) {

      // Resize canvas
      this.width = parseInt(width);
      this.height = parseInt(height);

      log(`Stage resized (${width} x ${height})`);
      if (window._kidjs_.settings.pixelSize > 1) {
        let scale = 1 / window._kidjs_.settings.pixelSize;
        this.canvas.width = Math.floor(this.width * scale);
        this.canvas.height = Math.floor(this.height * scale);
        this.canvas.style.imageRendering = 'pixelated';
      } else {
        let scale = window.devicePixelRatio;
        this.canvas.width = Math.floor(this.width * scale);
        this.canvas.height = Math.floor(this.height * scale);
        this.context.scale(scale, scale);
      }
      window.width = this.width;
      window.height = this.height;

      // Resize walls
      if (this._leftWall) {
        this._leftWall.x = -WALL_DEPTH / 2;
        this._leftWall.y = this.height / 2;
        this._leftWall.height = this.height + WALL_DEPTH * 2;
        this._leftWall.updateBody();
        this._rightWall.x = this.width + WALL_DEPTH / 2;
        this._rightWall.y = this.height / 2;
        this._rightWall.height = this.height + WALL_DEPTH * 2;
        this._rightWall.updateBody();
        this._ceiling.x = this.width / 2;
        this._ceiling.y = -WALL_DEPTH / 2;
        this._ceiling.width = this.width + WALL_DEPTH * 2;
        this._ceiling.updateBody();
        this._floor.x = this.width / 2;
        this._floor.y = this.height + WALL_DEPTH / 2;
        this._floor.width = this.width + WALL_DEPTH * 2;
        this._floor.updateBody();
      }

      // Redraw grid
      if (window.grid) {
        window.grid.render();
      }
    }
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
   * Remove actor from stage.
   *
   * @param {Actor} actor - Actor to remove from the stage.
   */
  removeChild(actor) {
    this.actors = this.actors.filter((item) => {
      return item != actor;
    });
    if (actor.body) {
      Matter.Composite.remove(this.engine.world, actor.body);
    }
    if (actor.constraints) {
      for (const constraint of actor.constraints) {
        Matter.Composite.remove(this.engine.world, constraint);
      }
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
      if (actor.body && (actor.body.id == body.id || actor.body.id == body.parent.id)) {
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
    this._ceiling = rect(this.width / 2, -WALL_DEPTH / 2, this.width + WALL_DEPTH * 2, WALL_DEPTH);
    this._floor = rect(this.width / 2, this.height + WALL_DEPTH / 2, this.width + WALL_DEPTH * 2, WALL_DEPTH);
    this._leftWall.invisible = true;
    this._rightWall.invisible = true;
    this._ceiling.invisible = true;
    this._floor.invisible = true;
    this.resize(window._kidjs_.settings.width, window._kidjs_.settings.height);

    // Reset text cursor
    resetCursor();
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
    window.font = window._kidjs_.settings.defaultFont ?? 'Arial';
    window.fontColor = 'black';
    window.fontSize = window._kidjs_.settings.defaultFontSize ?? '40px';
    window.fontWeight = window._kidjs_.settings.defaultFontWeight ?? '400';
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
    window.friction = 0.1;
    this.previousFriction = 0.1;

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
      if (window._kidjs_.settings.backgroundColor) {
        this.context.fillStyle = window._kidjs_.settings.backgroundColor;
        this.context.fillRect(0, 0, this.width, this.height);
      } else {
        this.context.clearRect(0, 0, this.width, this.height);
      }

      // Detect change in friction
      if (window.friction != this.previousFriction) {
        this.previousFriction = window.friction;
        this._leftWall.friction = window.friction;
        this._rightWall.friction = window.friction;
        this._ceiling.friction = window.friction;
        this._floor.friction = window.friction;
      }

      // Update physics simulation
      this._leftWall.ghost = !window.walls;
      this._leftWall.collides = window.walls;
      this._rightWall.ghost = !window.walls;
      this._rightWall.collides = window.walls;
      this._ceiling.ghost = !window.ceiling;
      this._ceiling.collides = window.ceiling;
      this._floor.ghost = !window.floor;
      this._floor.collides = window.floor;
      this.engine.gravity.y = window.gravity;
      Matter.Engine.update(this.engine);

      // Render actors
      for (let actor of this.actors) {

        // If non-zero velocity, fire move event
        /*if (actor.body && (actor.body.velocity.x != 0 || actor.body.velocity.y != 0)) {
          actor.dispatchEvent(new CustomEvent('move'));
        }

        // Update position
        actor.update();*/

        // Render
        if (!actor.invisible) {
          actor.render(this.context);
        }
      }

      window._kidjs_.onframe();
      window._kidjs_.stats.lastFrame = Date.now();
      this.dispatchEvent(new CustomEvent('animationframe'));
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
    if (event == 'frame') {
      event = 'animationframe';
    }
    if (this.eventListeners[event] == undefined) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push({
      handler: handler
    });
  }

  /**
   * Remove event listener from stage.
   *
   * @param {string} [event] - Name of event.
   * @param {function} [handler] - Event handler to remove.
   */
  removeEventListener(event, handler) {
    if (this.eventListeners[event] !== undefined) {
      this.eventListeners[event] = this.eventListeners[event].filter(
        item => item.handler !== handler
      );
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
      for (let listener of this.eventListeners[event.type]) {
        if (typeof listener.handler == 'function') {

          // Switch on event object type
          switch (event.constructor.name) {
            case 'KeyboardEvent':
              listener.handler.call(context, event.key);
              return;
            case 'MouseEvent':
            case 'PointerEvent':
              let position = this.toStageCoordinates(event.x, event.y);
              listener.handler.call(context, position.x, position.y);
              return;
          }

          // Switch on event type property
          switch (event.type) {
            case 'tilt': 
              listener.handler.call(context, window.tiltX, window.tiltY);
              return;
            case 'message':
              listener.handler.call(context, event.detail.message);
              return;
            default:
              listener.handler.call(context);
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
      if (a && b && a.collides && b.collides) {
        a.dispatchEvent(new CustomEvent('collision', { detail: b }));
        b.dispatchEvent(new CustomEvent('collision', { detail: a }));
      }
    }
  }

  /**
   * Translate page coordinates to scene coordinates.
   * 
   * @param {int} [x] - X coordinate
   * @param {int} [y] - Y coordinate
   * @return {object} Translated coordinates
   */
  toStageCoordinates(x, y) {

    // Get bounding box of canvas
    let canvasRect = this.canvas.getBoundingClientRect();
    
    // Determine contained size of canvas
    let ratio = this.width / this.height;
    let w = canvasRect.height * ratio;
    let h = canvasRect.height
    if (w > canvasRect.width) {
      w = canvasRect.width;
      h = canvasRect.width / ratio;
    }

    // Determine offset
    let offsetX = (canvasRect.width - w) / 2;
    let offsetY = (canvasRect.height - h) / 2;

    // Translate and scale
    let x2 = (this.width / w) * (x - offsetX);
    let y2 = (this.height / h) * (y - offsetY);

    return {
      x: x2,
      y: y2
    }
  }
}
