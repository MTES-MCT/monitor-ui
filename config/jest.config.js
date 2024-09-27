/* eslint-disable @typescript-eslint/naming-convention */

export default {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/hooks/*.{ts,tsx}',
    '<rootDir>/src/utils/*.{ts,tsx}',
    '<rootDir>/src/**/utils.{ts,tsx}'
  ],
  maxWorkers: '50%',
  rootDir: '..',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{j,t}{s,sx}'],
  transform: {
    '.*\\.(j|t)sx?$': [
      '@swc/jest',
      {
        jsc: {
          baseUrl: './src',
          paths: {
            '@constants': ['constants.ts'],
            '@elements/*': ['elements/*'],
            '@fields/*': ['fields/*'],
            '@hooks/*': ['hooks/*'],
            '@libs/*': ['libs/*'],
            '@tables/*': ['tables/*'],
            '@theme': ['theme.ts'],
            '@types_/*': ['types/*'],
            '@utils/*': ['utils/*']
          },
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  transformIgnorePatterns: []
}
