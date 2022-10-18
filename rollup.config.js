import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

module.exports = {
  external: ['date-fns', 'dayjs', 'ramda', 'rsuite', 'tslib', 'type-fest'],

  input: './src/index.ts',

  output: [
    {
      dir: './dist',
      format: 'es',
      preserveModules: true,
      sourcemap: true
    }
  ],

  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions: ['css', '.js', 'json', '.jsx', '.ts', '.tson', '.tsx', 'woff', 'woff2'],
      ignoreSideEffectsForRoot: true
    }),
    // Convert CommonJS to ES6:
    commonjs(),
    // Transpile TS & TSX to JS:
    typescript({
      tsconfig: './tsconfig.dist.json'
    })
    // Hack to make styled-component compatible with Next.js inability to fully support ESM:
    // replace({
    //   '= styled(': '= (styled.default || styled)(',
    //   '= styled.': '= (styled.default || styled).',
    //   delimiters: ['', ''],
    //   preventAssignment: false
    // })
  ]
}
