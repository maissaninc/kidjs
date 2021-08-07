import { init, run, stop } from './core';
import initEvents from './events';
import Stage from './stage';

// Initialize framework
init();

window.addEventListener('DOMContentLoaded', function() {

  // Create canvas
  window.stage = new Stage();
  document.body.style.margin = 0;
  document.body.style.padding = 0;
  document.body.appendChild(stage.canvas);

  // Resize canvas
  window.addEventListener('resize', function() {
    window.stage.resize();
  });

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
  settings: window._kidjs_.settings
};
