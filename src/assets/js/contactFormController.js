
function progressBarUpdate(form) {
  if (!form || form.tagName.toLowerCase() !== 'form') return false;
  const progressBar = document.getElementById('contactFormProgressBar');
  let prog = 0;
  // watch fields for progress
  const fields = [...form.querySelectorAll('.nes-input[required]:not(.fax-number)')];
  if (fields.length > 0) {
    // listen for form field changes
    for (var i = 0; i < fields.length; i++) {
      fields[i].addEventListener('change', (event) => {
        let field = event.target;
        if (field.checkValidity()) {
          if (progressBar && prog < 100 && !field.hasAttribute('data-field-valid')) {
            prog = prog + (100 / fields.length);
            progressBar.value = prog;
            field.setAttribute('data-field-valid', true);
          }
        }
        else {
          field.removeAttribute('data-field-valid');
          if (progressBar) {
            prog = prog - (100 / fields.length);
            progressBar.value = prog;
          }
        }
      })
    }
  }
}

function scrollToMessage() {
  const popupMessage = document.getElementById('contactFormStatusMessage');
  if (popupMessage) {
    var distance = popupMessage.getBoundingClientRect().top;
    if (distance && Number.isInteger(distance) && distance > 0) {
      window.scrollTo({
        top: distance,
        behavior: 'smooth',
      });
    }
  }
}

export default function() {
  // mail endpoint
  let azureMailEndpoint;
  if (process.env.NODE_ENV === 'production') {
    azureMailEndpoint = process.env.AZURE_MAIL_ENDPOINT_PROD;
  }
  else {
    azureMailEndpoint = process.env.AZURE_MAIL_ENDPOINT_DEV;
  }

  const contactForm = document.getElementById('contactForm');
  const popupMessage = document.getElementById('contactFormStatusMessage');
  const loadingIcon = document.getElementById('loadingIconCircles');
  if (contactForm && contactForm.tagName.toLowerCase() === 'form') {
    // set fields to empty
    contactForm.reset();
    // set initial progress bar state and watch for changes
    progressBarUpdate(contactForm);

    // TODO: watch form and when fields are filled out, set them to 'is-success' to turn them green and then back to normal if emptied. Can we go red if errored when using default html validation?
    // TODO: button should be is-disabled by default and then remove when all fields validated

    contactForm.addEventListener('submit', async (form) => {
      form.preventDefault();
      // reset status message
      if (popupMessage && loadingIcon) {
        popupMessage.querySelector('p').innerHTML = '';
        popupMessage.classList.remove('active', 'error', 'success');
        loadingIcon.classList.add('active');
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
        result = await fetch(azureMailEndpoint, {
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
        if (popupMessage && loadingIcon) {
          popupMessage.querySelector('p').innerHTML = 'Whoops!: <br/>' + err;
          popupMessage.classList.add('active', 'error');
          loadingIcon.classList.remove('active');
          scrollToMessage();
        }
      }
      finally {
        // reset form fields
        setTimeout( () => {
          contactForm.reset();
          popupMessage.classList.remove('active', 'error', 'success');
          loadingIcon.classList.remove('active');
        }, 7000);
      }

      if ( result && (result.ok || result.statusText === 'OK') && result.status === 200) {
        // show message to say success
        if (popupMessage && loadingIcon) {
          popupMessage.querySelector('p').innerHTML = 'Success! Your message has been sent. <br/> I will get back to you as soon as possible.';
          popupMessage.classList.add('active', 'success');
          loadingIcon.classList.remove('active');
          scrollToMessage();
        }
      }
    });
  }
}
