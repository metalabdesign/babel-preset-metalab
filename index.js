/* eslint import/no-require: 0 */
module.exports = {
  env: {
    test: {
      plugins: [
        [ require('babel-plugin-transform-adana'), {
          ignore: 'test/**/*',
        } ],
      ],
    },
  },
  plugins: [
    // React
    [ require('babel-plugin-transform-react-jsx'), {
      pragma: 'createElement',
    } ],
    require('babel-plugin-transform-flow-strip-types'),
    require('babel-plugin-syntax-flow'),
    require('babel-plugin-syntax-jsx'),

    // Class Properties
    require('babel-plugin-syntax-class-properties'),
    require('babel-plugin-transform-class-properties'),

    // ES2015
    require('babel-plugin-transform-es2015-template-literals'),
    require('babel-plugin-transform-es2015-literals'),
    require('babel-plugin-transform-es2015-function-name'),
    require('babel-plugin-transform-es2015-arrow-functions'),
    require('babel-plugin-transform-es2015-block-scoped-functions'),
    require('babel-plugin-transform-es2015-classes'),
    require('babel-plugin-transform-es2015-object-super'),
    require('babel-plugin-transform-es2015-shorthand-properties'),
    require('babel-plugin-transform-es2015-computed-properties'),
    require('babel-plugin-transform-es2015-for-of'),
    require('babel-plugin-transform-es2015-sticky-regex'),
    require('babel-plugin-transform-es2015-unicode-regex'),
    require('babel-plugin-transform-es2015-constants'),
    require('babel-plugin-transform-es2015-spread'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-block-scoping'),
    require('babel-plugin-transform-es2015-typeof-symbol'),
    require('babel-plugin-transform-es2015-modules-commonjs'),
    require('babel-plugin-transform-regenerator'),

    // Object rest spread
    require('babel-plugin-syntax-object-rest-spread'),
    require('babel-plugin-transform-object-rest-spread'),

    // Trailing function commas
    require('babel-plugin-syntax-trailing-function-commas'),

    // Function bind syntax
    require('babel-plugin-syntax-function-bind'),
    require('babel-plugin-transform-function-bind'),

    // Object assign polyfill
    require('babel-plugin-transform-object-assign'),

    // Transfrom modules to commonjs
    require('babel-plugin-transform-es2015-modules-commonjs'),
  ],
};
