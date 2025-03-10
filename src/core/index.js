import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import * as astring from 'astring';
import { attachComments } from 'astravel';

import { on, removeAllEventListeners } from '../events';
import { beep, frequency, note, song } from '../audio';
import { sound } from '../audio/sound';
import { speak } from '../audio/speech';
import { initSockets, join, send } from '../socket';
import { circle } from '../shape/circle';
import { curve } from '../shape/curve';
import { line } from '../shape/line';
import { oval } from '../shape/oval';
import { path } from '../shape/path';
import { pie } from '../shape/pie';
import { polygon } from '../shape/polygon';
import { record } from '../media';
import { rect, square } from '../shape/rect';
import { pentagon, hexagon, heptagon, octagon } from '../shape/regular';
import { semicircle } from '../shape/semicircle';
import { triangle } from '../shape/triangle';
import { image } from '../sprite';
import { star } from '../shape/star';
import { tada } from '../audio/sound';
import { display, write, writeln } from '../text';
import { group } from '../stage/group';
import { random } from './math';
import { replacePercentUnits } from './units';
import { requirePermission, getPermissions } from './permissions';
import { log } from '../debug';
import { prompt, closeAllPrompts } from '../input/prompt';
import { KidjsError } from './error';

let triggers = [];
let parentSetTimeout;
let timeouts = [];
let parentSetInterval;
let intervals = [];
let urlFilter;

// Determine script root
let scripts = document.getElementsByTagName('script');
let scriptSrc = scripts[scripts.length - 1].src;
let scriptPath = scriptSrc.substring(0, scriptSrc.lastIndexOf('/'));

export function init() {
  window._kidjs_ = {
    settings: {
      backgroundColor: null,
      slowMotion: false,
      slowMotionDelay: 1,
      grid: false,
      pixelSize: 1,
      orientation: 'auto'
    },

    scriptPath: scriptPath,

    stats: {
      lastFrame: Date.now(),
      fps: 0
    },

    setGlobals: function() {
      window.beep = beep;
      window.circle = circle;
      window.curve = curve;
      window.display = display;
      window.frequency = frequency;
      window.heptagon = heptagon;
      window.hexagon = hexagon;
      window.image = image;
      window.line = line;
      window.group = group;
      window.note = note;
      window.octagon = octagon;
      window.on = on;
      window.oval = oval;
      window.path = path;
      window.pentagon = pentagon;
      window.pie = pie;
      window.polygon = polygon;
      window.prompt = prompt;
      window.random = random;
      window.record = record;
      window.rect = rect;
      window.rectangle = rect;
      window.semicircle = semicircle;
      window.song = song;
      window.sound = sound;
      window.speak = speak;
      window.square = square;
      window.star = star;
      window.tada = tada;
      window.triangle = triangle;
      window.wait = wait;
      window.write = write;
      window.writeln = writeln;

      // Sockets
      if (window._kidjs_.settings.sockets) {
        window.join = join;
        window.send = send;
      }

      // From other libraries
      for (let i = 0; i < window._kidjs_.hooks.setGlobals.length; i = i + 1) {
        window._kidjs_.hooks.setGlobals[0]();
      }
    },

    onframe: function() {
      window.dispatchEvent(new Event('animationframe'));
      for (let i = 0; i < triggers.length; i++) {
        try {
          if (window._kidjs_.eval(triggers[i].condition)) {
            window._kidjs_.eval(triggers[i].code);
          }
        } catch(ex) {
          // Carry on
        }
      }
    },

    step: async function(line, column, info) {
      this.setGlobals();

      // Allow infinite time for blocking alert and prompt functions
      if (info.callee && ['alert', 'prompt'].includes(info.callee)) {
        window._kidjs_.stats.lastFrame = Date.now();
      }

      // Watch for freeze ups
      let lapsed = Date.now() - window._kidjs_.stats.lastFrame;
      if (!document.hidden && lapsed > 1000) {
        stop();
        throw new KidjsError('Freeze detected');
      }

      window.dispatchEvent(new CustomEvent('KID.step', {
        detail: {
          line: line,
          column: column
        }
      }));
      if (window._kidjs_.settings.slowMotion) {
        await wait(window._kidjs_.settings.slowMotionDelay);
      }
    },

    end: function() {
      window.dispatchEvent(new CustomEvent('KID.end'));
    },

    error: function(e, runtime) {
      let lineNumber = -1;
      let match = e.stack.match(/(\d+):(\d+)/);
      if (match) {
        if (runtime) {
          lineNumber = parseInt(window._kidjs_.sourceMap[match[1]]) + 1;
        } else {
          lineNumber = parseInt(match[1]);
        }
      }
      console.error('Error: ' + e.message + ' at line ' + lineNumber);
      console.error(e.stack);
      new KidjsError(e.message, lineNumber);
    },

    libraries: [],

    import: async function(library) {
      return new Promise(function(resolve, reject) {
        if (
          ['hand-tracker', 'neural-network'].includes(library) && 
          !window._kidjs_.libraries.includes(library)
        ) {
          let scriptEl = document.createElement('script');
          scriptEl.src = scriptPath + '/' + library + '.js';
          scriptEl.onload = resolve;
          document.body.appendChild(scriptEl); 
          window._kidjs_.libraries.push(library);
        } else {
          resolve();
        }
      });   
    },

    hooks: {
      setGlobals: []
    },

    seed: Date.now(),
    sourceMap: []
  };

  // Intercept setTimeout and setInterval
  parentSetTimeout = window.setTimeout;
  window.setTimeout = function(callback, duration) {
    let timeout = parentSetTimeout(() => {
      window._kidjs_.stats.lastFrame = Date.now();
      callback();
    }, duration);
    timeouts.push(timeout);
    return timeout;
  }
  parentSetInterval = window.setInterval;
  window.setInterval = function(callback, duration) {
    let interval = parentSetInterval(() => {
      window._kidjs_.stats.lastFrame = Date.now();
      callback();
    }, duration);
    intervals.push(interval);
    return interval;
  }

  // Initialize sockets
  initSockets();

  // Reset freeze detection when returning from background
  document.addEventListener('visibilitychange', function() {
    window._kidjs_.stats.lastFrame = Date.now();
  });

  window._kidjs_.setGlobals();
}

