/* eslint-disable @typescript-eslint/naming-convention */

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials', 'storybook-addon-performance', '@storybook/addon-a11y'],
  docs: {
    autodocs: true
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../stories/**/*.stories.@(mdx|ts|tsx)']
}

// eslint-disable-next-line import/no-default-export
export default config
