let x = false;
let y = false;
let time = false;

function onMouseDown(e) {
  x = e.clientX;
  y = e.clientY;
  time = Date.now();
  window.mouseButton = e.button == 2 ? 'right' : 'left'
}

function onMouseUp(e) {
  window.mouseButton = false;
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
