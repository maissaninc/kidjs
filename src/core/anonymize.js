import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import seedrandom from 'seedrandom';

/**
 * Anonymize the given code.
 *
 * @param {String} code - Code to anonymize
 * @return {String} Anonymized code
 */
export default function anonymize(code) {

  // Strings to replace
  let strings = [];

  // Parse code into AST
  let comments = [];
  let ast;
  try {
    ast = acorn.parse(code, {
      locations: true,
      onComment: comments,
      sourceType: 'module',
      ecmaVersion: 2020
    });
  } catch(e) {
    return '';
  }

  // Walk entire source tree
  walk.full(ast, function(node) {

    // If string literal, add to strings array
    if (node.type == 'Literal' && typeof node.value == 'string') {
      strings.push(node);
    }
  });

  // Replace string literals with seeded random strings of the same length
  for (let i = strings.length - 1; i >= 0; i = i - 1) {
    let node = strings[i];
    let quote = code[node.start];
    let innerLength = node.end - node.start - 2;
    let replacement = quote + randomizeString(node.value, innerLength) + quote;
    code = code.slice(0, node.start) + replacement + code.slice(node.end);
  }

  // Replace comments with empty strings, keeping newlines so line numbers stay the same
  for (let i = comments.length - 1; i >= 0; i = i - 1) {
    let text = code.slice(comments[i].start, comments[i].end);
    let replacement = text.replace(/[^\n]/g, '');
    code = code.slice(0, comments[i].start) + replacement + code.slice(comments[i].end);
  }

  return code;
}

/**
 * Build a random alphanumeric string of the given length, seeded by value.
 *
 * @param {String} value - Original string used as the RNG seed
 * @param {Number} length - Number of characters to generate
 * @return {String} Seeded random string
 */
function randomizeString(value, length) {
  let rng = seedrandom(value);
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i = i + 1) {
    result += alphabet.charAt(Math.floor(rng() * alphabet.length));
  }
  return result;
}