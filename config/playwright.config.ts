import { devices } from '@playwright/test'

import type { PlaywrightTestConfig } from '@playwright/test'

const { CI } = process.env
const IS_CI = Boolean(CI)

const config: PlaywrightTestConfig = {
  expect: {
    timeout: 10000
  },
  forbidOnly: IS_CI,
  maxFailures: 1,
  projects: [
    {
      name: 'FIREFOX DESKTOP',
      use: {
        ...devices['Desktop Firefox'],
        viewport: {
          height: 720,
          width: 1280
        }
      }
    }
  ],
  reportSlowTests: null,
  retries: 2,
  testDir: '../e2e',
  timeout: 30000,
  use: {
    bypassCSP: true,
    headless: IS_CI,
    trace: 'retain-on-failure',
    video: {
      mode: 'retain-on-failure',
      size: {
        height: 720 * 2,
        width: 1280 * 2
      }
    }
  },
  workers: 1
}

export default config
