import { defineConfig } from 'cypress'
import { config as webpackConfig } from './webpack.config'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig
    },
    specPattern: 'e2e/base/**/*.spec.tsx',
    supportFile: 'config/cypress/support/component.ts'
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
