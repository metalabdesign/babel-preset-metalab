# babel-preset-metalab

Optimal reconfigured babel settings. Includes optional compatibility presets for targeting potato browsers.

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
