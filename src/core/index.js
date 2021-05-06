import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import * as astring from 'astring';
import { removeAllEventListeners } from '../events';

let triggers = [];

export function init() {
  window._kidjs_ = {
    settings: {
      slowMotion: false,
    },

    onframe: function() {
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
  console.log(processed);
  return `
    (async function() {
      window._kidjs_.eval = function(key) {
        return eval(key);
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
  triggers = [];
  removeAllEventListeners();
  window.stage.clear();
}

export async function run(code) {
  try {
    let processed = await compile(code);
    reset();
    eval(processed);
  } catch(exception) {
    console.log(exception);
  }
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

function end() {
  window.dispatchEvent(new Event('KID.complete'));
}
