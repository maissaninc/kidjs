let rooms = {};

export default class Socket {

  constructor(room = '') {
    this.room = room;
    this.listeners = {};
  }

  send(message) {
    if (typeof window._kidjs_.settings.socketSend === 'function') {
      window._kidjs_.settings.socketSend({
        room: this.room,
        message: message
      });
    }
  }

  receive(message, event = 'message') {
    if (typeof this.listeners[event] === 'function') {
      this.listeners[event](message);
    }
  }
}

export function join(room) {
  rooms[room] = new Socket();
}

export function send(message) {
  if (typeof window._kidjs_.settings.socketSend === 'function') {
    window._kidjs_.settings.socketSend({
      room: null,
      message: message
    });
  }
}

window._kidjs_.settings.socketReceive = function(parameters) {
   
  // No message received
  if (!parameters.message) {
    return;
  }

  // No room specified
  if (!parameters.room) {
    window.stage.dispatchEvent(new CustomEvent('message', {
      detail: {
        message: parameters.message
      }
    }));
    return;
  }

  // Room specified
  if (rooms[parameters.room]) {
    rooms[parameters.room].receive(
      parameters.message, 
      parameters.event ? parameters.event : 'message'
    );
  }
}
  