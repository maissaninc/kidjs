import { run, reset, wait } from './core';
import { on } from './core/events';
import Stage from './stage';
import { circle } from './shape/circle';
import { rect } from './shape/rect';

// Set globals
window.stage = new Stage();
window.circle = circle;
window.on = on;
window.reset = reset;
window.wait = wait;

window.addEventListener('DOMContentLoaded', function() {

  // Create canvas
  document.body.style.margin = 0;
  document.body.style.padding = 0;
  document.body.appendChild(stage.canvas);

  // Execute script blocks
  let scripts = document.querySelectorAll('script[type="kidjs"]');
  for (let script of scripts) {
    run(script.innerHTML);
  }
});

window.addEventListener('resize', function() {
  window.stage.resize();
});
