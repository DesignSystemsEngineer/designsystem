const StyleDictionary = require("style-dictionary");
const CSSVarsFormatter = require("./css-vars-formatter");

const fs = require("fs");

StyleDictionary.registerFormat({
  name: "css/deep-variables",
  formatter: CSSVarsFormatter,
});

StyleDictionary.registerTransform({
  name: "attribute/sets",
  type: "attribute",
  matcher: (prop) => {
    return prop.hasOwnProperty("sets");
  },
  transformer: (prop, options) => {
    const attributes = prop.attributes || {};
    attributes.sets = prop.sets;
    return attributes;
  },
});

StyleDictionary.registerTransform({
  name: "value/sets",
  type: "value",
  matcher: (prop) => {
    return prop.attributes.hasOwnProperty("sets");
  },
  transformer: (prop, options) => {
    let value = prop.value;
    for (const setKey in prop.sets) {
      if (options.sets.includes(setKey)) {
        value = prop.attributes.sets[setKey];
      }
    }
    return value;
  },
});

const setRegex = /@(\w+):(\w+)/;

const defaultFile = {
  destination: "default.css",
  options: { showFileHeader: false },
  format: "css/deep-variables",
};
const defaultPlatform = {
  transforms: [
    "attribute/sets",
    "value/sets",
    "attribute/cti",
    "name/cti/kebab",
    "time/seconds",
    "content/icon",
  ],
  buildPath: "lib/",
  deep: true,
  sets: ["large"],
  prefix: "dse",
  files: [defaultFile],
};

const config = {
  source: ["properties/**/*.json"],
  platforms: {
    "CSS: Scale Medium": {
      ...defaultPlatform,
      ...{
        sets: ["medium"],
        files: [
          {
            ...defaultFile,
            ...{
              destination: "medium.css",
              filter: (prop) => {
                return (
                  prop.attributes.hasOwnProperty("sets") &&
                  prop.attributes.sets.hasOwnProperty("medium")
                );
              },
            },
          },
        ],
      },
    },
    "CSS: Default with Large Scale": defaultPlatform,
  },
};

StyleDictionaryExtended = StyleDictionary.extend(config);
StyleDictionaryExtended.buildAllPlatforms();
