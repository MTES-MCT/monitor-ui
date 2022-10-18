/* eslint-disable @typescript-eslint/naming-convention */

// eslint-disable-next-line no-undef
module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/utils/*.ts', '<rootDir>/src/**/utils.ts'],
  maxWorkers: '50%',
  rootDir: '..',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{j,t}{s,sx}'],
  transform: {
    '.*\\.(j|t)sx?$': [
      '@swc/jest',
      {
        jsc: {
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
