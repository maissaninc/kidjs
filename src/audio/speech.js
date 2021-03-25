export function speak(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
