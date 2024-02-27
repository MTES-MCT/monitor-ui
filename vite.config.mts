/* eslint-disable import/no-extraneous-dependencies, sort-keys-fix/sort-keys-fix */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  build: {
    outDir: './build'
  },

  plugins: [react(), viteTsconfigPaths()],

  server: {
    port: 3000
  }
})