async function compile(code) {

  // Replace percent units with string literals
  code = replacePercentUnits(code);

  // Insert line markers
  code = insertLineMarkers(code);

  // Parse code into source tree
  let comments = [];
  let ast;
  try {
    ast = acorn.parse(code, {
      locations: true,
      onComment: comments,
      sourceType: 'module'
    });
  } catch(e) {
    window._kidjs_.error(e);
    return '';
  }
  attachComments(ast, comments);

  // Keep track of functions converted to async
  let convertedFunctions = [];

  // Keep track of libraries to import
  let libraries = [];

  // Walk entire source tree
  walk.full(ast, function(node) {

    // Check for required permissions
    checkForRequiredPermissions(node);

    if (node.body) {
      for (let i = node.body.length - 1; i >= 0; i = i - 1) {

        // Import library
        if (node.body[i].type == 'ImportDeclaration') {
          libraries.push(node.body[i].source.value);
          node.body.splice(i, 1);
          continue;
        }

        // Check if call to on() method
        let target = isNodeMethod('on', node.body[i]);
        if (target) {

          // Check if expression passed as handler
          if (['AssignmentExpression', 'CallExpression'].includes(node.body[i].expression.arguments[1].type)) {
            node.body[i].expression.arguments[1] = createInlineFunction(node.body[i].expression.arguments[1]);
          }

          // Check if expression passed as event
          if (node.body[i].expression.arguments[0].type == 'BinaryExpression') {

            // Function name passed as second parameter
            if (node.body[i].expression.arguments[1].type == 'Identifier') {
              triggers.push({
                'condition': astring.generate(node.body[i].expression.arguments[0]),
                'code': node.body[i].expression.arguments[1].name + '();',
                'target': target
              });
            }

            // Inline function passed as second parameter
            if (node.body[i].expression.arguments[1].type == 'FunctionExpression') {
              triggers.push({
                'condition': astring.generate(node.body[i].expression.arguments[0]),
                'code': '(' + astring.generate(node.body[i].expression.arguments[1]) + ')();',
                'target': target
              });
            }
          }
        }

        // Look for calls to display() method with an expression passed
        if (node.body[i].type == 'ExpressionStatement' &&
          typeof node.body[i].expression.callee !== 'undefined' &&
          node.body[i].expression.callee.name == 'display' &&
          node.body[i].expression.arguments.length == 3 &&
          node.body[i].expression.arguments[2].type != 'Literal'
        ) {
          let expression = astring.generate(node.body[i].expression.arguments[2]);
          node.body[i].expression.arguments[2] = {
            type: 'Literal',
            value: expression
          };
          node.body[i].expression.arguments[3] = {
            type: 'Literal',
            value: true
          };
        }

        // Look for calls to display() at right hand side of variable declaration
        if (node.body[i].type == 'VariableDeclaration' &&
          typeof node.body[i].declarations != 'undefined' &&
          node.body[i].declarations.length > 0 &&
          node.body[i].declarations[0].init &&
          typeof node.body[i].declarations[0].init.callee !== 'undefined' &&
          node.body[i].declarations[0].init.callee.name == 'display' &&
          node.body[i].declarations[0].init.arguments.length == 3 &&
          node.body[i].declarations[0].init.arguments[2].type != 'Literal'
        ) {
          console.log(node.body[i]);
          let expression = astring.generate(node.body[i].declarations[0].init.arguments[2]);
          node.body[i].declarations[0].init.arguments[2] = {
            type: 'Literal',
            value: expression
          };
          node.body[i].declarations[0].init.arguments[3] = {
            type: 'Literal',
            value: true
          };
        }

        // Look for calls to display() at right hand side of assignment
        if (node.body[i].type == 'ExpressionStatement' &&
          typeof node.body[i].expression.right  !== 'undefined' &&
          typeof node.body[i].expression.right.callee  !== 'undefined' &&
          node.body[i].expression.right.callee.name == 'display' &&
          node.body[i].expression.right.arguments.length == 3 &&
          node.body[i].expression.right.arguments[2].type != 'Literal'
        ) {
          let expression = astring.generate(node.body[i].expression.right.arguments[2]);
          node.body[i].expression.right.arguments[2] = {
            type: 'Literal',
            value: expression
          };
          node.body[i].expression.right.arguments[3] = {
            type: 'Literal',
            value: true
          };
        }

        // Convert all functions to async
        if (node.body[i].type == 'FunctionDeclaration') {
          if (node.body[i].async == false) {
            node.body[i].async = true;
            if (node.body[i].id && node.body[i].id.name) {
              convertedFunctions.push(node.body[i].id.name);
            }
          }
        }

        // Add await to wait() calls
        if (node.body[i].type == 'ExpressionStatement' &&
          node.body[i].expression.type == 'CallExpression' &&
          node.body[i].expression.callee.type == 'Identifier' &&
          node.body[i].expression.callee.name == 'wait'
        ) {
          node.body[i].expression = {
            type: 'AwaitExpression',
            argument: Object.assign({}, node.body[i].expression)
          };
        }

        // Add await if wait() at the end of a chain
        if (node.body[i].type == 'ExpressionStatement' &&
          node.body[i].expression.type == 'CallExpression' &&
          node.body[i].expression.callee.type == 'MemberExpression' &&
          node.body[i].expression.callee.property.name == 'wait'
        ) {
          node.body[i].expression = {
            type: 'AwaitExpression',
            argument: Object.assign({}, node.body[i].expression)
          };
        }

        // Add await to prompt() calls with return
        if (node.body[i].type == 'VariableDeclaration' &&
          node.body[i].declarations.length > 0 &&
          node.body[i].declarations[0].init &&
          node.body[i].declarations[0].init.type == 'CallExpression' &&
          node.body[i].declarations[0].init.callee.name == 'prompt'
        ) {
          node.body[i].declarations[0].init = {
            type: 'AwaitExpression',
            argument: Object.assign({},  node.body[i].declarations[0].init)
          };
        }        

        // Add await to prompt() calls without return
        if (node.body[i].type == 'ExpressionStatement' &&
          node.body[i].expression.type == 'CallExpression' &&
          node.body[i].expression.callee.name == 'prompt'
        ) {
          node.body[i].expression = {
            type: 'AwaitExpression',
            argument: Object.assign({}, node.body[i].expression)
          };
        }
      }
    }
  });

  // Prepend await to converted functions
  walk.ancestor(ast, {
    CallExpression: function(node, ancestors) {
      if (convertedFunctions.includes(node.callee.name)) {
        let parent = ancestors[ancestors.length - 2];

        if (parent.type == 'CallExpression' && parent.arguments) {
          for (let i = 0; i < parent.arguments.length; i = i + 1) {
            if (parent.arguments[i] == node) {
              parent.arguments[i] = {
                type: 'AwaitExpression',
                argument: Object.assign({}, node)
              };
            }
          }
        }

        if (parent.type == 'ExpressionStatement' && parent.expression == node) {
          parent.expression = {
            type: 'AwaitExpression',
            argument: Object.assign({}, node)
          };
        }

        if (parent.type == 'VariableDeclarator' && parent.init == node) {
          parent.init = {
            type: 'AwaitExpression',
            argument: Object.assign({}, node)
          };
        }

        if (parent.type == 'IfStatement' && parent.test == node) {
          parent.test = {
            type: 'AwaitExpression',
            argument: Object.assign({}, node)
          };
        }
      }
    }
  });

  // Insert step statements
  insertStepStatements(ast);

  // Generate updated source
  let processed = astring.generate(ast, { comments: true });

  // Generate source map
  window._kidjs_.sourceMap = generateSourceMap(processed, 15);

  // Load libraries
  for (let i = 0; i < libraries.length; i = i + 1) {
    await window._kidjs_.import(libraries[i]);
  }

  return `
    (async function() {
      try {
        window._kidjs_.eval = function(key) {
          try {
            return eval(key);
          } catch {
            // Don't die on me
          }
        };
        window._kidjs_.get = function(key) {
          if (eval('typeof ' + key) !== 'undefined') {
            return eval(key);
          }
        };
        ${processed}
      } catch(e) {
        window._kidjs_.error(e, true);
      }
      window._kidjs_.end();
    })();
  `
}

