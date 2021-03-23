import { run, reset, wait } from './core';
import initEvents, { on } from './events';
import Stage from './stage';
import { circle } from './shape/circle';
import { line } from './shape/line';
import { rect } from './shape/rect';
import { star } from './shape/star';
import { triangle } from './shape/triangle';

// Set globals
window.stage = new Stage();
window.circle = circle;
window.line = line;
window.on = on;
window.rect = rect;
window.reset = reset;
window.star = star;
window.triangle = triangle;
window.wait = wait;

window.addEventListener('DOMContentLoaded', function() {

  // Create canvas
  document.body.style.margin = 0;
  document.body.style.padding = 0;
  document.body.appendChild(stage.canvas);

  // Setup events
  initEvents();

  // Execute script blocks
  let scripts = document.querySelectorAll('script[type="kidjs"]');
  for (let script of scripts) {
    run(script.innerHTML);
  }
});

window.addEventListener('resize', function() {
  window.stage.resize();
});
