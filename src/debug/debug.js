import { Node } from 'acorn';

function Debug() {
  window.KID.debug = this;
  window.KID.step = this.step.bind(this);
  window.KID.sleep = this.sleep.bind(this);
  window.KID.end = this.end.bind(this);
}

Debug.prototype = {

  constructor: Debug,

  step: async function(line, column) {
    window.dispatchEvent(new CustomEvent('KID.step', {
      detail: {
        line: line,
        column: column
      }
    }));
    if (KID.settings.slowMotion) {
      await this.sleep(1000);
    }
  },

  sleep: function(ms) {
    return new Promise(function(resolve) {
      setTimeout(resolve, ms)
    });
  },

  end: function() {
    window.dispatchEvent(new Event('KID.complete'));
  },

  _createStepStatement: function(location) {
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
              name: 'KID'
            },
            property: {
              type: 'Identifier',
              name: 'step'
            }
          },
          arguments: [
            {
              type: 'Literal',
              value: location.start.line,
              raw: JSON.stringify(location.start.line)
            },
            {
              type: 'Literal',
              value: location.start.column,
              raw: JSON.stringify(location.start.column)
            }
          ]
        }
      }
    };
  },

  _createEndStatement: function() {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          object: {
            type: 'Identifier',
            name: 'KID'
          },
          property: {
            type: 'Identifier',
            name: 'end'
          }
        }
      }
    };
  }
};

export { Debug }
