import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import sveltePreprocess from "svelte-preprocess";

const pkg = require("./package.json");
const production = !process.env.ROLLUP_WATCH;

export default {
  input: pkg.svelte,
  output: {
    sourcemap: true,
    file: pkg.main,
    format: "umd",
    name: "dsengineer",
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: {
          plugins: [require("postcss-import")],
        },
      }),
      onwarn: (warning, handler) => {
        if (warning.code === "a11y-label-has-associated-control") return;
        handler(warning);
      },
      emitCss: false,
      compilerOptions: {
        generate: "ssr",
        hydratable: true,
        dev: !production,
      },
      css: (css) => {
        css.write("public/dist/bundle.css");
      },
    }),
    // see NOTICE below
    resolve(),
  ],
};
