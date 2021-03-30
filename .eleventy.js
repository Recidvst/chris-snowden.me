const fs = require("fs");
const HumanReadable = require('human-readable-numbers');
const htmlmin = require("html-minifier");
const pwaPlugin = require('eleventy-plugin-pwa')

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/static": "/"}); // pass static files like the favicon
  eleventyConfig.addPassthroughCopy({"src/fonts": "/"}); // pass fonts

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

  eleventyConfig.addPlugin(pwaPlugin)

	eleventyConfig.addFilter("humanReadableNum", function(num) {
		return HumanReadable.toHumanString(num);
	});

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( process.env.ELEVENTY_PRODUCTION && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
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
