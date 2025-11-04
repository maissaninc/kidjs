import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export class HandTracker {

  /**
   * Create hand tracker.
   *
   * @constructor
   */
  constructor() {
    this.active = false;
    this.canvas = null;
    this.visible = false;
    this.landmarks = [];
    this.leftHand = null;
    this.leftWrist = null;
    this.rightHand = null;
    this.rightWrist = null;
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

    // Create canvas to render hand
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = 0;
    this.canvas.style.left = 0;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.zIndex = 1000;
    document.body.appendChild(this.canvas);

    // Create Three.js scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 2000);
    this.camera.position.z = 1000;
    this.scene.add(this.camera);

    // Create Three.js renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });

    // Load hand model
    const loader = new FBXLoader();
    loader.load(window._kidjs_.scriptPath + '/assets/models/left.fbx', (object) => {
      this.leftHand = object; 
      this.leftWrist = this.leftHand.getObjectByName('Wrist');
      this.scene.add(this.leftHand);

      // Create hand mesh
      for (let i = 0; i <= 20; i = i + 1) {
        this.landmarks.push(new THREE.Mesh(
          new THREE.SphereGeometry(0.25, 32, 32),
          new THREE.MeshBasicMaterial({ color: 0xff0000 })
        ));
        this.scene.add(this.landmarks[i]);
      }
    });
    /*loader.load(window._kidjs_.scriptPath + '/assets/models/right.fbx', (object) => {
      this.rightHand = object;
      this.scene.add(this.rightHand);
    });*/
  }

  /**
   * Start hand tracking.
   */
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
  }

  /**
   * Stop hand tracking.
   */
  stop() {
    this.active = false;
  }

  /**
   * Translate landmark to Three.js coordinates.
   * 
   * @param {Object} - Landmark 
   * @param {Number} - Scale factor
   * @returns {Object} - Coordinates in 3D scene
   */
  translateLandmark(landmark, scale=1) {
    return [
      (-landmark.x + 0.5) * scale,
      (-landmark.y + 0.5) * scale,
      -landmark.z * scale
    ];
  }

  /**
   * Update hand position.
   */
  onAnimationFrame() {
    let results = this.handLandmarker.detectForVideo(
      this.videoElement, performance.now()
    );
    
    // Show in view
    if (results.landmarks.length > 0) {
      this.visible = true;
      
      // Position left hand
      if (this.leftWrist) {

        for (let i = 0; i <= 20; i = i + 1) {
          this.landmarks[i].position.set(...this.translateLandmark(results.landmarks[0][i], 10));
        }
  

        this.leftWrist.position.set(...this.translateLandmark(results.landmarks[0][0]));     
        let landmarkIndex = 1;
        for (let finger = 0; finger < 5; finger = finger + 1) {
          let bone = this.leftWrist.children[finger];
          let depth = 4;
          while (depth > 0) {
            bone.position.set(...this.translateLandmark(results.landmarks[0][landmarkIndex]));
            bone = bone.children[0];
            landmarkIndex = landmarkIndex + 1;
            depth = depth - 1;
          }
        }
      }
    
    // Hide out of view
    } else {
      this.visible = false;
    }

    // Render scene
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    if (this.visible) {
      this.renderer.render(this.scene, this.camera);
    }

    if (this.active) {
      requestAnimationFrame(this.onAnimationFrame.bind(this));
    }
  }
}

window.HandTracker = new HandTracker();