/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  addons: ['@storybook/addon-essentials', 'storybook-addon-performance', '@storybook/addon-a11y'],
  docs: {
    autodocs: 'tag'
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(ts|tsx)']
}

export default config
