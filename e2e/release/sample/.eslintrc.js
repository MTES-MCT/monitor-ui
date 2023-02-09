const path = require('path')

module.exports = {
  root: true,
  extends: '@ivangabriele/eslint-config-typescript-react',
  env: {
    browser: true,
    node: false
  },
  parserOptions: {
    ecmaVersion: 2022,
    project: path.join(__dirname, 'tsconfig.json')
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
