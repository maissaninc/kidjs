export default class Recording {

  /**
   * Create a new video recording.
   *
   * @constructor
   */
  constructor() {
    this.stream = window.stage.canvas.captureStream(60);
    this.recorder = new MediaRecorder(this.stream, {
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 2500000,
      mimeType: 'video/webm'
    });
    this.chunks = [];
    this.recorder.ondataavailable = function(e) {
      console.log('Chunk');
      this.chunks.push(e.data);
    }.bind(this);
  }

  /**
   * Start recording video.
   */
  start() {
    this.recorder.start();
  }

  /**
   * Stop recording video.
   */
  stop() {
    this.recorder.stop();
  }

  /**
   * Download recorded video.
   *
   * @param {string} filename - Downloaded filename
   */
  download(filename = 'capture.webm') {
    if (this.chunks.length > 0) {
      let blob = new Blob(this.chunks, { 'type' : 'video/webm' }); 
      let videoURL = URL.createObjectURL(blob);
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.href = videoURL;
      a.download = filename;
      a.click();
    }
  }
}

/**
 * Create and start a new recording.
 *
 * @return {Recording} Video recording
 */
export function record() {
  let recording = new Recording();
  recording.start();
  return recording;
}
