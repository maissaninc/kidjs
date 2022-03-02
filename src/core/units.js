/**
 * Parse code for percent units.
 *
 * @param {string} code - Code to parse
 * @param {string} Modified code
 */
export function replacePercentUnits(code) {

  // Split code along string literals
  let tokens = code.split(/("(?:[^"\\]*(?:\\.[^"\\]*)*)"|\'(?:[^\'\\]*(?:\\.[^\'\\]*)*)\')/);
  let result = '';

  // Iterate over each token
  for (let i = 0; i < tokens.length; i++) {

    // If not string literal, look for percent units
    if (tokens[i][0] != '\"' && tokens[i][0] != '\'') {
      tokens[i] = tokens[i].replace(
        new RegExp('([^0-9])([0-9]{1,3})\%', 'g'),
        '$1\'$2%\''
      );
    }

    result += tokens[i];
  }

  return result;
};

/**
 * Convert units to pixels
 *
 * @param {string} length - Length with units
 * @param {string} axis - X or Y axis
 * @return {Number} Length in pixels
 */
 export function parseLength(length, axis = 'x') {

   // Length has no unit, assume already in pixels
   if (typeof length === 'number') {
     return length;
   }

   // Parse string for unit
   let regex = /(\d+)(px|%)/i;
   let match = regex.exec(length);
   if (!match) {
     throw new KidjsError('Invalid unit');
   }

   // Pixels
   if (match[2] == 'px') {
     return parseFloat(match[1]);
   }

   // Percentage
   if (match[2] == '%' && axis == 'x') {
     return parseFloat(match[1]) / 100 * window.innerWidth;
   }
   if (match[2] == '%' && axis == 'y') {
     return parseFloat(match[1]) / 100 * window.innerHeight;
   }
   if (match[2] == '%' && axis == 'size') {
     return parseFloat(match[1]) / 100 * Math.min(
       window.innerWidth,
       window.innerHeight
     );
   }
 }
