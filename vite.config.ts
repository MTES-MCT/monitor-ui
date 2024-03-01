/* eslint-disable import/no-extraneous-dependencies, sort-keys-fix/sort-keys-fix, @typescript-eslint/naming-convention */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  build: {
    cssMinify: false,
    outDir: './build'
  },

  plugins: [
    react(),
    viteTsconfigPaths({
      projects: ['./tsconfig.json']
    })
  ],

  server: {
    port: 3000
  }
})
