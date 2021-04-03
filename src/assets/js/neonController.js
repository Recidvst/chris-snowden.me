
// flicker function - class is added and then removed
export function flickerAction(target) {
  if (!target) return false;

  target.classList.add('fizzle');
  setTimeout(e => {
    target.classList.remove('fizzle');
  }, 810);
}

// trigger flicker every x secs(20 is a good default)
export function regularFlicker(interval = 20000) {
  const neonItems = [...document.querySelectorAll('.neon-title')];
  if (neonItems && Array.isArray(neonItems)) {
    neonItems.forEach( (item) => {
      setInterval(e => {
        flickerAction(item);
      }, interval);
    });
  }
}

// trigger flicker animation x ms after function called
export function delayedFlicker(time) {
  const neonItems = [...document.querySelectorAll('.neon-title')];
  if (neonItems && Array.isArray(neonItems)) {
    setTimeout(e => {
      neonItems.forEach( (item) => {
        flickerAction(item);
      });
    }, time);
  }
}

// trigger flicker when button is hovered
export function hoverWatch() {
  const neonItems = [...document.querySelectorAll('.neon-title')];
  if (neonItems && Array.isArray(neonItems)) {
    neonItems.forEach( (item) => {
      // mouse hover
      item.addEventListener('mouseover', () => {
        flickerAction(item);
      })
      // touch
      item.addEventListener('touchstart', () => {
        flickerAction(item);
      })
    });
  }
}
