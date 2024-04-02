import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import Phalange from './phalange';

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

    this.phalanges = [];
    for (let i = 0; i < 20; i = i + 1) {
      this.phalanges.push(new Phalange());
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
      for (let i = 0; i < this.phalanges.length; i = i + 1) {
        let x1 = window.stage.canvas.width / 2 - results.landmarks[0][(i % 4 == 0) ? 0 : i].x * window.stage.canvas.width / 2;
        let y1 = results.landmarks[0][(i % 4 == 0) ? 0 : i].y * window.stage.canvas.height / 2;
        let x2 = window.stage.canvas.width / 2 - results.landmarks[0][i + 1].x * window.stage.canvas.width / 2;
        let y2 = results.landmarks[0][i + 1].y * window.stage.canvas.height / 2;
        this.phalanges[i].show(x1, y1, x2, y2);
      }
    } else {
      for (let i = 0; i < this.phalanges.length; i = i + 1) {
        this.phalanges[i].hide();
      }
    }

    if (this.active) {
      requestAnimationFrame(this.onAnimationFrame.bind(this));
    }
  }
}

window.HandTracker = new HandTracker();