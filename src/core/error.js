import { anonymize } from './anonymize';
export class KidjsError extends Error {

  constructor(message, type = 'KidjsError', runtime = true, line = 0, column = 0) {
    super(message);
    this.name = 'Kidjs';

    // Anonymize code
    let code = window._kidjs_.code;
    let dictionary = {};
    if (window._kidjs_.settings.includeAnonymizedCodeInErrors) {
      code = anonymize(code, dictionary);
    }
        
    window.dispatchEvent(new CustomEvent('KID.error', {
      detail: {
        message: message,
        type: type,
        runtime: runtime,
        line: line,
        column: column,
        code: code,
        dictionary: dictionary
      }
    }));
  }
}

/**
 * Call an event handler and report both thrown errors and rejected
 * promises. Named Kid.js functions are compiled as async, so errors
 * inside them become promise rejections instead of throws.
 *
 * @param {function} handler
 * @param {*} context
 * @return {*}
 */
export function invokeEventHandler(handler, context) {
  let args = [];
  for (let i = 2; i < arguments.length; i = i + 1) {
    args.push(arguments[i]);
  }
  try {
    return catchRejectedPromise(handler.apply(context, args));
  } catch (e) {
    window._kidjs_.error(e, true);
  }
}

/**
 * Report errors from a rejected promise returned by a user callback.
 *
 * @param {*} result
 * @return {*}
 */
export function catchRejectedPromise(result) {
  if (result && typeof result.then == 'function') {
    result.catch(function(e) {
      window._kidjs_.error(e, true);
    });
  }
  return result;
}
