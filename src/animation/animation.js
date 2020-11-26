function Animation() {
  window.requestAnimationFrame(this.onRequestAnimationFrame.bind(this));
}

Animation.prototype = {

  constructor: Animation,

  onRequestAnimationFrame: function() {
    if (typeof window.onAnimationFrame === 'function') {
      window.onAnimationFrame();
    }
    window.requestAnimationFrame(this.onRequestAnimationFrame.bind(this));
  }
};

export { Animation }
