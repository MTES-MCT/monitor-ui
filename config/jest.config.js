/* eslint-disable @typescript-eslint/naming-convention */

export default {
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
          baseUrl: './src',
          paths: {
            '@elements/*': ['elements/*'],
            '@hooks/*': ['hooks/*'],
            '@libs/*': ['libs/*'],
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