/**
 * Determine if AST node represents a call to on() method.
 *
 * @param {String} name - Method name
 * @param {Object} node - AST node
 * @return {mixed} Object associated with "on" method, or false
 */
function isNodeMethod(name, node) {
  if (node.type == 'ExpressionStatement' && node.expression.callee) {
    if (node.expression.callee.type == 'Identifier' && node.expression.callee.name == name) {
      return window;
    }
    if (node.expression.callee.type == 'MemberExpression' && node.expression.callee.property.name == name) {
      return node.expression.callee.object;
    }
  }
  return false;
}

/**
 * Determine if code would require special permissions (e.g. deviceorientation)
 *
 * @param {String} name - Method name
 * @param {Object} node - AST node
 * @return {mixed} Object associated with "on" method, or false
 */
function checkForRequiredPermissions(node) {
  let restrictedEvents = [
    'deviceorientation',
    'tiltleft',
    'tiltright',
    'tiltup',
    'tiltdown'
  ];

  // Uses tiltX or tiltY variable
  if (node.type == 'Identifier' && ['tiltX', 'tiltY'].includes(node.name)) {
    requirePermission('deviceorientation');
  }

  // Call to "on" or "addEventListener" method
  if (node.type == 'ExpressionStatement' && node.expression.callee && node.expression.arguments) {
    if (node.expression.callee.type == 'Identifier' && ['on', 'addEventListener'].includes(node.expression.callee.name)) {
      if (node.expression.arguments[0].type == 'Literal' && restrictedEvents.includes(node.expression.arguments[0].value.toLowerCase())) {
        requirePermission('deviceorientation');
      }
    }
  }
}

