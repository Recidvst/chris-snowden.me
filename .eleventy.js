const fs = require("fs");
const HumanReadable = require('human-readable-numbers');
const htmlmin = require("html-minifier");
const { PurgeCSS } = require('purgecss');
const environment = require('./src/_data/environment.js');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/static": "/"}); // pass static files like the favicon
  eleventyConfig.addPassthroughCopy({"src/assets/fonts": "/fonts"}); // pass fonts
  eleventyConfig.addPassthroughCopy({"src/assets/images": "/images"}); // pass images (will process these later)
  // pass through svelte components js & css
  eleventyConfig.addPassthroughCopy({"src/svelteComponents/github_repos_widget/public/build": "/svelteComponents/github_repos_widget"});

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('dist/404/index.html');
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

	eleventyConfig.addFilter("humanReadableNum", function(num) {
		return HumanReadable.toHumanString(num);
	});

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( environment.isProd && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addTransform('purge-and-inline-css', async (content, outputPath) => {
    if (!environment.isProd || !outputPath.endsWith('.html')) {
      return content;
    }

    const purgeCSSResults = await new PurgeCSS().purge({
      content: [{ raw: content }],
      css: ['./dist/main.css'],
      keyframes: true,
      variables: true,
      fontFace: true,
      safelist: [
        'tbc...'
      ]
    });

    return content.replace('<!-- INJECT INLINE CSS -->', '<style>' + purgeCSSResults[0].css + '</style>');
  });

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      layouts: '_layouts',
      output: 'dist',
    },
    // Allows using markup and njk features in markdown
    dataTemplateEngine: "njk",
    markdownTemplateEngine: 'njk',
    templateFormats: [
      'html',
      'njk',
      'md',
    ],
  };
};
