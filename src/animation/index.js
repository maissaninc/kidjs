import Tween from './tween';

export default class Animation {
  constructor(actor, properties, duration, tween = false, queue = false) {
    this.actor = actor;
    this.status = queue ? 'queued' : 'ready';
    this.queue = queue;
    this.duration = duration * 1000;
    this.to = properties;
    this.tween = tween ? tween : window.easing;
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
        switch (this.tween.toLowerCase()) {
          case 'linear':
            value = Tween.linear(t, this.from[property], this.to[property], this.duration);
            break;

          case 'easein':
            value = Tween.easeInQuad(t, this.from[property], this.to[property], this.duration);
            break;

          case 'easeout':
            value = Tween.easeOutQuad(t, this.from[property], this.to[property], this.duration);
            break;

          case 'easeinout':
            value = Tween.easeInOutQuad(t, this.from[property], this.to[property], this.duration);
            break;

          case 'easeinelastic':
            value = Tween.easeInElastic(t, this.from[property], this.to[property], this.duration);
            break;

          case 'easeoutelastic':
            value = Tween.easeOutElastic(t, this.from[property], this.to[property], this.duration);
            break;

          case 'easeinoutelastic':
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

  animate(properties, duration = 1, tween = false) {
    return this.actor.animate(properties, duration, tween, true);
  }

  grow(amount, duration = 1, tween = false) {
    return this.actor.grow(amount, duration, tween, true);
  }

  shrink(amount, duration = 1, tween = false) {
    return this.actor.shrink(amount, duration, tween, true);
  }

  moveTo(x, y, duration = 1, tween = false) {
    return this.actor.moveTo(x, y, duration, tween, true);
  }

  move(x, y, duration = 1, tween = false) {
    return this.actor.move(x, y, duration, tween, true);
  }

  repeat(count = -1) {
    this.actor.animationRepeat = count;
  }
}
