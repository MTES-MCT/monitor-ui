/* eslint-disable import/no-default-export, @typescript-eslint/naming-convention */

import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    external: ['rsuite/locales/fr_FR'],

    input: './src/index.ts',

    output: [
      {
        dir: './dist',
        format: 'es',
        preserveModules: false,
        sourcemap: true
      }
    ],

    plugins: [
      peerDepsExternal(),
      url({
        include: ['**/*.woff2'],
        limit: Infinity
      }),
      nodeResolve({
        extensions: ['css', '.js', 'json', '.jsx', '.ts', '.tson', '.tsx']
      }),
      // Convert CommonJS to ES6:
      commonjs(),
      // Transpile TS & TSX to JS:
      typescript({
        tsconfig: './tsconfig.dist.json'
      })
    ]
  },

  {
    input: './src/cypress/index.ts',

    output: [
      {
        dir: './dist/cypress',
        format: 'es',
        preserveModules: false,
        sourcemap: true
      }
    ],

    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: ['.js', 'json', '.ts', '.tson']
      }),
      // Convert CommonJS to ES6:
      commonjs(),
      // Transpile TS & TSX to JS:
      typescript({
        tsconfig: './src/cypress/tsconfig.dist.json'
      })
    ]
  }
]
