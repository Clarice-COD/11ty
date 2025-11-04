module.exports = function (eleventyConfig) {

    // Connecting CSS
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");

    // randomItem
    eleventyConfig.addFilter("randomItem", (arr) => {
        arr.sort(() => {
          return 0.5 - Math.random();
        });
        return arr.slice(0, 1);
      });

    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };