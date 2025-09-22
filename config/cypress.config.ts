/* eslint-disable @typescript-eslint/naming-convention */

import { defineConfig } from 'cypress'
import { devServer } from '@cypress/vite-dev-server'
import { platform } from 'os'
import viteConfig from '../vite.config.cypress'

const DOMAIN = platform() === 'darwin' ? '0.0.0.0' : 'localhost'
const IS_CI = !!process.env.CI

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: 'react',
        viteConfig: {
          ...viteConfig,
        },
      })
    },
    indexHtmlFile: `config/cypress/support/component-index.html`,
    specPattern: 'e2e/base/**/*.spec.tsx',
    supportFile: 'config/cypress/support/component.ts'
  },
  e2e: {
    baseUrl: `http://${DOMAIN}:3000`,
    excludeSpecPattern: 'e2e/release/sample/**',
    specPattern: 'e2e/release/**/*.spec.ts',
    supportFile: 'config/cypress/support/e2e.ts'
  },
  projectId: 'juvjsi',
  retries: {
    openMode: 0,
    // Normally all e2e tests are perfectly non-flaky.
    // However there are some failures on the first run for a few e2e tests because of this Cypress issue:
    // https://github.com/cypress-io/cypress/issues/25913
    runMode: IS_CI ? 25 : 0
  },
  screenshotOnRunFailure: true,
  scrollBehavior: false,
  video: false,
  viewportHeight: 1024,
  viewportWidth: 1280,
  waitForAnimations: true
})
