const FEATURE_SCOPES = [
  'components',
  'cypress',
  'elements',
  'entities',
  'fields',
  'formiks',
  'hooks',
  'icons',
  'libs',
  'symbols',
  'tables',
  'types',
  'utils',

  // For everything else
  'global'
]

// eslint-disable-next-line import/no-default-export
export default {
  $schema: 'https://json.schemastore.org/commitlintrc',
  extends: ['@commitlint/config-conventional'],
  helpUrl: 'https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit',
  plugins: ['selective-scope'],
  rules: {
    'body-max-length': [2, 'always', 'Infinity'],
    'body-max-line-length': [2, 'always', 'Infinity'],
    'footer-max-length': [2, 'always', 'Infinity'],
    'footer-max-line-length': [2, 'always', 'Infinity'],
    'header-max-length': [2, 'always', 120],
    'selective-scope': [
      2,
      'always',
      {
        feat: FEATURE_SCOPES,
        fix: FEATURE_SCOPES,
        style: FEATURE_SCOPES
      }
    ],
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'lint', 'perf', 'refactor', 'revert', 'style', 'test']
    ]
  }
}
