import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import * as astring from 'astring';
import { removeAllEventListeners } from './events';

async function preprocess(code) {

  // Parse code into source tree
  let ast = acorn.parse('(async function() {' + code + '})()', {
    locations: true
  });

  // Walk entire source tree
  walk.full(ast.body[0], function(node) {
    if (node.body) {
      for (let i = node.body.length - 1; i >= 0; i = i - 1) {

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

  return astring.generate(ast);
}

export function reset() {
  removeAllEventListeners();
}

export async function run(code) {
  reset();
  let processed = await preprocess(code);
  eval(processed);
}

export async function wait(seconds) {
  await new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}
