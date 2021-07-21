import initKeyboardEvents from './keyboard';
import initMouseEvents from './mouse';
import initDeviceOrientationEvents from './device-orientation';

let parentAddEventListener;
let listeners = [];

export default function() {
  initKeyboardEvents();
  initMouseEvents();
  initDeviceOrientationEvents();

  // Intercept adding event listeners
  parentAddEventListener = window.addEventListener;
  window.addEventListener = function(type, listener, capture) {
    listeners.push({
      type: type,
      listener: listener
    });
    parentAddEventListener(type, listener, capture);
  }
}

/**
 * Clear all event listeners
 */
export function clearEventListeners() {
  for (let listener of listeners) {
    window.removeEventListener(listener.type, listener.listener);
  }
}

/**
 * Add event listener to stage.
 *
 * @param {string} [event] - Name of event.
 * @param {function} [handler] - Event handler to execute when event occurs.
 */
export function on(event, handler) {
  if (typeof event === 'string') {
    window.stage.addEventListener(event, handler);
  }
}
