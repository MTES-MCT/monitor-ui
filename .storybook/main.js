/* eslint-env node */

module.exports = {
  addons: ['@storybook/addon-essentials', 'storybook-addon-performance', '@storybook/addon-a11y'],
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    builder: 'webpack5'
  },
  // Messy issue with assert resolving (related to docs generation), fixed in Storybook v7.
  // https://github.com/storybookjs/storybook/issues/17458#issuecomment-1268464401
  webpackFinal: config => ({
    ...config,
    resolve: {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        assert: require.resolve('browser-assert')
      }
    }
  })
}
