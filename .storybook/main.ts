import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials', 'storybook-addon-performance', '@storybook/addon-a11y'],
  docs: {
    autodocs: 'tag'
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../stories/**/*.stories.@(mdx|ts|tsx)']
}

// eslint-disable-next-line import/no-default-export
export default config
