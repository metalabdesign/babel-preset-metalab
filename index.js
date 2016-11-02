/* eslint-disable import/no-require */
/* eslint-disable no-console */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

module.exports = function(_, options, _params) {
  var extra = [];
  var params = _params || {};
  var dirname = params.dirname;

  if (!dirname) {
    console.warn('Your version of `babel-core` is likely too old.');
    console.warn('Path resolution is not enabled.');
  } else {
    extra.push([require('babel-plugin-module-resolver').default, {
      cwd: dirname,
      alias: {
        // This will cause require paths starting with `/` to resolve to the
        // `src` directory. i.e. `/app.js` resolves to `src/app.js`.
        '': './src',
      },
    }]);
  }

  return {
    presets: [
      [require.resolve('babel-preset-env'), options],
    ],
    env: {
      intl: {
        plugins: [
          [require('babel-plugin-react-intl'), {
            messagesDir: './dist/messages/',
          }],
        ],
      },
      development: {
        plugins: [
          require('babel-plugin-transform-react-jsx-self'),
          require('babel-plugin-transform-react-jsx-source'),
        ],
      },
      production: {
        plugins: [
          require('babel-plugin-transform-react-constant-elements'),
          require('babel-plugin-transform-react-inline-elements'),
        ],
      },
      test: {
        plugins: [
          [require('babel-plugin-transform-adana'), {
            ignore: 'test/**/*',
          }],
        ],
      },
    },
    plugins: [
      // React
      [require('babel-plugin-transform-react-jsx'), {
        pragma: 'createElement',
      }],
      require('babel-plugin-syntax-jsx'),

      // Flow
      require('babel-plugin-transform-flow-strip-types'),
      require('babel-plugin-syntax-flow'),

      // Export extensions
      require('babel-plugin-syntax-export-extensions'),

      // Class Properties
      require('babel-plugin-syntax-class-properties'),
      require('babel-plugin-transform-class-properties'),

      // Object rest spread
      require('babel-plugin-syntax-object-rest-spread'),
      require('babel-plugin-transform-object-rest-spread'),

      // Trailing function commas
      require('babel-plugin-syntax-trailing-function-commas'),

      // Function bind syntax
      require('babel-plugin-syntax-function-bind'),
      require('babel-plugin-transform-function-bind'),
    ].concat(extra),
  };
};
