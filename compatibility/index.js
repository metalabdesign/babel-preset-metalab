module.exports = {
  plugins: [
    // Object assign polyfill
    require("babel-plugin-transform-object-assign"),

    // Turn member expression reserved word properties into literals.
    require("babel-plugin-transform-es3-member-expression-literals"),

    // Turn reserved word property keys into literals.
    require("babel-plugin-transform-es3-property-literals"),

    // Transform named function expressions into function declarations.
    require("babel-plugin-transform-jscript"),

    // Transform `undefined` into `void 0`.
    require("babel-plugin-transform-undefined-to-void"),
  ],
};
