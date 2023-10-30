/* eslint-disable import/no-default-export, @typescript-eslint/naming-convention */

import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
// TODO This is a temporary fix.
import peerDepsExternal from '@chrisneedham/rollup-plugin-peer-deps-external'
import { swc } from 'rollup-plugin-swc3'

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
      // Convert CommonJS to ES6:
      commonjs(),
      nodeResolve({
        extensions: ['.css', '.cjs', '.js', '.json', '.jsx', '.mjs', '.ts', '.tson', '.tsx'],
        preferBuiltins: true
      }),
      // Transpile TS & TSX to JS:
      swc({
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
      swc({
        tsconfig: './src/cypress/tsconfig.dist.json'
      })
    ]
  }
]
