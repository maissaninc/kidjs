import Actor from '../../stage/actor';
import Vector from '../../core/vector';
import Matter from 'matter-js';

export default class Phalange extends Actor {

  /**
   * Create a finger segment (aka phalange)
   *
   * @constructor
   */
  constructor() {
    super();
    this.a = new Vector();
    this.b = new Vector();
    this.body = false;
    this.width = 60;
  }

  /**
   * Update bounding polygin.
   */
  updateBoundingPolygon() {
    this.boundingPolygon = [
      new Vector(
        this.a.x + Math.cos(this.angle + Math.PI / 2) * this.width / 2,
        this.a.y - Math.sin(this.angle + Math.PI / 2) * this.width / 2
      ),
      new Vector(
        this.a.x + Math.cos(this.angle - Math.PI / 2) * this.width / 2,
        this.a.y - Math.sin(this.angle - Math.PI / 2) * this.width / 2
      ),
      new Vector(
        this.b.x + Math.cos(this.angle - Math.PI / 2) * this.width / 2,
        this.b.y - Math.sin(this.angle - Math.PI / 2) * this.width / 2
      ),
      new Vector(
        this.b.x + Math.cos(this.angle + Math.PI / 2) * this.width / 2,
        this.b.y - Math.sin(this.angle + Math.PI / 2) * this.width / 2
      )
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
   * @param {number} x1 coordinate
   * @param {number} y1 coordinate
   * @param {number} x2 coordinate
   * @param {number} y2 coordinate
   */
  show(x1, y1, x2, y2) {

    // Update landmarks
    this.a.x = x1;
    this.a.y = y1;
    this.b.x = x2;
    this.b.y = y2;

    // Update angle
    let u = this.b.subtract(this.a);
    let v = new Vector(1, 0);
    this.angle = Math.acos(u.dot(v) / (u.length * v.length));
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
      context.lineWidth = this.width;
      context.lineCap = 'round';
      context.strokeStyle = '#ffbc41';
      context.stroke();

      // Debug information
      if (window.debug) {

        // Bounding polygon
        context.beginPath();
        context.moveTo(this.x + this.boundingPolygon[0].x, this.y + this.boundingPolygon[0].y);
        for (let i = 1; i < this.boundingPolygon.length; i = i + 1) {
          context.lineTo(this.x + this.boundingPolygon[i].x, this.y + this.boundingPolygon[i].y);
        }
        context.closePath();
        context.lineWidth = 1;
        context.strokeStyle = 'red';
        context.stroke();
      
        // Landmarks
        context.strokeStyle = 'purple';
        context.beginPath();
        context.arc(this.a.x, this.a.y, 20, 0, Math.PI * 2);
        context.stroke();
        context.beginPath();
        context.arc(this.b.x, this.b.y, 20, 0, Math.PI * 2);
        context.stroke();

        // Bounding box
        context.beginPath();
        context.rect(this.bounds.min.x, this.bounds.min.y, this.bounds.max.x - this.bounds.min.x, this.bounds.max.y - this.bounds.min.y);
        context.strokeStyle = 'black';
        context.lineWidth = 0.5;
        context.stroke();
      }
    }
  }
}