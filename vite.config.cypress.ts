import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  build: { outDir: './build' },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      // 1) Map assets subpath (must come before or use exact-match root alias)
      {
        find: /^@mtes-mct\/monitor-ui\/assets\/(.*)$/,
        replacement: fileURLToPath(new URL('../../../src/assets/$1', import.meta.url))
      },
      // 2) Map the package root to the source entry (exact match)
      {
        find: /^@mtes-mct\/monitor-ui$/,
        replacement: fileURLToPath(new URL('../../../src/index.ts', import.meta.url))
      }
    ]
  },
  server: { port: 3000 }
})
