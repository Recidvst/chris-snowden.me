
export default function() {

  if ( 'AmbientLightSensor' in window || window.AmbientLightSensor ) {
    console.log('ambient light sensor available');

    // create sensor
    const sensor = new AmbientLightSensor();
    sensor.start();

    // catch errors
    sensor.addEventListener('error', error => {
      console.error(error);
    });

    // watch for illumination change
    sensor.addEventListener('reading', () => {
      const illuminance = sensor.illuminance;

      // add/remove classes depending on illumination levels
      if (illuminance < 20) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
      }
      else if (illuminance > 30) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
      }
    });
  }

};
