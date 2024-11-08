let permissionsRequred = [];

export function requirePermission(permission) {
  if (permission == 'deviceorientation' && typeof DeviceOrientationEvent.requestPermission != 'function') {
    return;
  }
  permissionsRequred.push(permission);
}

export function getPermissions() {
  if (permissionsRequred.length > 0) {

    // Display "click to start" overlay
    return new Promise((resolve, reject) => {

      let clickToStart = document.createElement('div');
      clickToStart.style.display = 'flex';
      clickToStart.style.flexDirection = 'row';
      clickToStart.style.alignItems = 'center';
      clickToStart.style.justifyContent = 'center';
      clickToStart.style.position = 'fixed';
      clickToStart.style.top = '0px';
      clickToStart.style.left = '0px';
      clickToStart.style.width = '100%';
      clickToStart.style.height = '100%';
      clickToStart.style.zIndex = 100;
      clickToStart.style.cursor = 'pointer';

      let label = document.createElement('div');
      label.innerHTML = ('ontouchstart' in window) ? 'Tap to start' : 'Click to start';
      label.style.backgroundColor = '#000';
      label.style.borderRadius = '100px';
      label.style.color = '#fff';
      label.style.fontFamily = '"Public Sans", Helvetica, sans-serif';
      label.style.fontSize = '30px';
      label.style.fontWeight = 'bold';
      label.style.paddingLeft = '15px';
      label.style.paddingRight = '15px';
      label.style.paddingTop = '10px';
      label.style.paddingBottom = '10px';
      clickToStart.appendChild(label);

      clickToStart.addEventListener('click', async () => {
        for (let i = 0; i < permissionsRequred.length; i = i + 1) {
          if (permissionsRequred[i] == 'deviceorientation') {
            await DeviceOrientationEvent.requestPermission();
          }
        }
        document.body.removeChild(clickToStart);
        resolve();
      });
      document.body.appendChild(clickToStart);
    });
  }
}