/**
 * Create AST node containing inline function.
 *
 * @param {Object} node - AST node containing code of function
 * @return {Object} AST node containing inline function
 */
function createInlineFunction(node) {
  return {
    type: 'ArrowFunctionExpression',
    body: {
      type: 'BlockStatement',
      body: [{
        type: 'ExpressionStatement',
        expression: node
      }]
    },
    params: []
  }
}

/**
 * Create AST node to call step() method.
 *
 * @param {Object} location - Location in code
 * @return {Object} AST node containing call to step() method
 */
function createStepStatement(location, info) {
  return {
    type: 'ExpressionStatement',
    expression: {
      type: 'AwaitExpression',
      argument: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          object: {
            type: 'Identifier',
            name: 'window._kidjs_'
          },
          property: {
            type: 'Identifier',
            name: 'step'
          }
        },
        arguments: [{
          type: 'Literal',
          value: location.start.line
        }, {
          type: 'Literal',
          value: location.start.column
        }, {
          type: 'Literal',
          value: info
        }]
      }
    }
  };
}

/**
 * Insert step statements.
 *
 * @param {Object} ast - Expression tree
 */
function insertStepStatements(ast) {
  if (ast.body) {
    for (let i = ast.body.length - 1; i >= 0; i = i - 1) {

      // Insert step statement after
      if (['ExpressionStatement', 'VariableDeclaration'].includes(ast.body[i].type)) {
        let info = {};
        if (ast.body[i].type == 'ExpressionStatement' && ast.body[i].expression.callee) {
          info.callee = ast.body[i].expression.callee.name;
        }
        ast.body.splice(i + 1, 0, createStepStatement(ast.body[i].loc, info));
      }

      // Recursively insert step statements inside blocks
      if (['ForStatement', 'WhileStatement', 'DoWhileStatement', 'FunctionDeclaration'].includes(ast.body[i].type)) {
        if (typeof ast.body[i].body != undefined) {
          insertStepStatements(ast.body[i].body);
        }
      }

      // Recursively insert step statements into if blocks
      if (ast.body[i].type == 'IfStatement') {
        if (ast.body[i].consequent) {
          insertStepStatements(ast.body[i].consequent);
        }
        if (ast.body[i].alternate) {
          insertStepStatements(ast.body[i].alternate);
        }
      }
    }
  }
}

