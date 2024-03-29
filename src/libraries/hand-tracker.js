import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

export class HandTracker {

  /**
   * Create hand tracker.
   *
   * @constructor
   */
  constructor() {
    this.active = false;
  }

  /**
   * Initialize hand tracker.
   *
   * @constructor
   */
  async init() {
    const vision = await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm');
    this.handLandmarker = await HandLandmarker.createFromModelPath(vision, 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task');
    await this.handLandmarker.setOptions({ runningMode: 'VIDEO' });
    this.videoElement = document.createElement('video');
    this.videoElement.style.position = 'absolute';
    this.videoElement.setAttribute('autoplay', '');
    document.body.appendChild(this.videoElement);
  }

  async start() {
    await this.init();

    navigator.mediaDevices.getUserMedia({
      video: true
    }).then((stream) => {
      this.videoElement.srcObject = stream;
      this.videoElement.addEventListener('loadeddata', () => this.onAnimationFrame());
    });
  }

  onAnimationFrame() {
    let results = this.handLandmarker.detectForVideo(
      this.videoElement.srcObject, performance.now()
    );
    console.log('OK', results);
  }
}

window.HandTracker = new HandTracker();