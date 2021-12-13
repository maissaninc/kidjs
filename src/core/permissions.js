let permissionsRequred = [];

export function requirePermission(permission) {
  permissionsRequred.push(permission);
}

export function getPermissions() {
  if (permissionsRequred.length > 0) {
    return new Promise((resolve, reject) => {
      let clickToStart = document.createElement('div');
      clickToStart.innerHTML = 'Click to start';
      clickToStart.style.display = 'flexbox';
      clickToStart.style.position = 'fixed';
      clickToStart.style.top = '0px';
      clickToStart.style.left = '0px';
      clickToStart.style.width = '100%';
      clickToStart.style.height = '100%';
      clickToStart.zIndex = 100;
      clickToStart.addEventListener('click', () => {
        document.body.removeChild(clickToStart);
        resolve();
      });
      document.body.appendChild(clickToStart);
    });
  }
}
