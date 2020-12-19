const preprocess = require("svelte-preprocess");

module.exports = {
  onwarn: (warning, handler) => {
    if (warning.code === "a11y-label-has-associated-control") return;
    handler(warning);
  },
  emitCss: true,
  hotReload: false,
  dev: true,
  // preprocess: preprocess({
  //   postcss: true,
  // }),
};
