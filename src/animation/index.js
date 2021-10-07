import * from './tween';

export default class Animation {
  constructor(actor, properties, duration, tween) {
    this.actor = actor;
    this.position = 0;
    this.duration = duration;
    this.to = properties;
    this.tween = tween;

    // Capture initial property values
    this.from = {};
    for (const property in this.to) {
      this.from[property] = this.actor[property];
    }
  }

  /**
   * Advance animation a single frame
   */
  update() {
    this.position++;
  }
}
