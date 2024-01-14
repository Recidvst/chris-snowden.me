# [chris-snowden.me](https://www.chris-snowden.me/ 'Personal website URL')

[![status](https://img.shields.io/website?url=https%3A%2F%2Fchris-snowden.me%2F)](https://www.chris-snowden.me/)
[![Azure Static Web Apps CI/CD](https://github.com/Recidvst/chris-snowden.me/actions/workflows/azure-static-web-apps-kind-wave-0f3b21203.yml/badge.svg?branch=master)](https://github.com/Recidvst/chris-snowden.me/actions/workflows/azure-static-web-apps-kind-wave-0f3b21203.yml)
[![status](https://img.shields.io/github/package-json/v/Recidvst/chris-snowden.me)](https://github.com/Recidvst/chris-snowden.me)

> Personal website/portfolio - Inspired by vaporwave/outrun aesthetic

---

## Stack

- [Eleventy](https://www.11ty.dev/ 'Eleventy docs site')
  - Generate the static site pages
  - Run local dev server
  - Pass through static assets
  - Minify CSS
  - Minify HTML
  - Implement PurgeCSS and dynamic inlining
  - Build service worker
  - Build sitemap
- [Rollup](https://rollupjs.org/guide/en/ 'Rollup docs site')
  - Transpile ES6
  - Compile SCSS
  - Lint JS
  - Minify JS
  - Compile sourcemaps
- [Svelte](https://svelte.dev/ 'Svelte docs site')
  - Fetching GitHub repo data
  - Displaying dynamic widget components
- [Commitlint](https://github.com/conventional-changelog/commitlint 'Commitlint GitHub repo') and [Husky](https://github.com/typicode/husky 'Husky GitHub repo')
  - Enforcing a consistent commit style
  - Linting & beautifying before committing
- [Azure](https://azure.microsoft.com/en-gb/ 'Azure website')
  - Hosted as a Static Web App
  - SWA deployed via Github Actions
  - Serverless function app for contact form submission
- [Speedlify](https://github.com/zachleat/speedlify 'Speedlify GitHub repo')
  - Automated lighthouse speed testing

### TODO

- Fix/tweak PWA
