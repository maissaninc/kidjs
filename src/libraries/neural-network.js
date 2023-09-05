import Brain from 'brain.js';

export default class NeuralNetwork {

  /**
   * Create a new neural network.
   *
   * @constructor
   */
  constructor() {
    this.nn = new Brain.NeuralNetwork();
  }
}

export function neuralNetwork() {
  return new NeuralNetwork();
}