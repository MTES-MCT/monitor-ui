import { defineConfig } from 'cypress'
import { platform } from 'os'
import { config as webpackConfig } from './webpack.config'

const DOMAIN = platform() === 'darwin' ? '0.0.0.0' : 'localhost'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig
    },
    // indexHtmlFile: `${process.cwd()}/config/cypress/support/component-index.html`,
    specPattern: 'e2e/base/**/*.spec.tsx',
    supportFile: 'config/cypress/support/component.ts'
  },
  e2e: {
    baseUrl: `http://${DOMAIN}:3000`,
    specPattern: 'e2e/release/**/*.spec.ts',
    excludeSpecPattern: 'e2e/release/sample/**',
    supportFile: 'config/cypress/support/e2e.ts'
  },
  projectId: 'monitor-ui',
  retries: {
    openMode: 0,
    runMode: 0
  },
  screenshotOnRunFailure: true,
  scrollBehavior: false,
  video: false,
  viewportHeight: 1024,
  viewportWidth: 1280,
  waitForAnimations: true
})
