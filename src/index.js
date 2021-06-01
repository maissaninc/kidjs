import { init, run, wait } from './core';
import initEvents, { on } from './events';
import Stage from './stage';
import { beep, frequency, note, song } from './audio';
import { sound } from './audio/sound';
import { speak } from './audio/speech';
import { circle } from './shape/circle';
import { line } from './shape/line';
import { oval } from './shape/oval';
import { rect } from './shape/rect';
import { triangle, square, pentagon, hexagon, heptagon, octagon } from './shape/regular';
import { semicircle } from './shape/semicircle';
import { image } from './sprite';
import { star } from './shape/star';
import { display, write } from './text';

// Initialize framework
init();

// Assign functions to global object
window.beep = beep;
window.circle = circle;
window.display = display;
window.heptagon = heptagon;
window.hexagon = hexagon;
window.image = image;
window.line = line;
window.note = note;
window.octagon = octagon;
window.on = on;
window.oval = oval;
window.pentagon = pentagon;
window.rect = rect;
window.semicircle = semicircle;
window.song = song;
window.sound = sound;
window.square = square;
window.star = star;
window.triangle = triangle;
window.wait = wait;
window.write = write;

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
  'run': run
};
