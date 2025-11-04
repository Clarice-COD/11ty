module.exports = function (eleventyConfig) {

    // Connecting CSS
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");

    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };