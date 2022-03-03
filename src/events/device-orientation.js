const threshold = 10;

function getHorizontalTilt(e) {
  if (window.matchMedia('(orientation: portrait)').matches) {
    return e.gamma;
  } else {
    return -e.beta;
  }
}

function getVerticalTilt(e) {
  if (window.matchMedia('(orientation: portrait)').matches) {
    return e.beta;
  } else {
    return e.gamma;
  }
}

function onDeviceOrientation(e) {
  window.orientationAlpha = e.alpha;
  window.orientationBeta = e.beta;
  window.orientationGamma = e.gamma;
  window.tiltX = e.tiltX = getHorizontalTilt(e);
  window.tiltY = e.tiltY = getVerticalTilt(e);

  // Trigger "tilt" event
  let event = new CustomEvent('tilt');
  window.stage.dispatchEvent(event);

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
}

export default function() {
  if (DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', onDeviceOrientation);
  }
}
