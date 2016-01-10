# babel-preset-metalab

Optimal reconfigured babel settings. Includes optional compatibility presets for targeting potato browsers.

![build status](http://img.shields.io/travis/metalabdesign/babel-preset-metalab/master.svg?style=flat)
![license](http://img.shields.io/npm/l/babel-preset-metalab.svg?style=flat)
![version](http://img.shields.io/npm/v/babel-preset-metalab.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/babel-preset-metalab.svg?style=flat)

`$ npm install @metalab/babel-preset-metalab`

Example usage in `.babelrc`:
```json
{
  "presets": [
    "metalab",
    "metalab/compatibility"
  ],
  "env": {
    "development": {
      "sourceMaps": true
    }
  }
}
```
