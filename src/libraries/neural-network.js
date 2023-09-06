import * as Brain from 'brain.js';

export class NeuralNetwork {

  /**
   * Create a new neural network.
   *
   * @constructor
   */
  constructor() {
    this.nn = new Brain.NeuralNetwork();
  }

  _parseInput(input) {
    if (typeof input == 'string') {
      return input.split(' ');
    }
    if (Array.isArray(input)) {
      return input;
    }
    return [input];
  }

  _parseOutput(output) {
    if (Array.isArray(output)) {
      return output;
    }
    return [output];
  }

  /**
   * Run inputs through network.
   * 
   * @param {*} input
   */
  run(input) {
    let result = this.nn.run(this._parseInput(input));
    return result;
  }

  /**
   * Train network with inputs and expected output.
   * 
   * @param {*} input
   * @param {*} output
   */
  train(input, output) {
    this.nn.train([{
      input: this._parseInput(input),
      output: this._parseOutput(output)
    }]);
  }
}

export function neuralNetwork() {
  return new NeuralNetwork();
}

window._kidjs_.hooks.setGlobals.push(function() {
  window.neuralNetwork = neuralNetwork;
});