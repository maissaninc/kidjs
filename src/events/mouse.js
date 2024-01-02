const SWIPE_MIN_DISTANCE = 150;
const SWIPE_CROSS_MAX_DISTANCE = 100;
const SWIPE_MAX_TIME = 200;
const DBL_CLICK_MAX_TIME = 1000;

let x = false;
let y = false;
let t = false;
let previous = false;

function onMouseDown(e) {
  let position = window.stage.toStageCoordinates(e.pageX, e.pageY);
  x = position.x;
  y = position.y;
  t = Date.now();
  window.mouseButton = e.button == 2 ? 'right' : 'left'
  let mouseDownEvent = new MouseEvent('mousedown', e);
  window.stage.dispatchEvent(mouseDownEvent);
}

function onMouseUp(e) {
  window.mouseButton = false;
  let position = window.stage.toStageCoordinates(e.pageX, e.pageY);

  if (x !== false && y !== false && t !== false) {
    let deltaX = position.x - x;
    let deltaY = position.y - y;
    let deltaT = Date.now() - t;

    // Check for swipe
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

    // Check for double click
    if (previous) {
      let secondClickDeltaX = position.x - previous.x;
      let secondClickDeltaY = position.y - previous.y;
      let secondClickDeltaT = Date.now() - previous.t;
      if (secondClickDeltaX < 10 && secondClickDeltaY < 10 && secondClickDeltaT < DBL_CLICK_MAX_TIME) {
        let dblClickEvent = new MouseEvent('dblclick', e);
        for (let i = window.stage.actors.length - 1; i >= 0; i--) {
          if (window.stage.actors[i].containsPoint(position.x, position.y)) {
            window.stage.actors[i].dispatchEvent(dblClickEvent);
          }
        }
        window.stage.dispatchEvent(dblClickEvent);
      }
    }

    // Check for click
    if (deltaX < 10 && deltaY < 10) {
      let clickEvent = new MouseEvent('click', e);
      for (let i = window.stage.actors.length - 1; i >= 0; i--) {
        if (window.stage.actors[i].containsPoint(position.x, position.y)) {
          window.stage.actors[i].dispatchEvent(clickEvent);
        }
      }
      window.stage.dispatchEvent(clickEvent);
      previous = {x: x, y: y, t: Date.now()};
    }
  }

  t = false;
  let mouseUpEvent = new MouseEvent('mouseup', e);
  window.stage.dispatchEvent(mouseUpEvent);
}

function onMouseMove(e) {
  let position = window.stage.toStageCoordinates(e.pageX, e.pageY);
  window.mouseX = position.x;
  window.mouseY = position.y;

  let mouseMoveEvent = new MouseEvent('mousemove', e);
  window.stage.dispatchEvent(mouseMoveEvent);
}

export default function() {
  window.mouseX = 0;
  window.mouseY = 0;
  window.mouseButton = 0;

  if ('ontouchstart' in document) {
    document.addEventListener('touchstart', onMouseDown);
    document.addEventListener('touchend', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
  } else {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
  }
}
