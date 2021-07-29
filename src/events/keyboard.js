let keysDown = [];

function onKeyDown(e) {
  if (!keysDown.includes(e.key)) {
    keysDown.push(e.key);
  }
}

function onKeyUp(e) {
  keysDown = keysDown.filter(item => item != e.key);
  window.stage.dispatchEvent(new KeyboardEvent('keyup', {
    key: e.key
  }));
  window.stage.dispatchEvent(new KeyboardEvent(e.key.toLowerCase(), {
    key: e.key
  }));
}

function onAnimationFrame() {
  for (let key of keysDown) {
    window.stage.dispatchEvent(new KeyboardEvent('keydown', {
      key: key
    }));
  }
}

export default function() {
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  window.addEventListener('animationframe', onAnimationFrame);
}
