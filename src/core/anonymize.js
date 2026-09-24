import seedrandom from 'seedrandom';

// JavaScript reserved words, common builtins, and Kid.js APIs. Matching is
// case-insensitive so these names stay readable in anonymized code.
const reservedWords = [
  'abstract', 'arguments', 'as', 'async', 'await', 'boolean', 'break', 'byte',
  'case', 'catch', 'char', 'class', 'const', 'continue', 'debugger', 'default',
  'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends', 'false',
  'final', 'finally', 'for', 'from', 'function', 'goto', 'if', 'implements',
  'import', 'in', 'instanceof', 'int', 'interface', 'let', 'long', 'native',
  'new', 'null', 'of', 'package', 'private', 'protected', 'public', 'return',
  'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw',
  'throws', 'transient', 'true', 'try', 'typeof', 'undefined', 'var', 'void',
  'volatile', 'while', 'with', 'yield',

  'Array', 'BigInt', 'Boolean', 'Date', 'Error', 'Function', 'Infinity', 'JSON',
  'Map', 'Math', 'NaN', 'Number', 'Object', 'PI', 'Promise', 'Proxy', 'Reflect',
  'RegExp', 'Set', 'String', 'Symbol', 'WeakMap', 'WeakSet',
  'clearInterval', 'clearTimeout', 'console', 'decodeURI', 'decodeURIComponent',
  'document', 'encodeURI', 'encodeURIComponent', 'isFinite', 'isNaN', 'log',
  'parseFloat', 'parseInt', 'requestAnimationFrame', 'cancelAnimationFrame',
  'setInterval', 'setTimeout', 'window',
  'alert', 'confirm', 'prompt',
  'toString', 'toLowerCase', 'toUpperCase', 'indexOf', 'length',
  'innerHeight', 'innerWidth',
  'addEventListener', 'removeEventListener', 'appendChild', 'removeChild',
  'beginPath', 'closePath', 'clearRect', 'fillRect', 'fillStyle', 'strokeStyle',
  'drawImage', 'lineTo', 'moveTo', 'bezierCurveTo',
  'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY',

  'acos', 'asin', 'atan', 'beep', 'circle', 'clear', 'clearPixel', 'cos',
  'curve', 'display', 'frequency', 'getPixel', 'group', 'heptagon', 'hexagon',
  'image', 'join', 'line', 'neuralNetwork', 'note', 'octagon', 'on', 'oval',
  'path', 'pentagon', 'pie', 'pixel', 'polygon', 'putPixel', 'random', 'record',
  'rect', 'rectangle', 'semicircle', 'send', 'sin', 'song', 'sound', 'speak',
  'square', 'star', 'tada', 'tan', 'triangle', 'wait', 'write', 'writeln',
  'HandTracker',

  'stage', 'grid', 'debug', 'KID',
  'fill', 'stroke', 'color', 'opacity', 'width', 'height', 'size',
  'font', 'fontColor', 'fontSize', 'fontWeight', 'lineWidth', 'lineStyle',
  'textAlign', 'textBaseline', 'text',
  'mouseX', 'mouseY', 'mouseButton', 'tiltX', 'tiltY',
  'x', 'y', 'angle', 'velocity', 'acceleration', 'angularVelocity', 'direction',
  'anchored', 'locked', 'collides', 'ghost', 'bounciness',

  'rotate', 'forward', 'backward', 'animate', 'move', 'shrink', 'grow', 'fade',
  'fadeIn', 'fadeOut', 'push', 'spin', 'explode', 'stop', 'hide', 'show',
  'remove', 'clone', 'copy', 'add', 'addChild', 'repeat', 'train', 'run',

  'click', 'dblclick', 'doubleclick', 'mousedown', 'mouseup', 'mousemove',
  'keydown', 'keyup', 'keypress', 'collision', 'frame', 'message'
];

const reserved = {};
for (let i = 0; i < reservedWords.length; i = i + 1) {
  reserved[reservedWords[i].toLowerCase()] = true;
}

/**
 * Anonymize the given code without parsing it.
 *
 * Alphanumeric runs are kept together. Reserved JavaScript keywords and
 * common Kid.js / JavaScript names are left unchanged; every other
 * identifier-like segment is replaced with seeded random text of the same
 * length. Purely numeric segments are left as-is.
 *
 * @param {String} code - Code to anonymize
 * @return {{code: String, dictionary: Object}} Anonymized code and a map of
 *   randomized text to the original segment, for unanonymize()
 */
export function anonymize(code, dictionary) {
  if (!code) {
    return '';
  }
  if (!dictionary) {
    dictionary = {};
  }

  let forward = {};
  let parts = code.split(/([A-Za-z0-9]+)/);
  let result = '';

  for (let i = 0; i < parts.length; i = i + 1) {
    let part = parts[i];
    if (shouldReplace(part)) {
      if (!forward[part]) {
        let replacement = uniqueRandom(part, dictionary);
        forward[part] = replacement;
        dictionary[replacement] = part;
      }
      result += forward[part];
    } else {
      result += part;
    }
  }

  return result;
}


/**
 * True when this alphanumeric run should be replaced with random text.
 *
 * @param {String} part - Segment from the split
 * @return {Boolean}
 */
function shouldReplace(part) {
  if (!/^[A-Za-z0-9]+$/.test(part)) {
    return false;
  }
  if (!/[A-Za-z]/.test(part)) {
    return false;
  }
  if (reserved[part.toLowerCase()]) {
    return false;
  }
  return true;
}

/**
 * Build a unique random stand-in for value, avoiding reserved words and
 * strings already used as replacements.
 *
 * @param {String} value - Original segment
 * @param {Object} dictionary - Map of replacements already assigned
 * @return {String} Seeded random string of the same length
 */
function uniqueRandom(value, dictionary) {
  let firstIsLetter = /[A-Za-z]/.test(value.charAt(0));
  let attempt = 0;
  while (attempt < 1000) {
    let candidate = randomizeString(value + ':' + attempt, value.length, firstIsLetter);
    if (!reserved[candidate.toLowerCase()] && !dictionary[candidate]) {
      return candidate;
    }
    attempt = attempt + 1;
  }
  return randomizeString(value, value.length, firstIsLetter);
}

/**
 * Build a random alphanumeric string of the given length, seeded by value.
 *
 * @param {String} value - Original string used as the RNG seed
 * @param {Number} length - Number of characters to generate
 * @param {Boolean} firstIsLetter - Whether the first character must be a letter
 * @return {String} Seeded random string
 */
function randomizeString(value, length) {
  let rng = seedrandom(value);
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let alphabet = letters + '0123456789';
  let result = '';
  for (let i = 0; i < length; i = i + 1) {
    let chars = (i == 0 && firstIsLetter) ? letters : alphabet;
    result += chars.charAt(Math.floor(rng() * chars.length));
  }
  return result;
}
