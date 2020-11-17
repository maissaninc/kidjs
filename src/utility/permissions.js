function Permissions() {
  this.granted = [];
  this.requested = [];

  // Permission not required for device orientation
  if (typeof( DeviceMotionEvent.requestPermission ) != "function") {
    this.granted.push('deviceorientation');
  }
}

Permissions.prototype = {

  constructor: Permissions,

  checkRequiredPermissions: function(node) {
    if (node.type == 'CallExpression') {
      if (node.callee.name == 'addEventListener') {
        if (node.arguments.length) {
          switch (node.arguments[0].raw) {
            case 'deviceorientation':
            case 'devicemotion':
              this.addPermission(node.arguments[0].raw);
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
  }
};

export { Permissions }
