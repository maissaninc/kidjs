/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/brain.js/dist/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/brain.js/dist/browser.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/***/ }),

/***/ "./src/libraries/neural-network.js":
/*!*****************************************!*\
  !*** ./src/libraries/neural-network.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NeuralNetwork: () => (/* binding */ NeuralNetwork),\n/* harmony export */   neuralNetwork: () => (/* binding */ neuralNetwork)\n/* harmony export */ });\n/* harmony import */ var brain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brain.js */ \"./node_modules/brain.js/dist/browser.js\");\n/* harmony import */ var brain_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brain_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass NeuralNetwork {\n\n  /**\n   * Create a new neural network.\n   *\n   * @constructor\n   */\n  constructor() {\n    this.nn = new brain_js__WEBPACK_IMPORTED_MODULE_0__.NeuralNetwork();\n    this._trainingData = [];\n    this._needsTraining = true;\n    this._inputMinimums = [];\n    this._inputMaximums = [];\n    this._outputMinimums = [];\n    this._outputMaximums = [];\n    this._inputSize = [];\n    this._outputSize = [];\n  }\n\n  _parseInput(input) {\n    if (typeof input == 'number') {\n      input = [input];\n    }\n    return input;\n  }\n\n  _parseOutput(output) { \n    if (typeof output == 'number') {\n      output = [output];\n    }\n    return output;\n  }\n\n  _parseResult(result) {\n    if (typeof result == 'number') {\n      return result;\n    }\n    if (result.length && result.length == 1 && typeof result[0] == 'number') {\n      return result[0];\n    }\n  }\n\n  _normalizeInput(input) {\n    let result = [];\n    for (let i in input) {\n      result[i] = (input[i] - this._inputMinimums[i]) / this._inputSize[i];\n    }\n    return result;\n  }\n\n  _normalizeOutput(output) {\n    let result = [];\n    for (let i in output) {\n      result[i] = (output[i] - this._outputMinimums[i]) / this._outputSize[i];\n    }\n    return result;\n  }\n\n  _normalizeData(data) {\n\n    // Update minimum and maximums\n    for (let i = 0; i < data.length; i = i + 1) {\n\n      // Inputs\n      for (let j in data[i].input) {\n        if (typeof this._inputMinimums[j] == 'undefined' || typeof this._inputMaximums[j] == 'undefined') {\n          this._inputMinimums[j] = 0;\n          this._inputMaximums[j] = 1;\n        }\n        if (data[i].input[j] < this._inputMinimums[j]) {\n          this._inputMinimums[j] = data[i].input[j];\n        }\n        if (data[i].input[j] > this._inputMaximums[j]) {\n          this._inputMaximums[j] = data[i].input[j];\n        }\n      }\n\n      // Outputs\n      for (let j in data[i].output) {\n        if (typeof this._outputMinimums[j] == 'undefined' || typeof this._outputMaximums[j] == 'undefined') {\n          this._outputMinimums[j] = 0;\n          this._outputMaximums[j] = 1;\n        }\n        if (data[i].output[j] < this._outputMinimums[j]) {\n          this._outputMinimums[j] = data[i].output[j];\n        }\n        if (data[i].output[j] > this._outputMaximums[j]) {\n          this._outputMaximums[j] = data[i].output[j];\n        }\n      }\n    }\n\n    // Calculate size of each range\n    for (let i in this._inputMinimums) {\n      this._inputSize[i] = this._inputMaximums[i] - this._inputMinimums[i];\n    }\n    for (let i in this._outputMinimums) {\n      this._outputSize[i] = this._outputMaximums[i] - this._outputMinimums[i];\n    }\n\n    // Normalize all inputs and outputs to be between 0-1\n    let result = [];\n    for (let i = 0; i < data.length; i = i + 1) {\n      result.push({\n        input: this._normalizeInput(data[i].input),\n        output: this._normalizeOutput(data[i].output)\n      });\n    }\n    return result;\n  }\n\n  /**\n   * Train network with inputs and expected output.\n   * \n   * @param {*} input\n   * @param {*} output\n   */\n  train(input, output) {\n\n    this._needsTraining = true;\n\n    // Array of objects passed\n    if (Array.isArray(input) && input[0]['input'] && input[0]['output']) {\n      this._trainingData = [...this._trainingData, ...input];\n      return;\n    }\n\n    // Single input and output values passed\n    if (typeof input !== undefined && typeof output !== undefined) {\n      let data = {\n        input: this._parseInput(input),\n        output: this._parseOutput(output)\n      };\n      this._trainingData.push(data);\n    }\n  }\n\n  /**\n   * Run inputs through network.\n   * \n   * @param {*} input\n   */\n  run(input) {\n\n    // If not training data, return random value\n    if (this._trainingData.length == 0) {\n      return Math.random();\n    }\n\n    // Train network\n    if (this._needsTraining && this._trainingData.length > 0) {\n      let data = this._normalizeData(this._trainingData);\n      this.nn.train(data);\n      this._needsTraining = false;\n    }\n\n    // Run input through network\n    input = this._normalizeInput(this._parseInput(input));\n    let result = this.nn.run(input);\n\n    // \"Reverse\" normalized output\n    for (let i in result) {\n      result[i] = result[i] * this._outputSize[i] + this._outputMinimums[i];\n    }\n\n    return this._parseResult(result);\n  }\n}\n\nfunction neuralNetwork() {\n  return new NeuralNetwork();\n}\n\nwindow._kidjs_.hooks.setGlobals.push(function() {\n  window.neuralNetwork = neuralNetwork;\n});\n\n//# sourceURL=webpack://@maissaninc/kidjs/./src/libraries/neural-network.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/libraries/neural-network.js");
/******/ 	
/******/ })()
;