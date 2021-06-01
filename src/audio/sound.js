export default class Sound {

  /**
   * Create a new actor and add it to the stage.
   *
   * @constructor
   * @param {string} url - Path to sound file
   * @param {boolean} autoplay - Play sound automatically once loaded
   */
  constructor(url, autoplay = true) {
    this.sound = new Audio();
    this.sound.autoplay = autoplay;
    this.sound.src = url;
    this.sound.load();
  }

  play() {
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }

  stop() {
    this.sound.pause();
    this.sound.currentTime = 0;
  }
}

export function sound(url, autoplay) {
  let sound = new Sound(url, autoplay);
  return sound;
}
