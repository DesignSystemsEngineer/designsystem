const preprocess = require("svelte-preprocess");

module.exports = {
  dev: true,
  preprocess: preprocess({
    postcss: true,
  }),
};
