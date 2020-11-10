function Keyboard() {
  window.addEventListener('keydown', this.onKeyDown.bind(this));
  window.addEventListener('keyup', this.onKeyUp.bind(this));
}

Keyboard.prototype = {

  constructor: Keyboard,

  // Trigger {{key}}, {{key}}key {{key}}keydown events
  onKeyDown: function(e) {
    var event = new Event(e.key.toLowerCase());
    window.dispatchEvent(event);
    event = new Event(e.key.toLowerCase() + 'key');
    window.dispatchEvent(event);
    event = new Event(e.key.toLowerCase() + 'keydown');
    window.dispatchEvent(event);
  },

  // Trigger {{key}} up event
  onKeyUp: function(e) {
    var event = new Event(e.key.toLowerCase() + 'keyup');
    window.dispatchEvent(event);
  }
};

export { Keyboard }
