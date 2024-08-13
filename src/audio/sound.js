export default class Sound {

  /**
   * Create a new sound object.
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
  
  /**
   * Play sound.
   */
  play() {
    this.sound.play();
  }

  /**
   * Pause sound.
   */
  pause() {
    this.sound.pause();
  }

  /**
   * Stop and rewind sound.
   */
  stop() {
    this.sound.pause();
    this.sound.currentTime = 0;
  }
}

/**
 * Create and play a new sound.
 *
 * @constructor
 * @param {string} url - Path to sound file
 * @param {boolean} autoplay - Play sound automatically once loaded
 */
export function sound(url, autoplay) {
  let sound = new Sound(url, autoplay);
  return sound;
}

/**
 * Play a "ta-da" sound.
 */
export function tada() {
  sound(window._kidjs_.scriptPath + '/assets/tada.mp3', true);
}
