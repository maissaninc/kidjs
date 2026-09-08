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
 * Sine function
 * 
 * @param {Number} angle - Angle in degrees
 * @return {Number} Sine of the angle
 */
export function sin(angle) {
  return Math.sin(degreesToRadians(angle));
}

/**
 * Cosine function
 * 
 * @param {Number} angle - Angle in degrees
 * @return {Number} Cosine of the angle
 */
export function cos(angle) {
  return Math.cos(degreesToRadians(angle));
}

/**
 * Tangent function
 * 
 * @param {Number} angle - Angle in degrees
 * @return {Number} Tangent of the angle
 */
export function tan(angle) {
  return Math.tan(degreesToRadians(angle));
}

/**
 * Arc sine function
 * 
 * @param {Number} value - Value
 * @return {Number} Angle in radians
 */
export function asin(value) {
  return radiansToDegrees(Math.asin(value));
}

/**
 * Arc cosine function
 * 
 * @param {Number} value - Value
 * @return {Number} Angle in radians
 */
export function acos(value) {
  return radiansToDegrees(Math.acos(value));
}

/**
 * Arc tangent function
 * 
 * @param {Number} value - Slope
 * @return {Number} Angle in degrees
 */
export function atan(value) {
  if (Number.isNaN(value)) return 0;
  return radiansToDegrees(Math.atan(value));
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
