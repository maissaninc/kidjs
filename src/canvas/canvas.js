function Canvas(id) {

  this.id = id;
  this.imageCache = {};

  // Insert canvas element into DOM
  this.container = document.createElement('div');
  this.container.style.overflow = 'hidden';
  this.container.style.position = 'fixed';
  this.container.style.top = 0;
  this.container.style.left = 0;
  this.container.style.width = '100%';
  this.container.style.height = '100%';
  this.canvas = document.createElement('canvas');
  if (this.id) {
    this.canvas.id = this.id;
  }
  this.canvas.style.position = 'absolute';
  this.canvas.style.top = 0;
  this.canvas.style.left = 0;
  this.canvas.style.width = '4096px';
  this.canvas.style.height = '2160px';
  this.canvas.style.imageRendering = 'pixelated';
  this.canvas.width = 4096 / KID.settings.pixelSize;
  this.canvas.height = 2160 / KID.settings.pixelSize;
  this.container.appendChild(this.canvas);
  document.body.appendChild(this.container);
  this.context = this.canvas.getContext('2d');

  // Canvas methods
  this.methods = [
    'drawImage',
    'moveTo',
    'lineTo',
    'line',
    'bezierCurveTo',
    'rect',
    'fillRect',
    'clearRect',
    'clear',
    'arc',
    'circle',
    'fillCircle',
    'write',
    'writeln',
    'putpixel'
  ];

  // Set screen width and height values
  window.addEventListener('resize', function() {
    window.width = window.innerWidth;
    window.height = window.innerHeight;
  });

  // Set default properties
  this.reset();
}

