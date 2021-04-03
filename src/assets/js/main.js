import { flickerAction, regularFlicker, hoverWatch } from './neonController';
import { scramblerTrigger } from './scramblerController';
import { linesStart } from './linesController';
// import scss (for rollup build)
import '../styles/main.scss'; // eslint-disable-line import-order-aesthetic/order-import-by-length

document.addEventListener("DOMContentLoaded", function() {
  // start the neon lines in background
  linesStart();
  // set off the scrambling function and flicker function on the main page title
  const mainTitleSelector = '.title.neon-title';
  const mainTitle = document.querySelector(mainTitleSelector);
  if (mainTitle) {
    scramblerTrigger({
      target: '.title.neon-title',
      afterAll: function() {
        flickerAction(mainTitle);
      },
    });
  }
  // set off the flicker function at 20sec intervals and watch for hovers to trigger it manually
  // these are applied to all items with the 'neon-title' class
  regularFlicker(20000);
  hoverWatch();
});
