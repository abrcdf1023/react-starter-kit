'use strict'
const path = require('path')
module.exports = {
  env: {
    browser: true,
    "jest/globals": true
  },
  plugins: ["jest"],
  extends: "airbnb",
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  rules: {
    semi: ["error", "never"],
    "jsx-a11y/anchor-is-valid": ["error", {
      components: ["Link"],
      specialLink: ["to"]
    }],
    'import/no-extraneous-dependencies': ["error", { devDependencies: true, }]
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: path.resolve(__dirname, './build/webpack.base.config.js'),
      }
    }
  }
}


