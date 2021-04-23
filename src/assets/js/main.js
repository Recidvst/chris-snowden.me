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
    var fasterScramble = mainTitle.hasAttribute('data-scrambler-fast');
    scramblerTrigger({
      target: '.title.neon-title',
      random: fasterScramble ? [1000, 2000] : [3000, 6000],
      speed: fasterScramble ? 80 : 100,
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

  // listen for form submission
  function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }

  function sendContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm && contactForm.tagName.toLowerCase() === 'form') {
      contactForm.addEventListener('submit', async (form) => {
        form.preventDefault();
        // get form fields data
        let formData = new FormData(contactForm);
        // convert to JSON
        let formObject = {};
        formData.forEach((value, key) => formObject[key] = value);
        console.log(formObject);

        // send request
        let result;
        try {
          result = await fetch('http://localhost:7071/api/sendMail', {
            method: 'POST',
            body: JSON.stringify(formObject),
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });
        }
        catch(err) {
          console.error(err);
          result = err;
        }
        finally {
          console.log('finally..');
        }

        console.warn(result);
        if ( (result.ok || result.statusText === 'OK') && result.status === 200) {

          // TODO: don't forget to add email validation and a honeypot
          // add message to say success/failure
          // clear out form fields
        }
      });
    }
  }
  sendContactForm();
});
