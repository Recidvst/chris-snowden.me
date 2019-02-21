const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Chris Snowden | Front-End Developer",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Chris Snowden is a Front-End Developer from the UK. He specialises in Javascript and CSS and is proficient at building modern web sites and web applications using CMSs such as WordPress and modern web frameworks including Vue.js' },
      {
        hid: "keywords",
        name: "keywords",
        content: "Chris Snowden, Snowden, portfolio"
      },
      {
        hid: "author",
        name: "author",
        content: "Chris Snowden"
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' }
    ],
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ed1cdc' },

  /*
  ** Global CSS
  */
  css: [
    { src: "~assets/css/app.scss", lang: "sass" },
  ],
  vendor: ["~/assets/js/utils.js"],/*
  ** Plugins to load before mounting the App
  */

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: process.env.GA_ID || ''
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
