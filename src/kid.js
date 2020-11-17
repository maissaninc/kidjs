import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import * as astring from 'astring';

export { Animation } from './animation/animation.js';
export { Canvas } from './canvas/canvas.js';
export { Debug } from './debug/debug.js';
export { DeviceOrientation } from './deviceorientation/deviceorientation.js';
export { Scene } from './scene/scene.js';
export { Sprite } from './scene/sprite.js';
export { Speech } from './speech/speech.js';
export { Keyboard } from './keyboard/keyboard.js';
export { Pointer } from './pointer/pointer.js';
export { normalizeNode } from './utility/case.js';
export { Grid } from './utility/grid.js';
export { Permissions } from './utility/permissions.js';

// Track event listeners added after initialization
KID._listeners = [];

// Track animation requests added after initialization
KID._animationRequests = [];

// Default settings
KID.settings = {
  caseInsensitive: false,
  slowMotion: false,
  pixelSize: 1
};

// Initialize framework
window.addEventListener('DOMContentLoaded', function() {
  new KID.Animation();
  KID._canvas = new KID.Canvas('kidjs-bg');
  KID._canvas.addMethodsToScope(window);
  new KID.Debug();
  new KID.DeviceOrientation();
  KID._scene = new KID.Scene();
  new KID.Speech();
  new KID.Keyboard();
  new KID.Pointer();
  KID._grid = new KID.Grid();
  KID._permissions = new KID.Permissions();
  window.dispatchEvent(new Event('KID.ready'));
  window['Sprite'] = KID.Sprite;

  // Override addEventListener
  window.parentAddEventListener = window.addEventListener;
  window.addEventListener = function(type, listener, capture) {
    KID._listeners.push({
      type: type,
      listener: listener
    });
    window.parentAddEventListener(type, listener, capture);
  }

  // Override requestAnimationFrame
  window.parentRequestAnimationFrame = window.requestAnimationFrame;
  window.requestAnimationFrame = function(callback) {
    KID._animationRequests.push(
      window.parentRequestAnimationFrame(callback)
    );
  }

  // Execute script blocks
  var scripts = document.querySelectorAll('script[type="kidjs"]');
  for (var i = 0; i < scripts.length; i = i + 1) {
    if (scripts[i].getAttribute('caseInsensitive') == 'true') {
      KID.settings.caseInsensitive = true;
    }
    KID.run(scripts[i].innerHTML);
  }
});

// Reset framework
window.reset = function() {
  KID._canvas.reset();
  KID._canvas.clear();
  KID._grid.draw();
  var listener = KID._listeners.pop();
  while (listener) {
    window.removeEventListener(listener.type, listener.listener);
    listener = KID._listeners.pop();
  }
  var animationRequest = KID._animationRequests.pop();
  while (animationRequest) {
    window.cancelAnimationFrame(animationRequest);
    animationRequest = KID._animationRequests.pop();
  }
}

// Run script
KID.run = async function(code) {

  // Parse code
  var ast = acorn.parse('(async function() {' + code + '})()', {
    locations: true
  });

  // Preload images
  var images = [];
  walk.simple(ast, {
    CallExpression: async function(node) {
      if (node.callee.name == 'drawImage') {
        images.push(node.arguments[0].value);
      }
    }
  });
  for (var i = 0; i < images.length; i = i + 1) {
    await KID._canvas.loadImage(images[i]);
  }

  // Walk entire source tree
  walk.full(ast.body[0], function(node) {

    // Case insensitive
    if (KID.settings.caseInsensitive) {
      KID.normalizeNode(node);
    }

    // Check for required permissions
    KID._permissions.checkRequiredPermissions(node);

    // Insert step code
    if (node.body) {
      for (var i = node.body.length - 1; i >= 0; i = i - 1) {
        if (['ExpressionStatement', 'VariableDeclaration'].indexOf(node.body[i].type) > -1) {
          node.body.splice(i + 1, 0, KID.debug._createStepStatement(node.body[i].loc));
        }
        if (node.body[i].type == 'FunctionDeclaration') {
          node.body[i].async = true;
        }
      }
    }
  });
  ast.body[0].expression.callee.body.body.push(
    KID.debug._createEndStatement()
  );

  // Run code
  code = astring.generate(ast);
  eval(code);

  // Code finished
  window.dispatchEvent(new Event('KID.parsed'));
}
