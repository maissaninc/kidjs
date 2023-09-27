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
    console.log(typeof result);
    console.log(result.length);
    if (typeof result == 'number') {
      return result;
    }
    if (result.length && result.length == 1 && typeof result[0] == 'number') {
      return result[0];
    }
    return result;
  }

  _normalizeData(data) {
    
    let result = [];
    let inputMinimums = [];
    let inputMaximums = [];
    let outputMinimums = [];
    let outputMaximums = [];

    // Determine minimum and maximum values for each input and oupt
    for (let i = 0; i < data.length; i = i + 1) {

      // Inputs
      for (let j in data[i].input) {
        if (!inputMinimums[j] || !inputMaximums[j]) {
          inputMinimums[j] = 0;
          inputMaximums[j] = 1;
        }
        if (data[i].input[j] < inputMinimums[j]) {
          inputMinimums[j] = data[i].input[j];
        }
        if (data[i].input[j] > inputMaximums[j]) {
          inputMaximums[j] = data[i].input[j];
        }
      }

      // Outputs
      for (let j in data[i].output) {
        if (!outputMinimums[j] || !outputMaximums[j]) {
          outputMinimums[j] = 0;
          outputMaximums[j] = 1;
        }
        if (data[i].input[j] < outputMinimums[j]) {
          outputMinimums[j] = data[i].output[j];
        }
        if (data[i].input[j] > outputMaximums[j]) {
          outputMaximums[j] = data[i].output[j];
        }
      }
    }

    // Calculate size of each range
    let inputSize = [];
    let outputSize = [];
    for (let i in inputMinimums) {
      inputSize[i] = inputMaximums[i] - inputMinimums[i];
    }
    for (let i in outputMinimums) {
      outputSize[i] = outputMaximums[i] - outputMinimums[i];
    }

    // Normalize all inputs and outputs to be between 0-1
    for (let i = 0; i < data.length; i = i + 1) {
      let normalized = {
        input: [],
        output: []
      };
      for (let j in data[i].input) {
        normalized.input[j] = (data[i].input[j] + inputMinimums[j]) / inputSize[j];
      }
      for (let j in data[i].output) {
        normalized.output[j] = (data[i].output[j] + outputMinimums[j]) / outputSize[j];
      }
      result.push(normalized);
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
  }

  /**
   * Run inputs through network.
   * 
   * @param {*} input
   */
    run(input) {

      // If not training data, return random value
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
      let result = this.nn.run(this._parseInput(input));
      return this._parseResult(result);
    }
}

export function neuralNetwork() {
  return new NeuralNetwork();
}

window._kidjs_.hooks.setGlobals.push(function() {
  window.neuralNetwork = neuralNetwork;
});