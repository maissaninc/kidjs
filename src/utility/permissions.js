function Permissions() {
  this.granted = [];
  this.requested = [];

  // Permission not required for device orientation
  if (typeof(DeviceOrientationEvent) == 'undefined' || typeof(DeviceOrientationEvent.requestPermission) != "function") {
    this.granted.push('deviceorientation');
  }

  // Permission not required for device motion
  if (typeof(DeviceMotionEvent) == 'undefined' || typeof(DeviceMotionEvent.requestPermission) != "function") {
    this.granted.push('devicemotion');
  }
}

Permissions.prototype = {

  constructor: Permissions,

  checkRequiredPermissions: function(node) {
    if (node.type == 'CallExpression') {
      if (node.callee.name == 'addEventListener') {
        if (node.arguments.length) {
          switch (node.arguments[0].value) {
            case 'deviceorientation':
            case 'tiltleft':
            case 'tiltright':
            case 'tiltup':
            case 'tiltdown':
              this.addPermission('deviceorientation');
              break;

            case 'devicemotion':
              this.addPermission('devicemotion');
              break;
          }
        }
      }
    }
  },

  addPermission: function(permission) {
    if (this.granted.indexOf(permission) < 0) {
      this.requested.push(permission);
    }
  },

  requestPermissions: async function() {
    var permission;
    while (permission = this.requested.pop()) {
      switch (permission) {
        case 'deviceorientation':
          var state = await DeviceOrientationEvent.requestPermission();
          if (state == 'granted') {
            this.granted.push('deviceorientation');
          }
          break;

        case 'devicemotion':
          var state = await DeviceMotionEvent.requestPermission();
          if (state == 'granted') {
            this.granted.push('devicemotion');
          }
          break;
      }
    }
  },

  clickToStart: function(callback) {
    var button = document.createElement('div');
    button.className = 'kidjs__click-to-start';
    button.innerHTML = 'Click to start';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.position = 'fixed';
    button.style.top = '0';
    button.style.left = '0';
    button.style.width = '100%';
    button.style.height = '100%';
    button.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    button.style.color = '#fff';
    button.style.fontFamily = 'Arial, sans-serif';
    button.style.fontSize = '30px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';
    button.addEventListener('click', function() {
      this.requestPermissions();
      document.body.removeChild(button);
      callback();
    }.bind(this))
    document.body.appendChild(button);
  }
};

export { Permissions }
