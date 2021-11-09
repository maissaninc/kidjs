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
  window.stage.dispatchEvent(e);
}

function onMouseUp(e) {
  window.mouseButton = false;

  // Check for swipe
  if (x !== false && y !== false && t !== false) {
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
  window.stage.dispatchEvent(e);
}

function onMouseMove(e) {
  window.mouseX = e.clientX;
  window.mouseY = e.clientY;
  window.stage.dispatchEvent(e);
}

function onClick(e) {
  for (let i = window.stage.actors.length - 1; i >= 0; i--) {
    if (window.stage.actors[i].containsPoint(e.clientX, e.clientY)) {
      window.stage.actors[i].dispatchEvent(e);
    }
  }
  window.stage.dispatchEvent(e);
}

export default function() {
  window.mouseX = 0;
  window.mouseY = 0;
  window.mouseButton = 0;
  
  if ('ontouchstart' in window) {
    window.addEventListener('touchstart', onMouseDown);
    window.addEventListener('touchend', onMouseUp);
    window.addEventListener('touchmove', onMouseMove);
  } else {
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
  }
  window.addEventListener('click', onClick);
  window.addEventListener('dblclick', onClick);
}
