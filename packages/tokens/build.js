const StyleDictionaryPackage = require("style-dictionary");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(source, destination) {
  return {
    source: [source],
    platforms: {
      css: {
        transforms: [
          "attribute/cti",
          "name/cti/kebab",
          "time/seconds",
          "content/icon",
          "color/css",
        ],
        buildPath: `build/css/`,
        prefix: "dse",
        files: [
          {
            destination: destination,
            format: "css/variables",
          },
        ],
      },
    },
  };
}

console.log("Tokens build started...");

[
  {
    name: "medium",
    source: "src/scales/medium/*.json",
    destination: "medium.css",
  },
  {
    name: "large",
    source: "src/scales/large/*.json",
    destination: "large.css",
  },
  {
    name: "globals",
    source: "src/globals/**/*.json",
    destination: "globals.css",
  },
].map(function (tokenGroup) {
  console.log("\n==============================================");
  console.log(`\nProcessing: [${tokenGroup.name}]`);
  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(tokenGroup.source, tokenGroup.destination)
  );
  StyleDictionary.buildAllPlatforms();
  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
