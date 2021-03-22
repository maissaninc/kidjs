import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import * as astring from 'astring';
import { removeAllEventListeners } from './events';

async function compile(code) {

  // Parse code into source tree
  let ast = acorn.parse(code, {
    locations: true
  });

  // Walk entire source tree
  walk.full(ast, function(node) {
    if (node.body) {
      for (let i = node.body.length - 1; i >= 0; i = i - 1) {

        // Intercept calls to "on" method
        if (node.body[i].type == 'ExpressionStatement' &&
          typeof node.body[i].expression.callee !== 'undefined' &&
          node.body[i].expression.callee.name == 'on' &&
          node.body[i].expression.arguments.length > 1 &&
          node.body[i].expression.arguments[0].type == 'BinaryExpression') {

          // Set up trigger
          if (node.body[i].expression.arguments[1].type == 'Identifier') {
            window._triggers.push({
              'condition': astring.generate(node.body[i].expression.arguments[0]),
              'function': node.body[i].expression.arguments[1].name
            });
          }
          if (node.body[i].expression.arguments[1].type == 'FunctionExpression') {
            window._triggers.push({
              'condition': astring.generate(node.body[i].expression.arguments[0]),
              'inline': astring.generate(node.body[i].expression.arguments[1])
            });
          }
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

  let processed = astring.generate(ast);
  return `
    (async function() {
      ${processed}
      window._onframe = function() {
        for (let i = 0; i < window._triggers.length; i++) {
          if (eval(window._triggers[i].condition)) {
            if (typeof window._triggers[i].function !== 'undefined') {
              eval(window._triggers[i].function + '();');
            }
            if (typeof window._triggers[i].inline !== 'undefined') {
              eval('(' + window._triggers[i].inline + ')();');
            }
          }
        }
      };
    })();
  `
}

export function reset() {
  window._triggers = [];
  removeAllEventListeners();
}

export async function run(code) {
  reset();
  let processed = await compile(code);
  eval(processed);
}

export async function wait(seconds) {
  await new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}
