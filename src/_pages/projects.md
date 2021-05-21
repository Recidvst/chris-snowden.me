---
title: Projects
layout: default.njk
---

<section class="page-container page-container--two-col">

<div class="content-col content-col--full-width">

# {{ title }}

> I currently work as a **senior front-end developer** at {% externalLink 'https://pxpx.co.uk/', 'Pixel Pixel', 'Visit the Pixel Pixel website' %}, a full-service agency in Swindon, Wiltshire.

> Below is a brief list of the notable projects recently completed as part of my work.

> Unless otherwise mentioned, the projects consist of myself as either the sole or senior front-end developer, working in a team with 1 junior front-end developer, 1-2 backend developers & 1 designer (plus management/marketing).

</div>

<div class="content-col">
  
## App projects

---

### Video streaming platform

- Nuxt.js SPA with an OctoberCMS backend
- Custom video streaming
- Live FAQs chat with moderation
- Admin controls
- _Private_

### Timelapse camera companion application

- Vue.js SPA with an OctoberCMS backend
- Custom image viewing functionality
- Complex sorting/filtering/downloading
- Plain HTML landing page
- [Website](https://time-fire.com/ 'Timefire website'), _App private_

### Calendar/meeting booking application

- Vue.js SPA with an OctoberCMS backend
- Calendar/meeting room booking application
- Custom calendar functionality
- Full booking process
- _Private_

### Conveyancing quoting application

- Vue.js mini-app embedded within WordPress website
- Complex calculations based on user inputs and business data
- Integrated with WordPress REST API
- See {% externalLink 'https://www.roydswithyking.com/solicitors-for-life/property-conveyancing/how-much-will-my-conveyancing-cost/', 'Website', 'View app within roydswithyking website' %}

### Probate quoting application

- Vue.js mini-app embedded within WordPress website
- Complex calculations based on user inputs and business data
- Integrated with WordPress REST API
- See {% externalLink 'https://www.roydswithyking.com/solicitors-for-life/probate-and-estate-administration/probate-solicitor-calculator/', 'Website', 'View app within roydswithyking website' %}

### Debt recovery quoting application

- Vue.js mini-app embedded within WordPress website
- Complex calculations based on user inputs and business data
- Integrated with WordPress REST API
- See {% externalLink 'https://www.roydswithyking.com/solicitors-for-business/dispute-resolution/debt-recovery-service/', 'Website', 'View app within roydswithyking website' %}

### Internal client list application

- Vue.js SPA with data from multiple APIs
- Converted into an Electron application
- Collate and present client data for internal users - lots of data to present effectively
- _Private_

### Lighthouse performance tracking tool

- Svelte.js with a Go backend (sole developer)
- Internal tool to track Google Lighthouse scores across our websites
- Embeddable app & embeddable widget
- _Private_

</div>

<div class="content-col">

## Website builds

---

### ShoppingStar

- OctoberCMS
- Shopping website collating external product feeds
- Large amounts of custom data and complex product filters

### Wendy House Flowers

- OctoberCMS

### Carl Reader

- OctoberCMS

### Legal Futures

- WordPress

### Litigation Futures

- WordPress

### Firebird Films

- OctoberCMS

### Portman Clear Brace Group

- WordPress

### Frankly Recruitment (assisted)

- OctoberCMS

### Equimedia (assisted)

- WordPress

### PJElectrics

- WordPress

<br/>
<br/>

## Website retainers

---

### RWK

- WordPress

### CNT

- WordPress

### DNT

- WordPress

### HJA

- WordPress

### Product Focus

- WordPress

### Unividual

- WordPress

### Portman Dental Care

- CraftCMS

### Portman Smile Clinic

- CraftCMS

### Carlton

- WordPress

### RenderMedia

- Django

### Manchester Law Society

- WordPress

### Black Letter Communications

- WordPress

### Vinoteca

- WordPress

### I Have Cauda Equina

- WordPress

### Igniteff

- WordPress

### ProDetail

- WordPress

### Telco

- OctoberCMS

### Mogers Drewett

- WordPress

</div>

<div class="content-col content-col--full-width">

{%- from "../_includes/_macros/svelte/github_repos_widget.njk" import githubreposwidget -%}
{{ githubreposwidget() }}

</div>

</section>

<style>
.page-container--two-col {
  max-width: 1800px;
  margin: 0 auto;
}
@media (max-width: 1799px) {
.page-container--two-col {
  max-width: 100%;
}  
}
ul {
  list-style-type: circle;
  padding-left: 20px;
}
hr {
  margin-top: 15px;
  margin-bottom: 30px;
  border-color: #6c6f93;
}
a {
  color: #e9436f;
}
a:hover {
  color: #e95379;
}
i, em {
  color: #21bfc2
}
strong {
  text-decoration: underline;
}
blockquote {
  max-width: 800px;
  margin: auto;
}
@media (max-width: 799px) {
blockquote {
  max-width: 100%;
}
}
.github-repos-widget {
  margin: auto;
}
</style>
