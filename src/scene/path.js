function Path() {
  this.x = 0;
  this.y = 0;
  this.points = [];
  this._path = new Path2D();
}

Path.prototype = {

  constructor: Path,

  addPoint: function(x, y) {
    this.points.push({
      x: x,
      y: y
    });
    this._updateInternalPath();
  },

  clearPoints: function() {
    this.points = []
  },

  _updateInternalPath: function() {
    this._path = new Path2D();
    if (this.points.length) {
      this._path.moveTo(this.points[0].x, this.points[0].y);
    }
    for (var i = 1; i < this.points.length; i = i + 1) {
      this._path.lineTo(this.points[i].x, this.points[i].y);
    }
    this._path.closePath();
  },

  containsPoint: function(x, y) {
    return KID._scene.canvas.context.isPointInPath(this._path, x, y);
  },

  lineIntersects: function(x1, y1, x2, y2) {
    for (var i = 0; i < this.points.length; i = i + 1) {
      var j = (i + 1) % this.points.length;
      if (this.lineSegmentsIntersect(
        this.points[i].x, this.points[i].y, this.points[j].x, this.points[j].y,
        x1, y1, x2, y2
      )) {
        return true;
      }
    }
    return false;
  },

  lineSegmentsIntersect: function(x1, y1, x2, y2, x3, y3, x4, y4) {
  	var a1 = y2 - y1;
  	var b1 = x1 - x2;
  	var c1 = (x2 * y1) - (x1 * y2);
  	var r3 = ((a1 * x3) + (b1 * y3) + c1);
  	var r4 = ((a1 * x4) + (b1 * y4) + c1);
    if ((r3 !== 0) && (r4 !== 0) && (Math.sign(r3) == Math.sign(r4))) {
    	return false;
    }
  	var a2 = y4 - y3;
  	var b2 = x3 - x4;
  	var c2 = (x4 * y3) - (x3 * y4);
  	var r1 = (a2 * x1) + (b2 * y1) + c2;
    var r2 = (a2 * x2) + (b2 * y2) + c2;
  	if ((r1 !== 0) && (r2 !== 0) && (Math.sign(r1) == Math.sign(r2))) {
  		return false;
  	}
	  var denominator = (a1 * b2) - (a2 * b1);
  	if (denominator === 0) {
      if (
        (x1 >= x3 && x1 <= x4 || x2 >= x3 && x2 <= x4 || x3 <= x1 && x3>=x2) &&
        (y1 >= y3 && y1 <= y4 || y2 >= y3 && y2 <= y4 || y3 <= y1 && y3>=y2)
      ) {
        return true;
      } else {
        return false;
      }
    }
  	return true;
  }
};

export { Path }
