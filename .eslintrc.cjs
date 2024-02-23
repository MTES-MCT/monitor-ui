/* eslint-disable sort-keys-fix/sort-keys-fix, @typescript-eslint/naming-convention */

const path = require('path')

const BOOLEAN_CAMEL_PREFIXES = [
  ...['can', 'did', 'is', 'had', 'has', 'must', 'should', 'was', 'will', 'with'],
  ...['$can', '$did', '$is', '$had', '$has', '$must', '$should', '$was', '$will', '$with']
]
const BOOLEAN_UPPER_PREFIXES = ['CAN_', 'DID_', 'IS_', 'HAD_', 'HAS_', 'MUST_', 'SHOULD_', 'WAS_', 'WILL_', 'WITH_']

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  plugins: ['prettier', 'sort-keys-fix', 'sort-destructure-keys', 'typescript-sort-keys', 'no-null'],
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
    '/storybook-static/',
    '.eslintrc.cjs',
    'rollup.config.js'
  ],
  rules: {
    curly: ['error', 'all'],
    'newline-before-return': 'error',
    'no-console': ['error', { allow: ['error', 'warn'] }],

    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
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
        format: ['PascalCase']
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
        prefix: BOOLEAN_CAMEL_PREFIXES,
        filter: {
          regex: '^(disabled|searchable)$',
          match: false
        }
      },
      {
        selector: 'parameter',
        types: ['boolean'],
        format: ['camelCase', 'PascalCase'],
        prefix: BOOLEAN_CAMEL_PREFIXES,
        filter: {
          regex: '^(disabled|searchable)$',
          match: false
        }
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
        prefix: [...BOOLEAN_CAMEL_PREFIXES, ...BOOLEAN_UPPER_PREFIXES],
        filter: {
          regex: '^(disabled|searchable)$',
          match: false
        }
      }
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, peerDependencies: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc'
        },
        groups: [['builtin', 'external', 'internal'], ['parent', 'index', 'sibling'], ['type'], ['object']],
        'newlines-between': 'always'
      }
    ],
    'import/prefer-default-export': 'off',

    'no-null/no-null': 'error',

    'prettier/prettier': 'error',

    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',

    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],

    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: false }],

    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error'
  },
  overrides: [
    {
      files: ['./e2e/**/*.ts', './e2e/**/*.tsx'],
      plugins: ['cypress', 'mocha'],
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
        'cypress/no-pause': 'error',

        'mocha/no-exclusive-tests': 'error',
        'mocha/no-skipped-tests': 'error'
      }
    },
    {
      files: ['./src/**/*.test.ts', './src/**/*.test.tsx'],
      plugins: ['jest'],
      env: {
        browser: true,
        jest: true,
        node: true
      },
      rules: {
        '@typescript-eslint/naming-convention': 'off',

        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error'
      }
    },
    {
      files: ['./src/cypress/**/*.ts'],
      plugins: ['cypress'],
      env: {
        browser: false,
        node: true
      },
      rules: {
        '@typescript-eslint/naming-convention': 'off',

        'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
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

        'jsx-a11y/control-has-associated-label': 'off',

        'react/destructuring-assignment': 'off',
        'react/function-component-definition': 'off'
      }
    }
  ]
}
