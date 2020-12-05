import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

const pkg = require("./package.json");

export default {
  input: pkg.svelte,
  output: { file: pkg.main, format: "umd", name: "dsengineer" },
  plugins: [
    svelte({
      compilerOptions: {
        generate: "ssr",
        hydratable: true,
      },
    }),
    // see NOTICE below
    resolve(),
    postcss({
      plugins: [require("postcss-import")],
    }),
  ],
};
