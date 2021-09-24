import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import * as astring from 'astring';

import { on, removeAllEventListeners } from '../events';
import { beep, frequency, note, song } from '../audio';
import { sound } from '../audio/sound';
import { speak } from '../audio/speech';
import { circle } from '../shape/circle';
import { curve } from '../shape/curve';
import { line } from '../shape/line';
import { oval } from '../shape/oval';
import { polygon } from '../shape/polygon';
import { rect, square } from '../shape/rect';
import { triangle, pentagon, hexagon, heptagon, octagon } from '../shape/regular';
import { semicircle } from '../shape/semicircle';
import { image } from '../sprite';
import { star } from '../shape/star';
import { display, write } from '../text';
import { random } from './math';

let triggers = [];
let parentSetTimeout;
let timeouts = [];
let parentSetInterval;
let intervals = [];
let urlFilter;

export function init() {
  window._kidjs_ = {
    settings: {
      slowMotion: false,
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
      window.note = note;
      window.octagon = octagon;
      window.on = on;
      window.oval = oval;
      window.pentagon = pentagon;
      window.polygon = polygon;
      window.random = random;
      window.rect = rect;
      window.rectangle = rect;
      window.semicircle = semicircle;
      window.song = song;
      window.sound = sound;
      window.speak = speak;
      window.square = square;
      window.star = star;
      window.triangle = triangle;
      window.wait = wait;
      window.write = write;
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

    step: async function(line, column) {
      this.setGlobals();
      window.dispatchEvent(new CustomEvent('KID.step', {
        detail: {
          line: line,
          column: column
        }
      }));
      if (window._kidjs_.settings.slowMotion) {
        await wait(1);
      }
    },

    end: function() {
      window.dispatchEvent(new CustomEvent('KID.end'));
    }
  };

  // Intercept setTimeout and setInterval
  parentSetTimeout = window.setTimeout;
  window.setTimeout = function(callback, duration) {
    let timeout = parentSetTimeout(callback, duration);
    timeouts.push(timeout);
    return timeout;
  }
  parentSetInterval = window.setInterval;
  window.setInterval = function(callback, duration) {
    let interval = parentSetInterval(callback, duration);
    intervals.push(interval);
    return interval;
  }

  window._kidjs_.setGlobals();
}

async function compile(code) {

  // Parse code into source tree
  let ast = acorn.parse(code, {
    locations: true
  });

  // Walk entire source tree
  walk.full(ast, function(node) {
    if (node.body) {
      for (let i = node.body.length - 1; i >= 0; i = i - 1) {

        console.log(astring.generate(node.body[i]));
        console.log(node.body[i]);

        // Check if call to on() method
        let target =  isNodeMethod('on', node.body[i]);
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

        // Convert all functions to async
        if (node.body[i].type == 'FunctionDeclaration') {
          node.body[i].async = true;
        }

        // Add await to wait() calls
        if (node.body[i].type == 'ExpressionStatement' &&
          node.body[i].expression.type == 'CallExpression' &&
          node.body[i].expression.callee.name == 'wait'
        ) {
          node.body[i].expression = {
            type: 'AwaitExpression',
            argument: Object.assign({}, node.body[i].expression)
          };
        }
      }
    }
  });

  // Insert step statements
  for (let i = ast.body.length - 1; i >= 0; i = i - 1) {
    if (['ExpressionStatement', 'VariableDeclaration'].includes(ast.body[i].type)) {
      ast.body.splice(i + 1, 0, createStepStatement(ast.body[i].loc));
    }
  }

  let processed = astring.generate(ast);
  return `
    (async function() {
      window._kidjs_.eval = function(key) {
        return eval(key);
      };
      window._kidjs_.get = function(key) {
        if (eval('typeof ' + key) !== 'undefined') {
          return eval(key);
        }
      };
      ${processed}
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
  console.log(node);
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
 * Create AST node containing inline function.
 *
 * @param {Object} node - AST node containing code of function
 * @return {Object} AST node containing inline function
 */
function createInlineFunction(node) {
  return {
    type: 'FunctionExpression',
    body: {
      type: 'BlockStatement',
      body: [{
        type: 'ExpressionStatement',
        expression: node
      }]
    }
  }
}

/**
 * Create AST node to call step() method.
 *
 * @param {Object} location - Location in code
 * @return {Object} AST node containing call to step() method
 */
function createStepStatement(location) {
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
        }]
      }
    }
  };
}

export function reset() {

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

  window.stage.reset();
}

export async function run(code) {
  try {
    window.stage.run();
    reset();
    let processed = await compile(code);
    eval(processed);
  } catch(exception) {
    console.log(exception);
  }
}

export function stop() {
  window.stage.stop();
  reset();
}

export async function wait(seconds) {
  await new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}

async function step(location) {
  window.dispatchEvent(new CustomEvent('KID.step', {
    detail: {
      line: line,
      column: column
    }
  }));
  if (window._kidjs_.settings.slowMotion) {
    await wait(1);
  }
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
