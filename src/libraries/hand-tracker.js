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
    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm'
    );
    this.handLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
        delegate: 'GPU'
      },
      runningMode: 'VIDEO',
      numHands: 2
    });
    this.videoElement = document.createElement('video');
    this.videoElement.setAttribute('autoplay', '');
  }

  async start() {
    await this.init();

    navigator.mediaDevices.getUserMedia({
      video: true
    }).then((stream) => {
      this.videoElement.srcObject = stream;
      this.videoElement.addEventListener('loadeddata', () => {
        this.active = true;
        this.onAnimationFrame();
      });
    });

    this.fingers = [];
    for (let i = 0; i < 20; i = i + 1) {
      this.fingers.push(window.circle(0, 0, 40));
    }
  }

  stop() {
    this.active = false;
  }

  onAnimationFrame() {
    let results = this.handLandmarker.detectForVideo(
      this.videoElement, performance.now()
    );
    
    if (results.landmarks.length > 0) {
      for (let i = 0; i < Math.min(this.fingers.length, results.landmarks[0].length); i = i + 1) {
        this.fingers[i].x = window.stage.canvas.width / 2 - results.landmarks[0][i].x * window.stage.canvas.width / 2;
        this.fingers[i].y = results.landmarks[0][i].y * window.stage.canvas.height / 2;
      }
    }

    if (this.active) {
      requestAnimationFrame(this.onAnimationFrame.bind(this));
    }
  }
}

window.HandTracker = new HandTracker();