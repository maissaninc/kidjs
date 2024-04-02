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
    this.width = 40;
  }

  /**
   * Update bounding polygin.
   */
  updateBoundingPolygon() {
    this.boundingPolygon = [];

    this.boundingPolygon.push(new Vector(
      this.a.x + Math.cos(this.angle) * this.width / 2,
      this.a.y + Math.sin(this.angle) * this.width / 2
    ));

    this.boundingPolygon.push(new Vector(
      this.a.x + Math.cos(this.angle + Math.PI) * this.width / 2,
      this.a.y + Math.sin(this.angle + Math.PI) * this.width / 2
    ));

    this.boundingPolygon.push(new Vector(
      this.b.x + Math.cos(this.angle + Math.PI) * this.width / 2,
      this.b.y + Math.sin(this.angle + Math.PI) * this.width / 2
    ));


    this.boundingPolygon.push(new Vector(
      this.b.x + Math.cos(this.angle) * this.width / 2,
      this.b.y + Math.sin(this.angle) * this.width / 2
    ));
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
    let opposite = this.b.x - this.a.x;
    let adjacent = this.b.y + this.a.y;
    this.angle = Math.atan(opposite / adjacent) % Math.PI;
    this.updateBoundingPolygon();

    // Create body
    if (!this.body) {
      this.body = Matter.Bodies.fromVertices(0, 0, this.boundingPolygon);
      this.body.collisionFilter.group = -999;
      window.stage.addChild(this);
    }
  }

  hide() {
    this.body = false;
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
      context.strokeStyle = 'rgba(0, 0, 255, 0.5)';
      context.stroke();

      // Draw bounding polygon
      context.beginPath();
      context.moveTo(this.boundingPolygon[0].x, this.boundingPolygon[0].y);
      for (let i = 1; i < this.boundingPolygon.length; i = i + 1) {
        context.lineTo(this.boundingPolygon[i].x, this.boundingPolygon[i].y);
      }
      context.closePath();
      context.lineWidth = 2;
      context.strokeStyle = 'red';
      context.stroke();

      context.strokeStyle = 'purple';
      context.beginPath();
      context.arc(this.a.x, this.a.y, 20, 0, Math.PI * 2);
      context.stroke();
      context.beginPath();
      context.arc(this.b.x, this.b.y, 20, 0, Math.PI * 2);
      context.stroke();
    }
  }
}

export function phalange() {
  const shape = new Phalange();
  //window.stage.addChild(shape);
  return shape;
}