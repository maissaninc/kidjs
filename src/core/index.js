import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import * as astring from 'astring';
import { removeAllEventListeners } from '../events';

async function compile(code) {

  // Parse code into source tree
  let ast = acorn.parse(code, {
    locations: true
  });

  // Walk entire source tree
  walk.full(ast, function(node) {
    if (node.body) {
      for (let i = node.body.length - 1; i >= 0; i = i - 1) {

        //console.log(node.body[i]);

        // Intercept calls to "on" method
        if (node.body[i].type == 'ExpressionStatement' &&
          typeof node.body[i].expression.callee !== 'undefined' &&
          node.body[i].expression.callee.name == 'on' &&
          node.body[i].expression.arguments.length > 1 &&
          node.body[i].expression.arguments[0].type == 'BinaryExpression'
        ) {

          // Set up trigger
          if (node.body[i].expression.arguments[1].type == 'Identifier') {
            window._kidjs_.triggers.push({
              'condition': astring.generate(node.body[i].expression.arguments[0]),
              'function': node.body[i].expression.arguments[1].name
            });
          }
          if (node.body[i].expression.arguments[1].type == 'FunctionExpression') {
            window._kidjs_.triggers.push({
              'condition': astring.generate(node.body[i].expression.arguments[0]),
              'inline': astring.generate(node.body[i].expression.arguments[1])
            });
          }
        }

        // Convert calls to display method with expression to "live"
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

  let processed = astring.generate(ast);
  console.log(processed);
  return `
    (async function() {

      window._kidjs_.eval = function(key) {
        return eval(key);
      };

      window._kidjs_.onframe = function() {
        for (let i = 0; i < window._kidjs_.triggers.length; i++) {
          if (eval(window._kidjs_.triggers[i].condition)) {
            if (typeof window._kidjs_.triggers[i].function !== 'undefined') {
              eval(window._kidjs_.triggers[i].function + '();');
            }
            if (typeof window._kidjs_.triggers[i].inline !== 'undefined') {
              eval('(' + window._kidjs_.triggers[i].inline + ')();');
            }
          }
        }
      };

      ${processed}

    })();
  `
}

export function reset() {
  window._kidjs_.triggers = [];
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
