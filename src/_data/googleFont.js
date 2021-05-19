const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function() {
  try {
    let url = "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
    let fontCSS = await Cache(url, {
      duration: "1y",
      type: "text",
      fetchOptions: {
        headers: {
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
        },
      },
    });
    let htmlStart = '<style>';
    let htmlEnd = '</style>';
    return htmlStart + fontCSS + htmlEnd;
  }
  catch(err) {
    console.error(err);
    return false;
  }
};
