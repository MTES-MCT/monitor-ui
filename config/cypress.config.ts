import { defineConfig } from 'cypress'

const IS_CI = Boolean(process.env.CI)

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:6006`,
    excludeSpecPattern: 'e2e/release/',
    specPattern: 'e2e/**/*.spec.ts',
    supportFile: false
  },
  projectId: 'monitor-ui',
  retries: {
    openMode: 0,
    runMode: 0
  },
  screenshotOnRunFailure: true,
  scrollBehavior: false,
  video: true,
  viewportHeight: 1024,
  viewportWidth: 1280,
  waitForAnimations: true
})
