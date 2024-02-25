/* eslint-disable @typescript-eslint/naming-convention */

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        measure: false,
        outline: false
      }
    },
    '@storybook/addon-storysource',
    'storybook-addon-performance',
    '@storybook/addon-a11y'
  ],
  docs: {
    autodocs: false,
    defaultName: 'Documentation'
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.tsx']
}

// eslint-disable-next-line import/no-default-export
export default config
