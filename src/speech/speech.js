function Speech() {
  window.speak = this.speak.bind(this);
}

Speech.prototype = {

  constructor: Speech,

  speak: function(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
};

export { Speech }
