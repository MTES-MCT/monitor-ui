/* eslint-disable import/no-extraneous-dependencies, sort-keys-fix/sort-keys-fix, @typescript-eslint/naming-convention */

import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import analyzer from 'vite-bundle-analyzer'
import tsconfigPaths from 'vite-tsconfig-paths'

// Read deps/peerDeps to externalize them (avoid bundling into the library)
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))
const externals = [
  ...Object.keys(pkg.peerDependencies ?? {}),
  ...Object.keys(pkg.dependencies ?? {}),
  'rsuite/locales/fr_FR',
  'react/jsx-runtime'
]

// Treat id or its subpath as external if it matches any dep name
const isExternal = (id: string) => externals.some(dep => id === dep || id.startsWith(`${dep}/`))

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      // Optional: align CSS filename with entry if you emit CSS
      // cssFileName: entryName => `${entryName}.css`,

      // Two entry points: main and Cypress helpers
      entry: {
        index: path.resolve(__dirname, 'src/index.ts')
      },

      // Control file names to get dist/index.js and dist/cypress/index.js
      fileName: (_format, entryName) => `${entryName}.js`,

      // Only ES, like the current Rollup config
      formats: ['es']
    },
    outDir: 'dist',
    rollupOptions: {
      // Externalize peer deps and selected modules (e.g., rsuite locale, jsx-runtime)
      external: isExternal,
      output: {
        // Match current behavior (single bundle per entry)
        preserveModules: false
      }
    },
    sourcemap: false
  },
  plugins: [
    react(), // React 19-friendly; supports Vite 7 and Oxc transform in recent versions
    tsconfigPaths(), // makes tsconfig "paths" work in Vite
    analyzer({ analyzerMode: 'static', summary: true, openAnalyzer: true }) // bundle analyser
  ]
})
