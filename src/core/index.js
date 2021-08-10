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
import { rect } from '../shape/rect';
import { triangle, square, pentagon, hexagon, heptagon, octagon } from '../shape/regular';
import { semicircle } from '../shape/semicircle';
import { image } from '../sprite';
import { star } from '../shape/star';
import { display, write } from '../text';
import { random } from './math';

let triggers = [];
let timeouts = [];
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
      window.random = random;
      window.rect = rect;
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
    console.log(intervals);
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

        // Look for calls to on() method with an expression passed
        if (node.body[i].type == 'ExpressionStatement' &&
          typeof node.body[i].expression.callee !== 'undefined' &&
          node.body[i].expression.callee.name == 'on' &&
          node.body[i].expression.arguments.length > 1 &&
          node.body[i].expression.arguments[0].type == 'BinaryExpression'
        ) {

          // Function name passed as second parameter
          if (node.body[i].expression.arguments[1].type == 'Identifier') {
            triggers.push({
              'condition': astring.generate(node.body[i].expression.arguments[0]),
              'code': node.body[i].expression.arguments[1].name + '();'
            });
          }

          // Inline function passed as second parameter
          if (node.body[i].expression.arguments[1].type == 'FunctionExpression') {
            triggers.push({
              'condition': astring.generate(node.body[i].expression.arguments[0]),
              'code': '(' + astring.generate(node.body[i].expression.arguments[1]) + ')();'
            });
          }
        }

        // Look for calls to on() method of object
        if (node.body[i].type == 'ExpressionStatement' &&
          typeof node.body[i].expression.callee !== 'undefined' &&
          typeof node.body[i].expression.callee.property !== 'undefined' &&
          node.body[i].expression.callee.property.name == 'on' &&
          node.body[i].expression.arguments.length > 1 &&
          node.body[i].expression.arguments[1].type == 'Identifier'
        ) {
          node.body[i].expression.arguments[1].type = 'Literal';
          node.body[i].expression.arguments[1].value = node.body[i].expression.arguments[1].name;
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
    let processed = await compile(code);
    reset();
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
