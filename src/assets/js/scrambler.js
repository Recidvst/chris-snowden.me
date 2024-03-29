function _toConsumableArray(t){
  return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()
}function _arrayWithoutHoles(t){
  if(Array.isArray(t)){
    for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r
  }
}function _iterableToArray(t){
  if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)
}function _nonIterableSpread(){
  throw new TypeError("Invalid attempt to spread non-iterable instance")
}function Scramble(t,e){
  if(void 0===t)return!1;if("true"!==t.getAttribute("data-scramble-active")){
    t.setAttribute("data-scramble-active","true"),t.classList.add("scrambling");var r,n=t.textContent.split(""),a=t.innerHTML,i=n,o=t.textContent.split(""),u=[],c=e.speed?e.speed:100,s=!1;isValidString(e.text)?r=defineEndText(e.text,t):t.getAttribute("data-scramble-text")&&""!==t.getAttribute("data-scramble-text")&&(r=defineEndText(t.getAttribute("data-scramble-text"),t)),r&&(s=!0,n=r.truth,o=r.newLetters,i=r.startText);var l=setInterval(function(){
      if(i.map(function(r,a){
        return!(" \t\n\r\v".indexOf(r)>-1)&&(o[a]=randomChar(),setTimeout(function(){
          u[a]=!0
        },randomTime(isObject(e),e.random)),!0===u[a]&&(o[a]=n[a]),t.textContent=o.join(""),!0)
      }),killCheck(o,n)){
        if(t.innerHTML=a,s){
          var r=t.children[0];r&&""!==r?r.textContent=o.join(""):t.textContent=o.join("")
        }clearInterval(l),t.setAttribute("data-scramble-active","false"),t.classList.remove("scrambling")
      }
    },c)
  }return!0
}function ScramblerSetup(t){
  if(isValidArgType(t)){
    var e=setArgs(t,isObject(t));return _toConsumableArray(isObject(e)?document.querySelectorAll(e.target):document.querySelectorAll(e)).forEach(function(t){
      Scramble(t,e)
    }),!0
  }return!1
}var isObject=function(t){
    return!!t&&t.constructor===Object
  },isArray=function(t){
    return!!t&&t.constructor===Array
  },isBool=function(t){
    return"boolean"==typeof t
  },isValidString=function(t){
    return!(!t||""===t||!("string"==typeof t||t instanceof String))
  },isValidArgType=function(t){
    return!isArray(t)&&!isBool(t)&&"number"!=typeof t&&"function"!=typeof t&&void 0!==t
  },randomChar=function(t,e){
    var r=t||1,n=e||!1,a=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,r);return" \t\n\r\v".indexOf(a)<0&&!0!==n&&a
  },randomTime=function(t,e){
    return(t||!1)&&isArray(e)&&e.length>1?e[0]+(Math.random()*(1-e[1])+e[1]):-2999*Math.random()+3e3+1e3
  },setArgs=function(t,e){
    var r=e||!1,n={target:"[data-scrambler]",random:[1e3,3e3],speed:100,text:!1};return t&&r&&(n.target=void 0!==t.target?t.target:"[data-scrambler]",n.random=void 0!==t.random?t.random:[1e3,3e3],n.speed=void 0!==t.speed?t.speed:100,n.text=void 0!==t.text&&t.text),n
  },killCheck=function(t,e){
    return!(t.length!==e.length||!t.every(function(t,r){
      return t===e[r]
    }))
  },defineEndText=function(t,e){
    if(!t||void 0===t||!("string"==typeof t||t instanceof String))return!1;var r,n=t||e.textContent,a=n.split(""),i=n.split(""),o=[];return a.forEach(function(t,e){
      " \t\n\r\v".indexOf(a[e])>-1?o.push(" "):o.push(randomChar())
    }),r=o,{truth:a,newLetters:i,startText:r}
  },scrambler=function(){
    return ScramblerSetup
  }();export default scrambler;
