/* eslint-disable sort-keys-fix/sort-keys-fix, @typescript-eslint/naming-convention */

const path = require('path')

const BOOLEAN_CAMEL_PREFIXES = [
  ...['can', 'did', 'is', 'had', 'has', 'must', 'should', 'was', 'will', 'with'],
  ...['$can', '$did', '$is', '$had', '$has', '$must', '$should', '$was', '$will', '$with']
]
const BOOLEAN_UPPER_PREFIXES = ['CAN_', 'DID_', 'IS_', 'HAD_', 'HAS_', 'MUST_', 'SHOULD_', 'WAS_', 'WILL_', 'WITH_']

module.exports = {
  extends: '@ivangabriele/eslint-config-typescript-react',
  env: {
    browser: true,
    node: false
  },
  parserOptions: {
    ecmaVersion: 2022,
    project: path.join(__dirname, 'tsconfig.json')
  },
  ignorePatterns: [
    '!/.storybook/',
    '/.storybook/main.js',
    '/config/',
    '/dist/',
    '/e2e/release/sample/',
    '/scripts/',
    '/src/cypress/',
    '/storybook-static/',
    '.eslintrc.js',
    'rollup.config.js'
  ],
  rules: {
    // We must add PascalCase in formats because ESLint trim the prefix before evaluating the case
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md#format-options
    // > Note: As documented above, the prefix is trimmed before format is validated,
    // > therefore PascalCase must be used to allow variables such as isEnabled using the prefix is.
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        filter: {
          regex: '^LEGACY_',
          match: false
        }
      },
      {
        selector: 'accessor',
        types: ['boolean'],
        format: ['camelCase', 'PascalCase'],
        prefix: BOOLEAN_CAMEL_PREFIXES
      },
      {
        selector: 'classProperty',
        types: ['boolean'],
        format: ['camelCase', 'PascalCase'],
        prefix: BOOLEAN_CAMEL_PREFIXES
      },
      {
        selector: 'objectLiteralProperty',
        types: ['boolean'],
        format: ['camelCase', 'PascalCase'],
        prefix: BOOLEAN_CAMEL_PREFIXES
      },
      {
        selector: 'parameter',
        types: ['boolean'],
        format: ['camelCase', 'PascalCase'],
        prefix: BOOLEAN_CAMEL_PREFIXES
      },
      {
        selector: 'parameterProperty',
        types: ['boolean'],
        format: ['camelCase', 'PascalCase'],
        prefix: BOOLEAN_CAMEL_PREFIXES
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        prefix: [...BOOLEAN_CAMEL_PREFIXES, ...BOOLEAN_UPPER_PREFIXES]
      }
    ],

    '@typescript/no-use-before-define': 'off',

    '@typescript-eslint/no-use-before-define': 'off',

    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],

    'no-null/no-null': 'error',

    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-props-no-spreading': 'off',
    // See https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/#you-may-not-need-defaultprops
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  overrides: [
    {
      files: ['./e2e/**/*.js', './e2e/**/*.ts', './e2e/**/*.tsx', './src/cypress/**/*.ts'],
      plugins: ['cypress'],
      env: {
        browser: false,
        node: true
      },
      rules: {
        '@typescript-eslint/naming-convention': 'off',

        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/assertion-before-screenshot': 'error',
        'cypress/no-force': 'error',
        'cypress/no-async-tests': 'error',
        'cypress/no-pause': 'error'
      }
    },
    {
      files: ['./scripts/**/*.js'],
      env: {
        browser: false,
        node: true
      },
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
      }
    },
    {
      files: ['./stories/**/*.stories.tsx'],
      rules: {
        'no-underscore-dangle': 'off',

        '@typescript-eslint/naming-convention': 'off',

        'import/no-default-export': 'off',

        'react/destructuring-assignment': 'off',
        'react/function-component-definition': 'off',

        'sort-keys-fix/sort-keys-fix': 'off'
      }
    }
  ]
}
