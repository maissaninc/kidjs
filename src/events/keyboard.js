function onKeyDown(e) {
  window.keyPressed = e.key;
}

function onKeyUp(e) {
  window.keyPressed = false;
}

export default function() {
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
}
