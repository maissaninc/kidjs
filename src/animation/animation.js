function Animation() {
  window.requestAnimationFrame(this.onRequestAnimationFrame.bind(this));
}

Animation.prototype = {

  constructor: Animation,

  onRequestAnimationFrame: function() {
    if (typeof window.onAnimationFrame === 'function') {
      window.onAnimationFrame();
    }
    if (typeof KID._scene.drawFrame === 'function') {
      KID._scene.drawFrame();
    }
    window.requestAnimationFrame(this.onRequestAnimationFrame.bind(this));
  }
};

export { Animation }
