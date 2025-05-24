import Vector from '../core/vector';

const threshold = 10;

function getHorizontalTilt(e) {
  switch (screen.orientation.type) {
    case 'landscape-primary':
    case 'landscape':
      return e.beta;
    case 'landscape-secondary':
      return -e.beta;
    case 'portrait-secondary':
      return -e.gamma;
    case 'portrait-primary':
    case 'portrait':
    default:
      return e.gamma;
  }
}

function getVerticalTilt(e) {
  switch (screen.orientation.type) {
    case 'landscape-primary':
    case 'landscape':
      return e.gamme;
    case 'landscape-secondary':
      return -e.gamma;
    case 'portrait-secondary':
      return -e.beta;
    case 'portrait-primary':
    case 'portrait':
    default:
      return e.beta;
  }
}

function onDeviceOrientation(e) {
  window.orientationAlpha = e.alpha;
  window.orientationBeta = e.beta;
  window.orientationGamma = e.gamma;
  window.tiltX = e.tiltX = getHorizontalTilt(e);
  window.tiltY = e.tiltY = getVerticalTilt(e);
  window.tilt = new Vector(window.tiltX, window.tiltY);

  // Trigger "tiltleft" event
  if (window.tiltX < -threshold) {
    let event = new CustomEvent('tiltleft')
    window.stage.dispatchEvent(event);
  }

  // Trigger "tiltright" event
  if (window.tiltX > threshold) {
    let event = new CustomEvent('tiltright')
    window.stage.dispatchEvent(event);
  }

  // Trigger "tiltup" event
  if (window.tiltY < -threshold) {
    let event = new CustomEvent('tiltup')
    window.stage.dispatchEvent(event);
  }

  // Trigger "tiltdown" event
  if (window.tiltY > threshold) {
    let event = new CustomEvent('tiltdown')
    window.stage.dispatchEvent(event);
  }

  // Trigger deviceorientation event on stage
  window.stage.dispatchEvent(e);
}

// Trigger "tilt" event each frame
function onAnimationFrame() {
  let event = new CustomEvent('tilt');
  window.stage.dispatchEvent(event);
}

export default function() {
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', onDeviceOrientation);
    window.addEventListener('animationframe', onAnimationFrame);
  }
}
