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

  // Trigger "tiltleft" event
  if (getHorizontalTilt(e) < -threshold) {
    let event = new CustomEvent('tiltleft')
    window.stage.dispatchEvent(event);
  }

  // Trigger "tiltright" event
  if (getHorizontalTilt(e) > threshold) {
    let event = new CustomEvent('tiltright')
    window.stage.dispatchEvent(event);
  }

  // Trigger "tiltup" event
  if (getVerticalTilt(e) < -threshold) {
    let event = new CustomEvent('tiltup')
    window.stage.dispatchEvent(event);
  }

  // Trigger "tiltdown" event
  if (getVerticalTilt(e) > threshold) {
    let event = new CustomEvent('tiltdown')
    window.stage.dispatchEvent(event);
  }
}

export default function() {
  if (DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', onDeviceOrientation);
  }
}
