!function(){
  if(!("customElements"in window&&"fetch"in window))return;const t="speedlify-score";class s{
    constructor(){
      this.fetches={},this.responses={},this.urls={}
    }static normalizeUrl(t,s){
      return`${t}${t.endsWith("/")?"":"/"}`+(s.startsWith("/")?s.substr(1):s)
    }async fetch(t,e){
      if(this.urls[t])return!!this.urls[t][e]&&this.urls[t][e].hash;this.fetches[t]||(this.fetches[t]=fetch(s.normalizeUrl(t,"api/urls.json")));let i=await this.fetches[t];this.responses[t]||(this.responses[t]=i.json());let r=await this.responses[t];return this.urls[t]=r,!!r[e]&&r[e].hash
    }
  }const e=new s;customElements.define(t,class extends HTMLElement{
    connectedCallback(){
      this.speedlifyUrl=this.getAttribute("speedlify-url"),this.shorthash=this.getAttribute("hash"),this.rawData=this.getAttribute("raw-data"),this.url=this.getAttribute("url")||window.location.href,this.urlStore=e,this.rawData||this.speedlifyUrl?this.init():console.log(`Missing \`speedlify-url\` attributes in <${t}>`)
    }async init(){
      if(this.rawData){
        let t=JSON.parse(this.rawData);return this.setTimeAttributes(t),void(this.innerHTML=this.render(t))
      }let s=this.shorthash;if(s||(s=await this.urlStore.fetch(this.speedlifyUrl,this.url)),!s)return void console.error(`<${t}> could not find hash for URL: ${this.url}`);let e=await this.fetchData(s);this.setTimeAttributes(e),this.innerHTML=this.render(e)
    }async fetchData(t){
      let e=await fetch(s.normalizeUrl(this.speedlifyUrl,`api/${t}.json`));return await e.json()
    }setTimeAttributes(t){
      t.timestamp&&(this.setAttribute("title",`Results from ${this.timeAgo(t.timestamp)}`),this.setAttribute("data-timestamp",t.timestamp))
    }timeAgo(t){
      let s=Math.floor((new Date-t)/864e5);return`${s} day${1!=s?"s":""} ago`
    }getScoreClass(t){
      return t<.5?"speedlify-score speedlify-score-bad":t<.9?"speedlify-score speedlify-score-ok":"speedlify-score speedlify-score-good"
    }getScoreTemplate(t){
      let s=[];return s.push(`<span title="Performance" class="${this.getScoreClass(t.lighthouse.performance)}">${parseInt(100*t.lighthouse.performance,10)}</span>`),s.push(`<span title="Accessibility" class="${this.getScoreClass(t.lighthouse.accessibility)}">${parseInt(100*t.lighthouse.accessibility,10)}</span>`),s.push(`<span title="Best Practices" class="${this.getScoreClass(t.lighthouse.bestPractices)}">${parseInt(100*t.lighthouse.bestPractices,10)}</span>`),s.push(`<span title="SEO" class="${this.getScoreClass(t.lighthouse.seo)}">${parseInt(100*t.lighthouse.seo,10)}</span>`),s.join(" ")
    }render(t){
      let s=[],e=this.getScoreTemplate(t);(this.hasAttribute("requests")||this.hasAttribute("weight")||this.hasAttribute("rank"))&&!this.hasAttribute("score")||s.push(e);let i=t.weight.summary.split(" • ");if(this.hasAttribute("requests")&&s.push(`<span class="speedlify-requests">${i[0]}</span>`),this.hasAttribute("weight")&&s.push(`<span class="speedlify-weight">${i[1]}</span>`),this.hasAttribute("rank")){
        let e=this.getAttribute("rank-url");s.push(`<${e?`a href="${e}"`:"span"} class="speedlify-rank">${t.ranks.cumulative}</${e?"a":"span"}>`)
      }if(this.hasAttribute("rank-change")&&t.previousRanks){
        let e=t.previousRanks.cumulative-t.ranks.cumulative;s.push(`<span class="speedlify-rank-change ${e>0?"up":e<0?"down":"same"}">${0!==e?Math.abs(e):""}</span>`)
      }return s.join("")
    }
  })
}();
