const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [require("postcss-import")],
    },
  }),
  onwarn: (warning, handler) => {
    if (warning.code === "a11y-label-has-associated-control") return;
    handler(warning);
  },
  emitCss: true,
  hotReload: false,
  dev: true,
};