/**
 * Insert line markers as comments.
 *
 * @param {String} code - Source code
 * @return {String} Source code containling line markers
 */
function insertLineMarkers(code) {
  let lines = code.split(/\r?\n/);
  for (let i = 0; i < lines.length; i = i + 1) {
    lines[i] = lines[i] + '//__kidjs__beginline__' + i + '__endline__';
  }
  return lines.join('\n');
}

/**
 * Generate source map.
 *
 * @param {String} code - Source code with markers
 * @return {Array} Source map
 */
function generateSourceMap(code, offset) {
  let map = [];
  let lines = code.split(/\r?\n/);
  let lineNumber = 0;
  for (let i = 0; i < lines.length; i = i + 1) {
    let test = /__kidjs__beginline__(\d+)__endline__/.exec(lines[i]);
    if (test) {
      lineNumber = test[1];
    }
    map[i + offset] = lineNumber;
  }
  return map;
}

export function reset() {
  log('Reset');
  window.dispatchEvent(new CustomEvent('KID.reset'));

  // Reset event listeners
  triggers = [];
  removeAllEventListeners();

  // Reset timeouts
  for (let i = 0; i < timeouts.length; i = i + 1) {
    clearTimeout(timeouts[i]);
  }
  timeouts = [];
  for (let i = 0; i < intervals.length; i = i + 1) {
    clearInterval(intervals[i]);
  }
  intervals = [];

  // Reset default style
  if (window._kidjs_.defaultStyle) {
    window._kidjs_.defaultStyle.reset();
  }

  // Close prompts
  closeAllPrompts();

  window.stage.reset();
}

export async function run(code) {
  log('Running');
  reset();
  window.stage.run();
  log('Compilation started');
  let processed = await compile(code);
  log('Compilation complete');
  await getPermissions();
  window._kidjs_.setGlobals();
  eval(processed);
}

export function stop() {
  log('Stop');
  window.stage.stop();
  reset();
}

export async function wait(seconds) {
  await new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}

/**
 * Modify path to image or sound asset.
 *
 * @param {string} url - Path to asset
 * @return {string} Modified path to asset
 */
export function assetUrlFilter(url) {
  if (typeof urlFilter == 'function') {
    url = urlFilter(url);
  }
  return url;
}

/**
 * Set function to modify path to image or sound asset.
 *
 * @param {function} callback - Function to modify path
 */
export function setAssetUrlFilter(callback) {
  urlFilter = callback;
}
