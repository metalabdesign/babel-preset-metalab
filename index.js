module.exports = {
  presets: ["es2015", "react"],
  plugins: [
    "syntax-object-rest-spread",
    "transform-es2015-modules-commonjs",
  ],
  sourceMaps: true,
  env: {
    production: {
      sourceMaps: false,
    },
  },
};
