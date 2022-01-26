export class KidjsError extends Error {

  constructor(message) {
    super(message);
    this.name = 'Kidjs';
    window.dispatchEvent(new CustomEvent('KID.error', {
      details: message
    }));
  }
}
