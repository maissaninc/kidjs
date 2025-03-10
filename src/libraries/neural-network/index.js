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
    this._inputMinimums = [];
    this._inputMaximums = [];
    this._outputMinimums = [];
    this._outputMaximums = [];
    this._inputSize = [];
    this._outputSize = [];
  }

  _parseInput(input) {
    if (typeof input == 'number') {
      input = [input];
    }
    return input;
  }

  _parseOutput(output) { 
    if (typeof output == 'number') {
      output = [output];
    }
    return output;
  }

  _parseResult(result) {
    if (typeof result == 'number') {
      return result;
    }
    if (result.length && result.length == 1 && typeof result[0] == 'number') {
      return result[0];
    }
  }

  _normalizeInput(input) {
    let result = [];
    for (let i in input) {
      result[i] = (input[i] - this._inputMinimums[i]) / this._inputSize[i];
    }
    return result;
  }

  _normalizeOutput(output) {
    let result = [];
    for (let i in output) {
      result[i] = (output[i] - this._outputMinimums[i]) / this._outputSize[i];
    }
    return result;
  }

  _normalizeData(data) {

    // Update minimum and maximums
    for (let i = 0; i < data.length; i = i + 1) {

      // Inputs
      for (let j in data[i].input) {
        if (typeof this._inputMinimums[j] == 'undefined' || typeof this._inputMaximums[j] == 'undefined') {
          this._inputMinimums[j] = 0;
          this._inputMaximums[j] = 1;
        }
        if (data[i].input[j] < this._inputMinimums[j]) {
          this._inputMinimums[j] = data[i].input[j];
        }
        if (data[i].input[j] > this._inputMaximums[j]) {
          this._inputMaximums[j] = data[i].input[j];
        }
      }

      // Outputs
      for (let j in data[i].output) {
        if (typeof this._outputMinimums[j] == 'undefined' || typeof this._outputMaximums[j] == 'undefined') {
          this._outputMinimums[j] = 0;
          this._outputMaximums[j] = 1;
        }
        if (data[i].output[j] < this._outputMinimums[j]) {
          this._outputMinimums[j] = data[i].output[j];
        }
        if (data[i].output[j] > this._outputMaximums[j]) {
          this._outputMaximums[j] = data[i].output[j];
        }
      }
    }

    // Calculate size of each range
    for (let i in this._inputMinimums) {
      this._inputSize[i] = this._inputMaximums[i] - this._inputMinimums[i];
    }
    for (let i in this._outputMinimums) {
      this._outputSize[i] = this._outputMaximums[i] - this._outputMinimums[i];
    }

    // Normalize all inputs and outputs to be between 0-1
    let result = [];
    for (let i = 0; i < data.length; i = i + 1) {
      result.push({
        input: this._normalizeInput(data[i].input),
        output: this._normalizeOutput(data[i].output)
      });
    }
    return result;
  }

  /**
   * Train network with inputs and expected output.
   * 
   * @param {*} input
   * @param {*} output
   */
  train(input, output) {

    this._needsTraining = true;

    // Array of objects passed
    if (Array.isArray(input) && input[0]['input'] && input[0]['output']) {
      this._trainingData = [...this._trainingData, ...input];
      return;
    }

    // Single input and output values passed
    if (typeof input !== undefined && typeof output !== undefined) {
      let data = {
        input: this._parseInput(input),
        output: this._parseOutput(output)
      };
      this._trainingData.push(data);
    }

    // Hooks for visualization
    if (typeof window._kidjs_.nnVisualizeEnabled === 'function') {

      // If visualization is enabled, train network as we go
      if (window._kidjs_.nnVisualizeEnabled()) {
        let data = this._normalizeData(this._trainingData);
        this.nn.train(data);
        this._needsTraining = false;
      }
    }
    if (typeof window._kidjs_.nnVisualizeData === 'function') {
      window._kidjs_.nnVisualizeData(this, input, output, 'train');
    }

  }

  /**
   * Run inputs through network.
   * 
   * @param {*} input
   */
  run(input) {

    // If no training data, return random value
    if (this._trainingData.length == 0) {
      return Math.random();
    }

    // Train network
    if (this._needsTraining && this._trainingData.length > 0) {
      let data = this._normalizeData(this._trainingData);
      this.nn.train(data);
      this._needsTraining = false;
    }

    // Run input through network
    let normalizedInput = this._normalizeInput(this._parseInput(input));
    let result = this.nn.run(normalizedInput);

    // "Reverse" normalized output
    for (let i in result) {
      result[i] = result[i] * this._outputSize[i] + this._outputMinimums[i];
    }
    let output = this._parseResult(result);

    // Hook for visualization
    if (typeof window._kidjs_.nnVisualizeData === 'function') {
      window._kidjs_.nnVisualizeData(this, input, output, 'run');
    }

    return output;
  }
}

export function neuralNetwork() {
  return new NeuralNetwork();
}

window._kidjs_.hooks.setGlobals.push(function() {
  window.neuralNetwork = neuralNetwork;
});