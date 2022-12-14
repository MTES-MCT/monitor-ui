import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import url from '@rollup/plugin-url'

module.exports = {
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
      extensions: ['css', '.js', 'json', '.jsx', '.ts', '.tson', '.tsx'],
      ignoreSideEffectsForRoot: true
    }),
    // Convert CommonJS to ES6:
    commonjs(),
    // Transpile TS & TSX to JS:
    typescript({
      tsconfig: './tsconfig.dist.json'
    })
  ]
}
