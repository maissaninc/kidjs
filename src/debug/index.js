export function log(message) {
  if (window.debug) {
    console.log(message);
  }
}
