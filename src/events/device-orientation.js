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

  // Trigger "tiltleft" event
  if (getHorizontalTilt(e) < -threshold) {
    let event = new Event('tiltleft')
    window.dispatchEvent(event);
  }

  // Trigger "tiltright" event
  if (getHorizontalTilt(e) > threshold) {
    let event = new Event('tiltright')
    window.dispatchEvent(event);
  }

  // Trigger "tiltup" event
  if (getVerticalTilt(e) < -threshold) {
    let event = new Event('tiltup')
    window.dispatchEvent(event);
  }

  // Trigger "tiltdown" event
  if (getVerticalTilt(e) > threshold) {
    let event = new Event('tiltdown')
    window.dispatchEvent(event);
  }
}

export default function() {
  window.addEventListener('deviceorientation', onDeviceOrientation);
}
