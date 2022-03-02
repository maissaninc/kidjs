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
    if (!tokens[i][0] == '\"' && !tokens[i][0] == '\'') {
      tokens[i] = tokens[i].replace(
        new RegExp('[^0-9]([0-9]{1,3})\%', 'g'),
        '\'$1\''
      );
    }

    result += tokens[i];
  }

  return result;
};
