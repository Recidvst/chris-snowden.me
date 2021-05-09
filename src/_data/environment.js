module.exports = {
  isDev: process.env.ELEVENTY_ENV === 'development' || process.env.NODE_ENV === 'development',
  isProd: process.env.ELEVENTY_ENV === 'production' || process.env.NODE_ENV === 'production',
  eleventyEnv: process.env.ELEVENTY_ENV,
  siteVersion: process.env.SITE_VERSION || 0,
  analytics: {
    gtag: {
      ID: 'UA-79424773-6',
    },
  },
};
