let keys = [];

function onKeyDown(e) {
  keys[e.code] = true;
}

function onKeyUp(e) {
  keys[e.code] = false;
}

export default function() {
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
}
