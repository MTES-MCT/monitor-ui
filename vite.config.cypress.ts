/* eslint-disable import/no-extraneous-dependencies, sort-keys-fix/sort-keys-fix, @typescript-eslint/naming-convention */

import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  mode: 'test',

  plugins: [
    react(),
    viteTsconfigPaths({
      projects: ['./tsconfig.json']
    })
  ],

  resolve: {
    alias: [
      // 1) Map assets subpath (must come before or use exact-match root alias)
      {
        find: /^@mtes-mct\/monitor-ui\/assets\/(.*)$/,
        replacement: fileURLToPath(new URL('./src/assets/$1', import.meta.url))
      },
      // 2) Map the package root to the source entry (exact match)
      {
        find: /^@mtes-mct\/monitor-ui$/,
        replacement: fileURLToPath(new URL('./src/index.ts', import.meta.url))
      }
    ]
  },

  optimizeDeps: {
    entries: ['e2e/base/**/*.spec.tsx', 'e2e/release/**/*.spec.tsx']
  },

  build: {
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  },

  server: {
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true, // more reliable in CI
      interval: 500
    }
  }
})
