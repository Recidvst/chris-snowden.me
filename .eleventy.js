module.exports = function(eleventyConfig) {
  return {
    dir: {
      includes: '_components',
      input: 'src',
      layouts: '_layouts',
      output: 'dist',
    },
    // Allows using markup and EJS features in markdown
    markdownTemplateEngine: 'ejs',
    templateFormats: [
      'njk',
      'ejs',
      'md',
    ],
  };
};
