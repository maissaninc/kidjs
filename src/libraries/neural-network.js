import * as Brain from 'brain.js';

export class NeuralNetwork {

  /**
   * Create a new neural network.
   *
   * @constructor
   */
  constructor() {
    this.nn = new Brain.NeuralNetwork();
    this._trainingData = [];
    this._needsTraining = true;
    this._inputRanges = [];
    this._outputRanges = [];
  }

  _parseInput(input) {

    // Single number
    if (typeof input == 'number') {
      input = [input];
    }

    return input;
  }

  _parseOutput(output) { 
    return output;
  }

  _normalizeData(data) {
    let result = [];
    let minimums = [];
    let maximums = [];

    // Determine minimum and maximum values for each input
    for (let i = 0; i < data.length; i = i + 1) {
      for (let j in data[i].input) {
        if (!minimums[j] || !maximums[j]) {
          minimums[j] = 0;
          maximums[j] = 1;
        }
        if (data[i].input[j] < minimums[j]) {
          minimums[j] = data[i].input[j];
        }
        if (data[i].input[j] > maximums[j]) {
          maximums[j] = data[i].input[j];
        }
      }
    }

    // Calculate size of each range
    let size = [];
    for (let i in minimums) {
      size[i] = maximums[i] - minimums[i];
    }

    // Normalize all inputs to be between 0-1
    for (let i = 0; i < data.length; i = i + 1) {
      let normalized = {
        input: [],
        output: data[i].output
      };
      for (let j in data[i].input) {
        normalized.input[j] = (data[i].input[j] + minimums[j]) / size[j];
      }
      result.push(normalized);
    }

    return result;
  }

  /**
   * Run inputs through network.
   * 
   * @param {*} input
   */
  run(input) {
    if (this._needsTraining) {
      let data = this._normalizeData(this._trainingData);
      console.log(data);
      this.nn.train(data);
      this._needsTraining = false;
    }
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
    let data = {
      input: this._parseInput(input),
      output: this._parseOutput(output)
    };
    this._trainingData.push(data);
  }
}

export function neuralNetwork() {
  return new NeuralNetwork();
}

window._kidjs_.hooks.setGlobals.push(function() {
  window.neuralNetwork = neuralNetwork;
});