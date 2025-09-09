/* eslint-disable @typescript-eslint/naming-convention */

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  addons: [
    'storybook-addon-performance',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],

  docs: {
    defaultName: 'Documentation'
  },

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.tsx'],

  features: {
    backgrounds: false,
    measure: false,
    outline: false
  }
}

// eslint-disable-next-line import/no-default-export
export default config
