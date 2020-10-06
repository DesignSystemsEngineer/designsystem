const fs = require("fs");
const postcss = require("postcss");
const atImport = require("postcss-import");

console.log("CSS build started...");
const cssFilePath = "src/input.css";
console.log("\n==============================================");
console.log(`\nProcessing: [${cssFilePath}]`);
// css to be processed
const css = fs.readFileSync(cssFilePath, "utf8");

// process css
postcss()
  .use(atImport())
  .process(css, {
    // `from` option is needed here
    from: "src/input.css",
  })
  .then(function (result) {
    const output = result.css;
    const outputPath = "dist/output.css";
    fs.writeFileSync("dist/output.css", output, "utf8");
    console.log("\nEnd processing");
  });
