let rooms = {};

export class Socket {

  constructor(room = '') {
    this.room = room;
    this.eventListeners = {};
  }

  send(message) {
    if (typeof window._kidjs_.socketSend === 'function') {
      window._kidjs_.socketSend({
        room: this.room,
        message: message
      });
    }
  }

  emit(event, message) {
    if (typeof window._kidjs_.socketSend === 'function') {
      window._kidjs_.socketSend({
        room: this.room,
        event: event,
        message: message
      });
    }
  }

  receive(message, event = 'message') {
    if (this.eventListeners[event] !== undefined) {
      for (let listener of this.eventListeners[event]) {
        if (typeof listener === 'function') {
          listener(message);
        }
      }
    }
  }

  addEventListener(event, callback) {
    if (this.eventListeners[event] == undefined) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(callback); 
  }

  on(event, callback) {
    this.addEventListener(event, callback);
  }
}

export function initSockets() {

  // Setup receive method
  window._kidjs_.socketReceive = function(parameters) {
    console.debug('Socket receive', parameters);

    // Could incorrectly detect freeze if browser is in the background
    window._kidjs_.stats.lastFrame = Date.now();
    
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
}

export function join(room) {
  rooms[room] = new Socket(room);
  if (typeof window._kidjs_.socketJoin === 'function') {
    window._kidjs_.socketJoin(room);
  }
  return rooms[room];
}

export function send(message) {
  if (typeof window._kidjs_.socketSend === 'function') {
    window._kidjs_.socketSend({
      room: null,
      message: message
    });
  }
}
  
window.addEventListener('KID.reset', function() {
  rooms = {};
});