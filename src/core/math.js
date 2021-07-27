/**
 * Return a random number.
 *
 * @constructor
 * @param {int} a - Minimum value
 * @param {int} b - Maximum value
 */
export function random(a, b) {

  // Return random decimal between 0 and 1
  if (typeof a == 'undefined' && typeof b == 'undefined') {
    return Math.random();
  }

  // Return random integer between 0 and first parameter
  if (typeof b == 'undefined') {
    return Math.round(Math.random() * a);
  }

  // Return random integer between first and second parameters
  return Math.round(Math.random() * (b - a) + a);
}

/**
 * Convert degrees to radians
 *
 * @param {Number} deg - Angle in degrees
 * @return {Number} Angle in radians
 */
export function degreesToRadians(deg) {
  return deg * (Math.PI / 180);
}

/**
 * Convert degrees to radians
 *
 * @param {Number} rad - Angle in radians
 * @return {Number} Angle in degrees
 */
export function radiansToDegrees(rad) {
  return rad * (180 / Math.PI);
}
