/* eslint-disable sort-keys-fix/sort-keys-fix, @typescript-eslint/naming-convention */

const path = require('path')

module.exports = {
  extends: '@ivangabriele/eslint-config-typescript-base',
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    extraFileExtensions: [],
    project: path.join(__dirname, 'tsconfig.json')
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off',

    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'error',
    'cypress/no-force': 'error',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',

    'import/no-extraneous-dependencies': ['error', { devDependencies: true, peerDependencies: true }]
  }
}
