export class KidjsError extends Error {

  constructor(message, type,line = 0, column = 0) {
    super(message);
    this.name = 'Kidjs';
    window.dispatchEvent(new CustomEvent('KID.error', {
      detail: {
        message: message,
        type: type,
        line: line,
        column: column
      }
    }));
  }
}
