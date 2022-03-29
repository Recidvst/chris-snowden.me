
export default function() {
  try {
    // check if browser has permission. We don't ask if it doesn't because this is just a little easter egg, not a bit of actual functionality
    if (navigator && navigator.permissions) {
      navigator.permissions.query({name:'ambient-light-sensor'}).then(function(result) {
        if (result.state === 'granted') {

          // is the AmbientLightSensor available in the browser?
          if ( 'AmbientLightSensor' in window || window.AmbientLightSensor ) {
            // eslint-disable-next-line
            console.log('ambient light sensor available');

            // create sensor
            const sensor = new AmbientLightSensor();

            // catch errors
            sensor.addEventListener('error', error => {
              // eslint-disable-next-line
              console.error(error);
            });

            // watch for illumination change
            sensor.addEventListener('reading', () => {
              const illuminance = sensor.illuminance;
              const ghost = document.getElementsByClassName('ghost')[0];

              // add/remove classes depending on illumination levels
              if (illuminance < 20) {
                document.body.classList.remove('light');
                document.body.classList.add('dark');
                if (ghost) {
                  setTimeout( function() {
                    ghost.classList.add('active');
                  }, 1500);
                }
              }
              else if (illuminance > 30) {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
                if (ghost) {
                  setTimeout( function() {
                    ghost.classList.remove('active');
                  }, 1500);
                }
              }
            });

            // start sensor
            sensor.start();
          }

        }
      }).catch((err) => {
        return false;
      });
    }
  }
  catch(e) {
    return false;
  }
};
