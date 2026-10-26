const { defineConfig, globalIgnores } = require('eslint/config')

const { fixupConfigRules, fixupPluginRules } = require('@eslint/compat')

const prettier = require('eslint-plugin-prettier')
const sortKeysFix = require('eslint-plugin-sort-keys-fix')
const sortDestructureKeys = require('eslint-plugin-sort-destructure-keys')
const typescriptSortKeys = require('eslint-plugin-typescript-sort-keys')
const noNull = require('eslint-plugin-no-null')
const globals = require('globals')
const cypress = require('eslint-plugin-cypress')
const jest = require('eslint-plugin-jest')
const js = require('@eslint/js')

const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})
const path = require('path')

const BOOLEAN_CAMEL_PREFIXES = [
  ...['are', 'can', 'did', 'is', 'had', 'has', 'must', 'should', 'was', 'will', 'with', 'without'],
  ...['$are', '$can', '$did', '$is', '$had', '$has', '$must', '$should', '$was', '$will', '$with', '$without']
]

const BOOLEAN_UPPER_PREFIXES = [
  'ARE_',
  'CAN_',
  'DID_',
  'IS_',
  'HAD_',
  'HAS_',
  'MUST_',
  'SHOULD_',
  'WAS_',
  'WILL_',
  'WITH_',
  'WITHOUT_'
]

// eslint-plugin-mocha is ESM-only (no "require" export condition)
module.exports = import('eslint-plugin-mocha').then(({ default: mocha }) =>
  defineConfig([
    {
      extends: fixupConfigRules(
        compat.extends(
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:react/recommended',
          'plugin:react/jsx-runtime',
          'plugin:react-hooks/recommended',
          'plugin:jsx-a11y/recommended',
          'plugin:import/recommended',
          'plugin:import/typescript',
          'prettier'
        )
      ),

      plugins: {
        prettier,
        'sort-keys-fix': fixupPluginRules(sortKeysFix),
        'sort-destructure-keys': fixupPluginRules(sortDestructureKeys),
        'typescript-sort-keys': fixupPluginRules(typescriptSortKeys),
        'no-null': noNull
      },

      languageOptions: {
        globals: {
          ...globals.browser,
          ...Object.fromEntries(Object.entries(globals.node).map(([key]) => [key, 'off']))
        },

        ecmaVersion: 2022,

        parserOptions: {
          project: path.join(__dirname, 'tsconfig.json')
        }
      },

      rules: {
        curly: ['error', 'all'],
        'newline-before-return': 'error',

        'no-console': [
          'error',
          {
            allow: ['error', 'warn']
          }
        ],

        'lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: true
          }
        ],

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
              regex: '^(_.*|checked|disabled|readOnly|searchable|value)$',
              match: false
            }
          },
          {
            selector: 'parameter',
            types: ['boolean'],
            format: ['camelCase', 'PascalCase'],
            prefix: BOOLEAN_CAMEL_PREFIXES,
            filter: {
              regex: '^(_.*|checked|disabled|readOnly|searchable|value)$',
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
              regex: '^(checked|disabled|readOnly|searchable|value)$',
              match: false
            }
          }
        ],

        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',

        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_'
          }
        ],

        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        'import/no-default-export': 'error',

        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            peerDependencies: true
          }
        ],

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

        'no-null/no-null': 'error',
        'prettier/prettier': 'error',
        'react/jsx-no-useless-fragment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-props': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',

        'sort-destructure-keys/sort-destructure-keys': [
          'error',
          {
            caseSensitive: false
          }
        ],

        'sort-keys-fix/sort-keys-fix': [
          'error',
          'asc',
          {
            caseSensitive: false,
            natural: false
          }
        ],

        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
        '@typescript-eslint/no-namespace': 'off',
        'react-hooks/set-state-in-effect': 'off',
        'react-hooks/refs': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off'
      },

      settings: {
        'import/resolver': {
          typescript: {
            project: path.join(__dirname, 'tsconfig.json')
          },

          node: true
        },

        react: {
          version: 'detect'
        }
      }
    },
    globalIgnores(['config/', 'coverage/', 'dist/', 'e2e/', 'scripts/', 'storybook-static/', 'eslint.config.cjs']),
    {
      files: ['./e2e/**/*.ts', './e2e/**/*.tsx'],

      plugins: {
        cypress,
        mocha
      },

      languageOptions: {
        globals: {
          ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off'])),
          ...globals.node
        }
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

      plugins: {
        jest
      },

      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.jest,
          ...globals.node
        }
      },

      rules: {
        '@typescript-eslint/naming-convention': 'off',

        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true
          }
        ],

        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error'
      }
    },
    {
      files: ['./src/cypress/**/*.ts'],

      plugins: {
        cypress
      },

      languageOptions: {
        globals: {
          ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off'])),
          ...globals.node
        }
      },

      rules: {
        '@typescript-eslint/naming-convention': 'off',

        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true
          }
        ]
      }
    },
    {
      files: ['./scripts/**/*.js'],

      languageOptions: {
        globals: {
          ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off'])),
          ...globals.node
        }
      },

      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true
          }
        ]
      }
    },
    {
      files: ['./stories/**/*.stories.tsx'],

      rules: {
        '@typescript-eslint/naming-convention': 'off',
        'import/no-default-export': 'off'
      }
    }
  ])
)
