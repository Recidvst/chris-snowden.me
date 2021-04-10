import { flickerAction, regularFlicker, hoverWatch } from './neonController';
import { scramblerTrigger } from './scramblerController';
import { linesStart } from './linesController';
import { listen, prefetch } from "quicklink";
// import scss (for rollup build)
import '../styles/main.scss'; // eslint-disable-line import-order-aesthetic/order-import-by-length

document.addEventListener("DOMContentLoaded", function() {
  // trigger quicklink (prefetch URLs)
  listen();

  // start the neon lines in background
  linesStart();

  // set off the scrambling function and flicker function on the main page title
  // set off the scrambling function for the subordinate subtitles via recursion
  const mainTitle = document.querySelector('.page-title-container .title.neon-title');
  const subTitles = [...document.querySelectorAll('.page-title-container .page-title-container__subtitles *')];

  if (subTitles && subTitles.length > 0) {
    subTitles.map( (item, index) => item.classList.add(`neon-subtitle__${index}`, 'hidden'));
  }

  let recursiveScramblerIndex = 0;
  function recursiveScrambler(limit, curIndex) {
    if (curIndex >= limit) {
      return;
    }
    let ind = curIndex;

    scramblerTrigger({
      target: `.neon-subtitle__${ind}`,
      random: [750, 1500],
      speed: 80,
      beforeAll: function() {
        document.querySelector(`.neon-subtitle__${ind}`).classList.remove('hidden');
      },
      afterAll: function() {
        ind++;
        recursiveScrambler(subTitles.length, ind);
      },
    });
  }

  if (mainTitle) {
    scramblerTrigger({
      target: '.title.neon-title',
      random: [3000, 6000],
      speed: 100,
      afterAll: function() {
        flickerAction(mainTitle);
      },
    });
  }
  // trigger the subtitles
  if (subTitles && subTitles.length > 0) {
    recursiveScrambler(subTitles.length, recursiveScramblerIndex)
  }

  // set off the flicker function at 20sec intervals and watch for hovers to trigger it manually
  // these are applied to all items with the 'neon-title' class
  regularFlicker(20000);
  hoverWatch();
});
