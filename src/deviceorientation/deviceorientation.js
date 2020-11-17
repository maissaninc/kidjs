function DeviceOrientation() {
  this.threshold = 10;
  window.addEventListener('deviceorientation', this.onDeviceOrientation.bind(this));
}

DeviceOrientation.prototype = {

  constructor: DeviceOrientation,

  onDeviceOrientation: function(e) {

    // Trigger "tiltleft" event
    if (this.getHorizontalTilt(e) < -this.threshold) {
      var event = new Event('tiltleft')
      window.dispatchEvent(event);
    }

    // Trigger "tiltright" event
    if (this.getHorizontalTilt(e) > this.threshold) {
      var event = new Event('tiltright')
      window.dispatchEvent(event);
    }

    // Trigger "tiltup" event
    if (this.getVerticalTilt(e) < -this.threshold) {
      var event = new Event('tiltup')
      window.dispatchEvent(event);
    }

    // Trigger "tiltdown" event
    if (this.getVerticalTilt(e) > this.threshold) {
      var event = new Event('tiltdown')
      window.dispatchEvent(event);
    }
  },

  getHorizontalTilt: function(e) {
    if (window.matchMedia('(orientation: portrait)').matches) {
      return e.gamma;
    } else {
      return -e.beta;
    }
  },

  getVerticalTilt: function(e) {
    if (window.matchMedia('(orientation: portrait)').matches) {
      return e.beta;
    } else {
      return e.gamma;
    }
  }
};

export { DeviceOrientation }
