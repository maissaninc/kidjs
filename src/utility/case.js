function normalizeNode(node) {
  switch (node.type) {
    case 'Identifier':
      node.name = normalizeIdentifier(node.name);
      break;
    case 'AssignmentExpression':
    case 'BinaryExpression':
      normalizeNode(node.left);
      normalizeNode(node.right);
      break;
    case 'MemberExpression':
      normalizeNode(node.property);
      break;
    case 'ForStatement':
      normalizeNode(node.init);
      normalizeNode(node.test);
      normalizeNode(node.update);
      break;
  }
}

function normalizeIdentifier(identifier) {

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

  // Lowercase all identifiers
  identifier = identifier.toLowerCase();

  // Correct case for specific identifiers
  for (var j = 0; j < dictionary.length; j++) {
    if (identifier == dictionary[j].toLowerCase()) {
      identifier = dictionary[j];
    }
  }

  return identifier;
};

export { normalizeNode }
