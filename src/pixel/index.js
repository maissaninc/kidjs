import Rect from '../shape/rect';
import { parseLength } from '../core/units';

/**
 * Place a pixel at the given coordinates.
 * 
 * @param {int} x - X coordinate
 * @param {int} y - Y coordinate
 * @param {string} color - Color of the pixel
 * @returns {Rect} Pixel
 */
export function putPixel(x, y, color = 'black') {
  if (x == null || y == null) {
    return;
  }

  // If there is another pixel at the same location, replace it
  clearPixel(x, y);

  // Shift x and y to the center of the pixel
  x = parseLength(x, 'x') + 0.5;
  y = parseLength(y, 'y') + 0.5;

  // Create a new pixel
  const shape = new Rect(x, y, 1, 1);
  shape.color = color;
  shape.init();
  window.stage.addChild(shape);
  return shape;
}

/**
 * Get the value of a pixel at the given coordinates.
 * 
 * @param {int} x - X coordinate
 * @param {int} y - Y coordinate
 * @returns {string} Value of the pixel
 */
export function getPixel(x, y) {
  if (x == null || y == null) {
    return null;
  }

  // Shift x and y to the center of the pixel
  x = parseLength(x, 'x') + 0.5;
  y = parseLength(y, 'y') + 0.5;

  // Look for a pixel at the given coordinates
  for (let i = 0; i < window.stage.actors.length; i++) {
    if (window.stage.actors[i] instanceof Rect && window.stage.actors[i].x === x && window.stage.actors[i].y === y) {
      return window.stage.actors[i].color;
    }
  }

  return false;
}

/**
 * Clear the pixel at the given coordinates.
 * 
 * @param {int} x - X coordinate
 * @param {int} y - Y coordinate
 */
export function clearPixel(x, y) {
  if (x == null || y == null) {
    return;
  }

  // Shift x and y to the center of the pixel
  x = parseLength(x, 'x') + 0.5;
  y = parseLength(y, 'y') + 0.5;

  // Look for a pixel at the given coordinates
  for (let i = 0; i < window.stage.actors.length; i++) {
    if (window.stage.actors[i] instanceof Rect && window.stage.actors[i].x === x && window.stage.actors[i].y === y) {
      window.stage.actors[i].remove();
    }
  }
}