// Dictionary of cased functions and keywords
const dictionary = [
  'addEventListener',
  'appendChild',
  'bezierCurveTo',
  'clearRect',
  'decodeURI',
  'decodeURIComponent',
  'drawImage',
  'encodeURI',
  'encodeURIComponent',
  'fillCircle',
  'fillRect',
  'fillStyle',
  'JSON',
  'indexOf',
  'isFinite',
  'isNaN',
  'lineStyle',
  'lineTo',
  'lineWidth',
  'moveTo',
  'Number',
  'Object',
  'parseFloat',
  'parseInt',
  'PI',
  'removeEventListener',
  'requestAnimationFrame',
  'shadowBlur',
  'shadowColor',
  'shadowOffsetX',
  'shadowOffsetY',
  'String',
  'strokeStyle',
  'textAlign',
  'textBaseline',
  'toLowerCase',
  'toUpperCase'
];


export default function (code) {

  // Split code along string literals
  let tokens = code.split(/("(?:[^"\\]*(?:\\.[^"\\]*)*)"|\'(?:[^\'\\]*(?:\\.[^\'\\]*)*)\')/);
  let result = '';

  // Iterate over each token
  for (let i = 0; i < tokens.length; i++) {

    // If string literal, leave it alone
    if (tokens[i][0] == '\"' || tokens[i][0] == '\'') {
      result += tokens[i];

    // Otherwise correct casing
    } else {
      let token = tokens[i].toLowerCase();
      for (let j = 0; j < dictionary.length; j++) {
        token = token.replace(
          new RegExp('\\b' + dictionary[j].toLowerCase() + '\\b', 'g'),
          dictionary[j]
        );
      }
      result += token;
    }
  }

  return result;
};
