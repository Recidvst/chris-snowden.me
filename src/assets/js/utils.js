// matchheight elements
export function matchSomeHeights(array) {
  if (!array) return false;
  setTimeout(time => {
    let heights = [];
    array.forEach(top => {
      let insideHeight = window
        .getComputedStyle(top, null)
        .getPropertyValue("height");
      heights.push(parseInt(insideHeight));
    });
    let biggest = Math.max(...heights);
    array.forEach(top => {
      top.style.height = biggest + "px";
    });
  }, 250);
}

// truncate text
export function truncateText(element, maxLength) {
  let truncated = String(element);
  if (truncated.length > maxLength) {
    truncated = truncated.substr(0, maxLength) + " ...";
  }
  return truncated;
}

// debounce event listeners
export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// object checks
export function isObject(o) {
  return (
    !!o &&
		o.constructor === Object &&
		Object.keys(o).length !== 0 &&
		typeof o !== "undefined"
  );
}

// is email?
export function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

// copy to clipboard
export function copyToClipboard(str) {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

// simple parallax
export function parallax() {
  const parallaxElements = [...document.getElementsByClassName("parallax")];

  const parallax = function (img) {
    const speed = 40;
    let pos = window.pageYOffset / speed + "px";
    img.style.backgroundPosition = `center ${pos}`;
  };

  window.addEventListener("scroll", function (e) {
    parallaxElements.map(img => {
      parallax(img);
    });
  }, {passive: true});
}
