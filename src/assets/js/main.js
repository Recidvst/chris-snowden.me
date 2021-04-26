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
    flickerAction(mainTitle);
    var fasterScramble = mainTitle.hasAttribute('data-scrambler-fast');
    scramblerTrigger({
      target: '.title.neon-title.scramble',
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

  function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    const popupMessage = document.getElementById('contactFormStatusMessage');
    if (contactForm && contactForm.tagName.toLowerCase() === 'form') {
      contactForm.reset();

      // watch form and when fields are filled out, set them to 'is-success' to turn them green and then back to normal if emptied. Can we go red if errored when using default html validation?
      // button should be is-disabled by default and then remove when all fields validated

      contactForm.addEventListener('submit', async (form) => {
        form.preventDefault();
        // reset status message
        if (popupMessage) {
          popupMessage.querySelector('p').innerHTML = '';
          popupMessage.classList.remove('active');
        }

        // get form fields data
        let formData = new FormData(contactForm);
        // convert to JSON
        let formObject = {};
        formData.forEach((value, key) => formObject[key] = value);

        // send request
        let result;
        try {
          if (formObject.faxnumber) {
            throw new Error('Bad bot!');
          }

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
          result = err;
          // show message to say failure
          if (popupMessage) {
            popupMessage.querySelector('p').innerHTML = 'Whoops!: <br/>' + err;
            popupMessage.classList.add('active');
          }
        }
        finally {
          // reset form fields
          setTimeout( () => {
            contactForm.reset();
            popupMessage.classList.remove('active');
          }, 7000);
        }

        if ( result && (result.ok || result.statusText === 'OK') && result.status === 200) {
          // show message to say success
          if (popupMessage) {
            popupMessage.querySelector('p').innerHTML = 'Success! Your message has been sent. <br/> I will get back to you as soon as possible.';
            popupMessage.classList.add('active');
          }
        }
      });
    }
  }
  handleContactForm();
});