Canvas.prototype = {

  constructor: Canvas,

  addMethodsToScope: function(scope) {
    for (var i = 0; i < this.methods.length; i = i + 1) {
      scope[this.methods[i]] = this[this.methods[i]].bind(this);
    }
  },

  reset: function() {
    this.pathX = 15;
    this.pathY = 15;
    this.lineHeight = 1.5;
    this.canvas.width = Math.round(4096 / KID.settings.pixelSize);
    this.canvas.height = Math.round(2160 / KID.settings.pixelSize);
    window.fillStyle = 'black';
    window.strokeStyle = 'black';
    window.shadowColor = 'black';
    window.shadowBlur = 0;
    window.shadowOffsetX = 0;
    window.shadowOffsetY = 0;
    window.lineCap = 'butt';
    window.lineJoin = 'miter';
    window.lineWidth = 1;
    window.miterLimit = 10.0;
    window.font = '24px Arial';
    window.textAlign = 'left';
    window.textBaseline = 'top';
    window.width = window.innerWidth;
    window.height = window.innerHeight;
  },

  loadImage: async function(image) {

    // Check for image in cache
    if (this.imageCache[image]) return;

    // Apply filter to image URL
    var imageSrc = image;
    if (typeof KID.imageUrlFilter === 'function') {
      imageSrc = KID.imageUrlFilter(imageSrc);
    }

    // Load image and save to cache
    return new Promise(function(resolve, reject) {
      var imageToLoad = new Image();
      imageToLoad.src = imageSrc;
      imageToLoad.onload = async function() {
        this.imageCache[image] = imageToLoad;
        resolve(imageToLoad);
      }.bind(this);
    }.bind(this));
  },

  drawImage: function(image, x, y, w, h) {

    // Image object passed
    if (image instanceof Image) {
      if (typeof w !== 'undefined' && typeof h !== 'undefined') {
        this.context.drawImage(
          image,
          this.scalarUnit('x', x),
          this.scalarUnit('y', y),
          this.scalarUnit('x', w),
          this.scalarUnit('y', h)
        );
      } else {
        this.context.drawImage(
          image,
          this.scalarUnit('x', x),
          this.scalarUnit('y', y)
        );
      }
    }

    // Image URL passed
    if (typeof image == 'string') {

      // Check for image in cache
      if (this.imageCache[image]) {
        return this.drawImage(this.imageCache[image], x, y, w, h);
      }

      // Apply filter to image URL
      var imageSrc = image;
      if (typeof KID.imageUrlFilter === 'function') {
        imageSrc = KID.imageUrlFilter(imageSrc);
      }

      // Load image into cache and draw
      var imageToDraw = new Image();
      imageToDraw.src = imageSrc;
      imageToDraw.onload = (function() {
        this.imageCache[image] = imageToDraw;
        this.drawImage(imageToDraw, x, y, w, h);
      }).bind(this);
    }

    return image;
  },

  moveTo: function(x, y) {
    this.pathX = this.scalarUnit('x', x);
    this.pathY = this.scalarUnit('y', y);
  },

  lineTo: function(x, y) {
    this.setProperties();
    this.context.beginPath();
    this.context.moveTo(this.pathX, this.pathY);
    this.pathX = this.scalarUnit('x', x);
    this.pathY = this.scalarUnit('y', y)
    this.context.lineTo(this.pathX, this.pathY);
    this.context.stroke();
  },

  line: function(x1, y1, x2, y2) {
    this.moveTo(x1, y1);
    this.lineTo(x2, y2);
  },

  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this.setProperties();
    this.context.beginPath();
    this.context.moveTo(this.pathX, this.pathY);
    this.context.bezierCurveTo(
      this.scalarUnit('x', x1),
      this.scalarUnit('y', y1),
      this.scalarUnit('x', x2),
      this.scalarUnit('y', y2),
      this.scalarUnit('x', x3),
      this.scalarUnit('y', y3)
    );
    this.pathX = this.scalarUnit('x', x);
    this.pathY = this.scalarUnit('y', y)
    this.context.stroke();
  },

  rect: function(x, y, w, h) {
    this.setProperties();
    this.context.beginPath();
    this.context.rect(
      this.scalarUnit('x', x),
      this.scalarUnit('y', y),
      this.scalarUnit('w', w),
      this.scalarUnit('h', h)
    );
    this.context.stroke();
  },

  fillRect: function(x, y, w, h) {
    this.setProperties();
    this.context.beginPath();
    this.context.fillRect(
      this.scalarUnit('x', x),
      this.scalarUnit('y', y),
      this.scalarUnit('w', w),
      this.scalarUnit('h', h)
    );
  },

  clearRect: function(x, y, w, h) {
    this.setProperties();
    this.context.clearRect(
      this.scalarUnit('x', x),
      this.scalarUnit('y', y),
      this.scalarUnit('x', w),
      this.scalarUnit('y', h)
    );
  },

  clear: function() {
    this.clearRect(0, 0, '100%', '100%');
  },

  arc: function(x, y, r, start, stop) {
    this.setProperties();
    this.context.beginPath();
    this.context.arc(
      this.scalarUnit('x', x),
      this.scalarUnit('y', y),
      this.scalarUnit('r', r),
      this.degreesToRadians(start),
      this.degreesToRadians(stop)
    );
    this.context.stroke();
  },

  circle: function(x, y, r) {
    this.arc(x, y, r, 0, 360);
  },

  fillCircle: function(x, y, r) {
    this.setProperties();
    this.context.beginPath();
    this.context.arc(
      this.scalarUnit('x', x),
      this.scalarUnit('y', y),
      this.scalarUnit('r', r),
      0,
      Math.PI * 2
    );
    this.context.fill();
  },

  write: function(text) {
    this.setProperties();
    this.context.moveTo(this.pathX, this.pathY);
    this.context.fillText(text, this.pathX, this.pathY);
    this.pathX = this.pathX + this.context.measureText(text).width;
  },

  writeln: function(text) {
    this.setProperties();
    this.context.moveTo(this.pathX, this.pathY);
    this.context.fillText(text, this.pathX, this.pathY);
    this.pathY = this.pathY + this.context.measureText('M').width * this.lineHeight;
  },

  putpixel: function(x, y, color) {
    var temp = this.context.fillStyle;
    this.context.fillStyle = color;
    this.context.fillRect(
      this.scalarUnit('x', x),
      this.scalarUnit('y', y),
      this.scalarUnit('x', 1),
      this.scalarUnit('y', 1)
    );
    this.context.fillStyle = temp;
  },

  scalarUnit: function(key, value) {
    if (typeof value === 'number') {
      return value;
    }
    var regex = /(\d+)(px|%)/i;
    var match = regex.exec(value);
    if (!match) {
      console.error('Invalid unit');
      return;
    }
    if (match[2] == 'px') {
      return parseFloat(match[1]);
    }
    if (match[2] == '%' && key == 'x') {
      return parseFloat(match[1]) / 100 * window.innerWidth;
    }
    if (match[2] == '%' && key == 'y') {
      return parseFloat(match[1]) / 100 * window.innerHeight;
    }
    if (match[2] == '%' && key == 'r') {
      return parseFloat(match[1]) / 100 * Math.min(
        window.innerWidth,
        window.innerHeight
      );
    }
  },

  setProperties: function() {
    var properties = [
      'fillStyle',
      'strokeStyle',
      'shadowColor',
      'shadowBlur',
      'shadowOffsetX',
      'shadowOffsetY',
      'lineCap',
      'lineJoin',
      'lineWidth',
      'miterLimit',
      'font',
      'textAlign',
      'textBaseline'
    ];
    for (var i = 0; i < properties.length; i = i + 1) {
      if (typeof window[properties[i]] !== 'undefined') {
        this.context[properties[i]] = window[properties[i]];
      }
    }
  },

  degreesToRadians: function(degrees) {
    return degrees * Math.PI / 180;
  }
};

export { Canvas }
