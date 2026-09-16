export class Settings {

    _backgroundColor = null;
    _caseInsensitive = false;
    _slowMotion = false;
    _slowMotionDelay = 1;
    _grid = false;
    _pixelSize = 1;
    _orientation = 'auto';

   set backgroundColor(value) {
    this._backgroundColor = value;
   }

   get backgroundColor() {
    return this._backgroundColor;
   }

   set caseInsensitive(value) {
    this._caseInsensitive = value;
   }

   get caseInsensitive() {
    return this._caseInsensitive;
   }

   set slowMotion(value) {
    this._slowMotion = value;
   }

   get slowMotion() {
    return this._slowMotion;
   }

   set slowMotionDelay(value) {
    this._slowMotionDelay = value;
   }

   get slowMotionDelay() {
    return this._slowMotionDelay;
   }

   set grid(value) {
    this._grid = value;
    if (window.grid) {
      window.stage.resize();
    }
   }

   get grid() {
    return this._grid;
   }

   set pixelSize(value) {
    this._pixelSize = value;
    if (window.stage) {
      window.stage.resize();
    }
   }

   get pixelSize() {
    return this._pixelSize;
   }

   set orientation(value) {
    this._orientation = value;
   }

   get orientation() {
    return this._orientation;
   }
}