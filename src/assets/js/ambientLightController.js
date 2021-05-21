
export default function() {

  if ( 'AmbientLightSensor' in window || window.AmbientLightSensor ) {
    // console.log('ambient light sensor available');

    // create sensor
    const sensor = new AmbientLightSensor();
    sensor.start();

    // catch errors
    sensor.addEventListener('error', error => {
      // console.error(error);
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
  }

};
