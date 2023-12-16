
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
            field.classList.add('is-success', "success");
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

function showStatusMessage(message, success) {
  const popupMessage = document.getElementById('contactFormStatusMessage');
  const loadingIcon = document.getElementById('loadingIconCircles');

  if (popupMessage && loadingIcon) {
    popupMessage.querySelector('p').innerHTML = message;
    popupMessage.classList.add('active');
    popupMessage.classList.add(success ? 'success' : 'error');
    loadingIcon.classList.remove('active');
    scrollToMessage();
  }
}

function resetStatusMessage() {
  const popupMessage = document.getElementById('contactFormStatusMessage');
  const loadingIcon = document.getElementById('loadingIconCircles');

  if (popupMessage && loadingIcon) {
    popupMessage.querySelector('p').innerHTML = '';
    popupMessage.classList.remove('active', 'error', 'success');
    loadingIcon.classList.add('active');
  }
}

function resetForm(form) {
  if (!form || form.tagName.toLowerCase() !== 'form') return false;
  const progressBar = document.getElementById('contactFormProgressBar');
  const popupMessage = document.getElementById('contactFormStatusMessage');
  const loadingIcon = document.getElementById('loadingIconCircles');

  setTimeout( () => {
    form.reset();
    if (progressBar) {
      progressBar.value = 0;
    }
    if (popupMessage && loadingIcon) {
      popupMessage.innerHTML = '';
      popupMessage.classList.remove('active', 'error', 'success');
      loadingIcon.classList.remove('active');
    }
  }, 10000);
}

export default function() {
  console.warn(process.env)
  // mail endpoint
  let azureMailEndpoint = process.env.AZURE_MAIL_ENDPOINT_PROD;

  const contactForm = document.getElementById('contactForm');
  if (contactForm && contactForm.tagName.toLowerCase() === 'form') {
    // set fields to empty
    contactForm.reset();
    // set initial progress bar state and watch for changes
    progressBarUpdate(contactForm);

    contactForm.addEventListener('submit', async (form) => {
      form.preventDefault();

      // reset status message
      resetStatusMessage();

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
        showStatusMessage('Whoops!: <br/>' + 'Something went wrong. Please try again.', false);
      }

      if ( result && (result.ok || result.statusText === 'OK') && result.status === 200) {
        // show message to say success
        showStatusMessage('Success! Your message has been sent. <br/> I will get back to you as soon as possible.', true);
        // reset form fields
        // resetForm(contactForm);
      }
      else {
        showStatusMessage('Whoops!: <br/>' + 'Something went wrong. Please try again.', false);
      }
    });
  }
}
