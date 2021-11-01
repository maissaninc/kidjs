/*!
 * MIT License
 *
 * Copyright (C) 2012-2021 Chris Maissan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


import { init, run, stop, setAssetUrlFilter } from './core';
import initEvents from './events';
import Stage from './stage';

// Initialize framework
init();

window.addEventListener('DOMContentLoaded', function() {

  // Create canvas
  window.stage = new Stage(window.KID.settings.width, window.KID.settings.height);
  document.body.style.margin = 0;
  document.body.style.padding = 0;
  document.body.appendChild(stage.canvas);

  // Resize canvas
  if (!window.KID.settings.width || !window.KID.settings.height) {
    window.addEventListener('resize', function() {
      window.stage.resize();
    });
  }

  // Clear method
  window.clear = function() {
    window.stage.clear();
  }

  // Setup events
  initEvents();

  // Framework ready
  window.dispatchEvent(new Event('KID.ready'));

  // Execute script blocks
  let scripts = document.querySelectorAll('script[type="kidjs"]');
  for (let script of scripts) {
    run(script.innerHTML);
  }
});

window.KID = {
  run: run,
  stop: stop,
  settings: window._kidjs_.settings,
  setAssetUrlFilter: setAssetUrlFilter
};

window.debug = true;
