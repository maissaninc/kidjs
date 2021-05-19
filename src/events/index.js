import initKeyboardEvents from './keyboard';
import initMouseEvents from './mouse';
import initDeviceOrientationEvents from './device-orientation';

export default function() {
  initKeyboardEvents();
  initMouseEvents();
  initDeviceOrientationEvents();
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
