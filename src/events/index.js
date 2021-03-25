import initKeyboardEvents from './keyboard';
import initMouseEvents from './mouse';

let listeners = [];

export default function() {
  initKeyboardEvents();
  initMouseEvents();
}

export function on(condition, callback) {

  // If condition is an event name
  if (typeof condition === 'string') {
    switch (condition) {

      case 'keypress':
        addEventListener('keypress', (e) => {
          callback(e.key);
        });
        break;

      case 'keydown':
        addEventListener('keydown', (e) => {
          callback(e.key);
        });
        break;

      case 'keyup':
        addEventListener('keyup', (e) => {
          callback();
        });
        break;
    }
  }
}

function addEventListener(type, listener) {
  listeners.push({
    type: type,
    listener: listener
  });
  window.addEventListener(type, listener);
}

export function removeAllEventListeners() {
  for (let obj of listeners) {
    window.removeEventListener(obj.type, obj.listener);
  }
}
