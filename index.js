module.exports = {
  presets: ["es2015", "react"],
  plugins: [
    // http://babeljs.io/docs/plugins/syntax-object-rest-spread
    "syntax-object-rest-spread",
    // http://babeljs.io/docs/plugins/transform-object-rest-spread
    "transform-object-rest-spread",

    // http://babeljs.io/docs/plugins/syntax-trailing-function-commas
    "syntax-trailing-function-commas",

    // http://babeljs.io/docs/plugins/syntax-class-properties
    "syntax-class-properties",
    // http://babeljs.io/docs/plugins/transform-class-properties
    "transform-class-properties",

    // http://babeljs.io/docs/plugins/syntax-function-bind
    "syntax-function-bind",
    // http://babeljs.io/docs/plugins/transform-function-bind
    "transform-function-bind",

    // http://babeljs.io/docs/plugins/transform-object-assign/
    "transform-object-assign",

    // http://babeljs.io/docs/plugins/transform-node-env-inline/
    "transform-node-env-inline",

    "transform-es2015-modules-commonjs",
  ],
};
