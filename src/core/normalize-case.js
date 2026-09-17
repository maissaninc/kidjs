import * as walk from 'acorn-walk';

// Mixed-case JavaScript and Kid.js names to restore after lowercasing
const dictionary = [
  'addChild',
  'addEventListener',
  'angularVelocity',
  'appendChild',
  'Array',
  'bezierCurveTo',
  'cancelAnimationFrame',
  'clearInterval',
  'clearPixel',
  'clearRect',
  'clearTimeout',
  'Date',
  'decodeURI',
  'decodeURIComponent',
  'drawImage',
  'encodeURI',
  'encodeURIComponent',
  'fadeIn',
  'fadeOut',
  'fillCircle',
  'fillRect',
  'fillStyle',
  'fontColor',
  'fontSize',
  'fontWeight',
  'getPixel',
  'HandTracker',
  'indexOf',
  'Infinity',
  'innerHeight',
  'innerWidth',
  'isFinite',
  'isNaN',
  'JSON',
  'lineStyle',
  'lineTo',
  'lineWidth',
  'Math',
  'mouseButton',
  'mouseX',
  'mouseY',
  'moveTo',
  'NaN',
  'Number',
  'neuralNetwork',
  'Object',
  'parseFloat',
  'parseInt',
  'PI',
  'putPixel',
  'removeChild',
  'removeEventListener',
  'requestAnimationFrame',
  'setInterval',
  'setTimeout',
  'shadowBlur',
  'shadowColor',
  'shadowOffsetX',
  'shadowOffsetY',
  'String',
  'strokeStyle',
  'textAlign',
  'textBaseline',
  'tiltX',
  'tiltY',
  'toLowerCase',
  'toString',
  'toUpperCase'
];

const restored = {};
for (let i = 0; i < dictionary.length; i++) {
  restored[dictionary[i].toLowerCase()] = dictionary[i];
}

/**
 * Lowercase a name, then restore known mixed-case APIs.
 *
 * @param {String} name - Identifier name
 * @return {String} Normalized name
 */
function normalizeName(name) {
  let lower = name.toLowerCase();
  if (restored[lower]) {
    return restored[lower];
  }
  return lower;
}

/**
 * Convert identifier names to lowercase, restoring mixed-case APIs.
 * String literals, comments, and regexes are left unchanged.
 *
 * @param {Object} ast - Parsed AST
 */
export default function normalizeCase(ast) {
  walk.full(ast, function(node) {

    if (node.type == 'Identifier') {
      node.name = normalizeName(node.name);
    }

    // Non-computed properties are not visited as Identifier nodes
    if (node.type == 'MemberExpression' && !node.computed && node.property.type == 'Identifier') {
      node.property.name = normalizeName(node.property.name);
    }

    if ((node.type == 'Property' || node.type == 'MethodDefinition' || node.type == 'PropertyDefinition') &&
      !node.computed && node.key && node.key.type == 'Identifier'
    ) {
      node.key.name = normalizeName(node.key.name);
    }
  });
}
