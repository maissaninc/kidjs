import Tween from './tween';

export default class Animation {
  constructor(actor, properties, duration, tween) {
    this.actor = actor;
    this.status = 'ready';
    this.duration = duration * 1000;
    this.to = properties;
    this.tween = tween;

    // Capture initial property values
    this.from = {};
    for (const property in this.to) {
      if (typeof this.actor[property] == 'number') {
        if (this.actor[property] != this.to[property]) {
          this.from[property] = this.actor[property];
        }
      }
    }
  }

  /**
   * Advance animation a single frame
   */
  update() {
    if (this.status == 'ready') {
      this.status = 'running';
      this.start = Date.now();
    }

    if (this.status == 'running') {
      let t = Date.now() - this.start;
      for (const property in this.from) {
        let value;
        switch (this.tween) {
          default:
            value = Tween.easeInOutElastic(t, this.from[property], this.to[property], this.duration);
        }
        this.actor[property] = value;
      }
      if (t >= this.duration) {
        this.status = 'complete';
      }
    }
  }
}
