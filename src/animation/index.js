import Color from './color';
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

        // Property is numeric
        if (typeof this.actor[property] == 'number') {
          if (this.actor[property] != this.to[property]) {
            this.from[property] = this.actor[property];
          }
        }

        // Property is a color
        if (property == 'fill' || property == 'stroke') {
          this.from[property] = new Color(this.actor[property]);
          this.to[property] = new Color(this.to[property]);
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

        // Numeric tween
        if (typeof this.from[property] == 'number') {

          if (t >= this.duration) {
            value = this.to[property];
          } else {
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
          }
          this.actor[property] = value;

        // Color tween
        } else {
          let r, g, b;
          if (t >= this.duration) {
            r = this.to[property].r;
            g = this.to[property].g;
            b = this.to[property].b;
          } else {
            switch (this.tween.toLowerCase()) {
              case 'linear':
                r = Tween.linear(t, this.from[property].r, this.to[property].r, this.duration);
                g = Tween.linear(t, this.from[property].g, this.to[property].g, this.duration);
                b = Tween.linear(t, this.from[property].b, this.to[property].b, this.duration);
                break;

              case 'easein':
                r = Tween.easeInQuad(t, this.from[property].r, this.to[property].r, this.duration);
                g = Tween.easeInQuad(t, this.from[property].g, this.to[property].g, this.duration);
                b = Tween.easeInQuad(t, this.from[property].b, this.to[property].b, this.duration);
                break;

              case 'easeout':
                r = Tween.easeOutQuad(t, this.from[property].r, this.to[property].r, this.duration);
                g = Tween.easeOutQuad(t, this.from[property].g, this.to[property].g, this.duration);
                b = Tween.easeOutQuad(t, this.from[property].b, this.to[property].b, this.duration);
                break;

              case 'easeinout':
                r = Tween.easeInOutQuad(t, this.from[property].r, this.to[property].r, this.duration);
                g = Tween.easeInOutQuad(t, this.from[property].g, this.to[property].g, this.duration);
                b = Tween.easeInOutQuad(t, this.from[property].b, this.to[property].b, this.duration);
                break;

              case 'easeinelastic':
                r = Tween.easeInElastic(t, this.from[property].r, this.to[property].r, this.duration);
                g = Tween.easeInElastic(t, this.from[property].g, this.to[property].g, this.duration);
                b = Tween.easeInElastic(t, this.from[property].b, this.to[property].b, this.duration);
                break;

              case 'easeoutelastic':
                r = Tween.easeOutElastic(t, this.from[property].r, this.to[property].r, this.duration);
                g = Tween.easeOutElastic(t, this.from[property].g, this.to[property].g, this.duration);
                b = Tween.easeOutElastic(t, this.from[property].b, this.to[property].b, this.duration);
                break;

              case 'easeinoutelastic':
              default:
                r = Tween.easeInOutElastic(t, this.from[property].r, this.to[property].r, this.duration);
                g = Tween.easeInOutElastic(t, this.from[property].g, this.to[property].g, this.duration);
                b = Tween.easeInOutElastic(t, this.from[property].b, this.to[property].b, this.duration);
            }
          }
          if (Number.isNaN(r)) r = 0;
          if (Number.isNaN(g)) g = 0;
          if (Number.isNaN(b)) b = 0;
          this.actor[property] = `rgb(${r}, ${g}, ${b})`;
        }
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

  fade(opacity, duration = 1, tween = 'easeinout') {
    return this.actor.fade(opacity, duration, tween, true);
  }

  fadeIn(duration = 1, tween = 'easeinout') {
    return this.actor.fadeIn(duration, tween, true);
  }

  fadeOut(duration = 1, tween = 'easeinout') {
    return this.actor.fadeOut(duration, tween, true);
  }

  repeat(count = -1) {
    this.actor.animationRepeat = count;
  }

  async wait() {
    await new Promise((resolve) => {
      this.actor.onAnimationsComplete = resolve;
    })
  }
}
