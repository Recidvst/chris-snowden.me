
export function randColour() { // util fn to randomise icon colour
  let col = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  while ( col === '#000000' ) col = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  return col;
}

export function triggerDraw(path, draw = true) {
  if (path === undefined) return false; // check for path
  // set random duration
  let duration = Math.floor(Math.random() * (5000) + 5000);
  let length = path.getTotalLength(); // path length
  path.style.transition = `stroke-dashoffset ${duration / 1000}s ease-in-out, stroke 1s ease-in`; // animate the stroke

  if (draw) { // draw in
    path.style.strokeDashoffset = 0;
    path.style.stroke = `${randColour()}`; // colour change
    setTimeout( () => {
      path.style.strokeDashoffset = length;
      triggerDraw(path, false); // recusively call self
    }, duration);
  }
  else { // draw out
    path.style.strokeDashoffset = length;
    path.style.stroke = `${randColour()}`; // colour change
    setTimeout( () => {
      path.style.strokeDashoffset = 0;
      triggerDraw(path, true); // recusively call self
    }, duration);
  }
}

export function linesStart() {
  const svgPaths = [...document.querySelectorAll('.svgLinesContainer path')];
  if (svgPaths && Array.isArray(svgPaths)) {
    svgPaths.forEach((path) => {
      path.style.strokeDasharray = path.getTotalLength();
      path.style.strokeWidth = '2px';
      let delay = Math.floor(Math.random() * (900) + 100);
      setTimeout(() => {
        triggerDraw(path, true);
      }, delay);
    });
  }
}

