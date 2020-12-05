import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

const pkg = require("./package.json");

export default {
  input: "lib/index.js",
  output: { file: pkg.main, format: "umd", name: "dsengineer" },
  plugins: [
    svelte(),
    resolve(),
    postcss({
      plugins: [require("postcss-import")],
    }),
  ],
};
