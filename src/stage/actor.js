export default class Actor {
  constructor(x, y, stage) {
    this.frame = 0;
    this.state = 'default';

    this.x = x;
    this.y = y;
    this.rotation = 0;

    this.speed = {
      x: 0,
      y: 0,
      rotation: 0
    };
    this.acceleration = {
      x: 0,
      y: 0,
      rotation: 0
    };

    if (typeof stage === 'undefined') {
      window.stage.addChild(this);
    } else {
      stage.addChild(this);
    }
  }

  update() {
    this.frame++;
    this.x = this.x + this.speed.x;
    this.y = this.y + this.speed.y;
    this.rotation = this.rotation + this.speed.rotation;
    this.speed.x = this.speed.x + this.acceleration.x;
    this.speed.y = this.speed.y + this.acceleration.y;
    this.speed.rotation = this.speed.rotation + this.acceleration.rotation;
  }

  spin(speed = 5) {
    this.speed.rotation = speed;
  }

  stop() {
    this.frame = 0;
    this.state = 'default';
  }
}
