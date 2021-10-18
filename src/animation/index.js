import Tween from './tween';

export default class Animation {
  constructor(actor, properties, duration, tween, queue = false) {
    this.actor = actor;
    this.status = queue ? 'queued' : 'ready';
    this.queue = queue;
    this.duration = duration * 1000;
    this.to = properties;
    this.tween = tween;
    this.from = {}
  }

  /**
   * Advance animation a single frame
   */
  update() {
    if (this.status == 'ready') {

      // Capture initial property values
      this.from = {};
      for (const property in this.to) {
        if (typeof this.actor[property] == 'number') {
          if (this.actor[property] != this.to[property]) {
            this.from[property] = this.actor[property];
          }
        }
      }

      // Start animation
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

  animate(properties, duration = 1, tween = 'easeInOut') {
    return this.actor.animate(properties, duration, tween, true);
  }

  grow(amount, duration = 1, tween = 'easeInOut') {
    return this.actor.grow(amount, duration, tween, true);
  }

  shrink(amount, duration = 1, tween = 'easeInOut') {
    return this.actor.shrink(amount, duration, tween, true);
  }

  moveTo(x, y, duration = 1, tween = 'easeInOut') {
    return this.actor.moveTo(x, y, duration, tween, true);
  }

  move(x, y, duration = 1, tween = 'easeInOut') {
    return this.actor.move(x, y, duration, tween, true);
  }

  repeat(count = -1) {
    this.actor.animationRepeat = count;
  }
}
