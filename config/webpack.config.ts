/**
 * This file is a custom Webpack config used for Cypress component testing
 * in order to handle Typecript as well as CSS and fonts.
 *
 * It's included in `cypress.config.ts`.
 *
 * @see https://docs.cypress.io/guides/component-testing/react/overview#React-with-Webpack
 */

import type { Configuration } from 'webpack'

export const config: Configuration = {
  devtool: 'eval-source-map',
  mode: 'development',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        parser: { amd: false }
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
          options: {
            // Skip type-checking for speed
            transpileOnly: true
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}
