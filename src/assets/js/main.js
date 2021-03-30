import { linesStart } from './linesController';
import Scrambler from 'scrambling-letters';
// import scss (for rollup build)
import '../styles/main.scss'; // eslint-disable-line import-order-aesthetic/order-import-by-length

document.addEventListener("DOMContentLoaded", function() {
  console.log('hello world1');
  // start the neon lines in background
  linesStart();
});
