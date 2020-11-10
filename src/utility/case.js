function normalizeCase(code) {

  // Dictionary of cased functions and keywords
  var dictionary = [
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
    'Math',
    'Math\.PI',
    'moveTo',
    'Number',
    'Object',
    'parseFloat',
    'parseInt',
    'removeEventListener',
    'requestAnimationFrame',
    'String',
    'toLowerCase',
    'toUpperCase'
  ];

  // Split along string literals
  var tokens = code.split(
    /("(?:[^"\\]*(?:\\.[^"\\]*)*)"|\'(?:[^\'\\]*(?:\\.[^\'\\]*)*)\')/
  );

  var result = '';
  for (var i = 0; i < tokens.length; i++) {

    // If string literal, leave it alone
    if (tokens[i][0] == '\"' || tokens[i][0] == '\'') {
      result += tokens[i];

    // Otherwise correct casing
    } else {
      var token = tokens[i].toLowerCase();
      for (var j = 0; j < dictionary.length; j++) {
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

export { normalizeCase }
