export class KidjsError extends Error {

  constructor(message, line = 0, column = 0) {
    super(message);
    this.name = 'Kidjs';
    window.dispatchEvent(new CustomEvent('KID.error', {
      detail: {
        message: message,
        line: line,
        column: column
      }
    }));
  }
}
