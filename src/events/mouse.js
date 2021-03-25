const SWIPE_MIN_DISTANCE = 150;
const SWIPE_CROSS_MAX_DISTANCE = 100;
const SWIPE_MAX_TIME = 200;

let x = false;
let y = false;
let t = false;

function onMouseDown(e) {
  x = e.clientX;
  y = e.clientY;
  t = Date.now();
  window.mouseButton = e.button == 2 ? 'right' : 'left'
}

function onMouseUp(e) {
  window.mouseButton = false;

  // Check for swipe
  if (x !== false && y !== false && time !== false) {
    let deltaX = e.clientX - x;
    let deltaY = e.clientY - y;
    let deltaT = Date.now() - t;

    if (deltaT < SWIPE_MAX_TIME) {
      if (deltaX > SWIPE_MIN_DISTANCE && Math.abs(deltaY) < SWIPE_CROSS_MAX_DISTANCE) {
        window.dispatchEvent(new CustomEvent('swiperight'));
      }
      if (deltaX < -SWIPE_MIN_DISTANCE && Math.abs(deltaY) < SWIPE_CROSS_MAX_DISTANCE) {
        window.dispatchEvent(new CustomEvent('swipeleft'));
      }
      if (deltaY > SWIPE_MIN_DISTANCE && Math.abs(deltaX) < SWIPE_CROSS_MAX_DISTANCE) {
        window.dispatchEvent(new CustomEvent('swipedown'));
      }
      if (deltaY < -SWIPE_MIN_DISTANCE && Math.abs(deltaX) < SWIPE_CROSS_MAX_DISTANCE) {
        window.dispatchEvent(new CustomEvent('swipeup'));
      }
    }
  }

  t = false;
}

function onMouseMove(e) {
  window.mouseX = e.clientX;
  window.mouseY = e.clientY;
}

export default function() {
  if ('ontouchstart' in window) {
    window.addEventListener('touchstart', onMouseDown);
    window.addEventListener('touchend', onMouseUp);
    window.addEventListener('touchmove', onMouseMove);
  } else {
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
  }
}
