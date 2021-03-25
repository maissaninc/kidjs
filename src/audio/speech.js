function Speech() {
  window.speak = this.speak.bind(this);
}

export function speak(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

Speech.prototype = {

  constructor: Speech,

  speak: function(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
};

export { Speech }
