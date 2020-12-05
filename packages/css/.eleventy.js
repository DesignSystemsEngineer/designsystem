module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ lib: "css" });
  eleventyConfig.addPassthroughCopy({ "../tokens/lib": "css" });
  eleventyConfig.addPassthroughCopy({ "../tokens/assets": "img" });
  return {
    dir: {
      input: "pages",
    },
  };
};
