function Pointer() {
  this.x = false;
  this.y = false;
  this.t = false;

  // Track mouse poistion in global variable
  window.mouse = {
    x: 0,
    y: 0
  };

  // Setup event listeners
  if ('ontouchstart' in window) {
    window.addEventListener('touchstart', this.onPointerDown.bind(this));
    window.addEventListener('touchend', this.onPointerUp.bind(this));
    window.addEventListener('touchmove', this.onPointerMove.bind(this));
  } else {
    window.addEventListener('mousedown', this.onPointerDown.bind(this));
    window.addEventListener('mouseup', this.onPointerUp.bind(this));
    window.addEventListener('mousemove', this.onPointerMove.bind(this));
  }
}

Pointer.SWIPE_MIN_DISTANCE = 150;
Pointer.SWIPE_CROSS_MAX_DISTANCE = 100;
Pointer.SWIPE_MAX_TIME = 200;

Pointer.prototype = {

  constructor: Pointer,

  onPointerDown: function(e) {
    this.x = e.clientX;
    this.y = e.clientY;
    this.t = Date.now();
  },

  onPointerUp: function(e) {
    if (this.x !== false && this.y !== false && this.t !== false) {

      // Calculate delta
      var deltaX = e.clientX - this.x;
      var deltaY = e.clientY - this.y;
      var deltaT = Date.now() - this.t;

      // Determine swipe
      if (deltaT < Pointer.SWIPE_MAX_TIME) {
        if (deltaX > Pointer.SWIPE_MIN_DISTANCE && Math.abs(deltaY) < Pointer.SWIPE_CROSS_MAX_DISTANCE) {
          var event = new Event('swiperight');
          window.dispatchEvent(event);
        }
        if (deltaX < -Pointer.SWIPE_MIN_DISTANCE && Math.abs(deltaY) < Pointer.SWIPE_CROSS_MAX_DISTANCE) {
          var event = new Event('swipeleft');
          window.dispatchEvent(event);
        }
        if (deltaY > Pointer.SWIPE_MIN_DISTANCE && Math.abs(deltaX) < Pointer.SWIPE_CROSS_MAX_DISTANCE) {
          var event = new Event('swipedown');
          window.dispatchEvent(event);
        }
        if (deltaY < -Pointer.SWIPE_MIN_DISTANCE && Math.abs(deltaX) < Pointer.SWIPE_CROSS_MAX_DISTANCE) {
          var event = new Event('swipeup');
          window.dispatchEvent(event);
        }
      }
    }

    // Clear retained data
    this.x = false;
    this.y = false;
    this.t = false;
  },

  onPointerMove: function(e) {
    window.mouse.x = e.clientX;
    window.mouse.y = e.clientY;
  }
};

export { Pointer }
