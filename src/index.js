import { init, run, wait } from './core';
import initEvents, { on } from './events';
import Stage from './stage';
import { speak } from './audio/speech';
import { display } from './stage/text';
import { circle } from './shape/circle';
import { line } from './shape/line';
import { rect } from './shape/rect';
import { triangle, square, pentagon, hexagon, heptagon, octagon } from './shape/regular';
import { star } from './shape/star';

// Initialize framework
init();

// Assign functions to global object
window.circle = circle;
window.display = display;
window.heptagon = heptagon;
window.hexagon = hexagon;
window.line = line;
window.octagon = octagon;
window.on = on;
window.pentagon = pentagon;
window.rect = rect;
window.square = square;
window.star = star;
window.triangle = triangle;
window.wait = wait;

window.addEventListener('DOMContentLoaded', function() {

  // Create canvas
  window.stage = new Stage();
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

window.KID = {
  'reset': function() {
    window.stage.clear();
  },
  'run': run
};
