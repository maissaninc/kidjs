import Actor from '../../stage/actor';
import Vector from '../../core/vector';
import Matter from 'matter-js';

export default class Palm extends Actor {

  /**
   * Create a finger segment (aka phalange)
   *
   * @constructor
   */
  constructor() {
    super();
    this.a = new Vector();
    this.b = new Vector();
    this.c = new Vector();
    this.d = new Vector();
    this.e = new Vector();
    this.f = new Vector();
    this.body = false;
    this.width = 60;
  }

  /**
   * Update bounding polygin.
   */
  updateBoundingPolygon() {
    this.boundingPolygon = [
      new Vector(this.a.x, this.a.y),
      new Vector(this.b.x, this.b.y),
      new Vector(this.c.x, this.c.y),
      new Vector(this.d.x, this.d.y),
      new Vector(this.e.x, this.e.y),
      new Vector(this.f.x, this.f.y)
    ];

    // Determine center point
    let sumX = 0;
    let sumY = 0;
    for (let i = 0; i < this.boundingPolygon.length; i = i + 1) {
      sumX = sumX + this.boundingPolygon[i].x;
      sumY = sumY + this.boundingPolygon[i].y;
    }
    this.x = sumX / this.boundingPolygon.length;
    this.y = sumY / this.boundingPolygon.length;

    // Reposition vectors around center point
    for (let i = 0; i < this.boundingPolygon.length; i = i + 1) {
      this.boundingPolygon[i].x = this.boundingPolygon[i].x - this.x;
      this.boundingPolygon[i].y = this.boundingPolygon[i].y - this.y;
    }
  }

  /**
   * Update position if landmarks.
   * 
   * @param {number} a x coordinate
   * @param {number} a y coordinate
   * @param {number} b x coordinate
   * @param {number} b y coordinate
   * @param {number} c x coordinate
   * @param {number} c y coordinate
   * @param {number} d x coordinate
   * @param {number} d y coordinate
   * @param {number} e x coordinate
   * @param {number} e y coordinate
   * @param {number} f x coordinate
   * @param {number} f y coordinate
   */
  show(ax, ay, bx, by, cx, cy, dx, dy, ex, ey, fx, fy) {

    // Update landmarks
    this.a.x = ax;
    this.a.y = ay;
    this.b.x = bx;
    this.b.y = by;
    this.c.x = cx;
    this.c.y = cy;
    this.d.x = dx;
    this.d.y = dy;
    this.e.x = ex;
    this.e.y = ey;
    this.f.x = fx;
    this.f.y = fy;
    this.updateBoundingPolygon();

    // Create body
    if (!this.body) {
      this.body = Matter.Bodies.fromVertices(0, 0, this.boundingPolygon);
      Matter.Body.setStatic(this.body, true);
      this.body.collisionFilter.group = -999;
      window.stage.addChild(this);

    // Update body
    } else {
      Matter.Body.setPosition(this.body, {x: this.x, y: this.y});
      Matter.Body.setVertices(this.body, this.boundingPolygon);
    }
  }

  /**
   * Remove phalange.
   */
  hide() {
    this.body = false;
    window.stage.removeChild(this);
  }

  /**
   * Render phalange.
   * 
   * @param {CanvasRenderingContext2D} context 
   */
  render(context) {
    if (this.body) {
      context.beginPath();
      context.moveTo(this.a.x, this.a.y);
      context.lineTo(this.b.x, this.b.y);
      context.lineTo(this.c.x, this.c.y);
      context.lineTo(this.d.x, this.d.y);
      context.lineTo(this.e.x, this.e.y);
      context.lineTo(this.f.x, this.f.y);
      context.closePath();
      context.lineWidth = this.width;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.strokeStyle = '#ffbc41';
      context.stroke();
      context.fillStyle = '#ffbc41';
      context.fill();
    }
  }
}