/* eslint-disable import/no-extraneous-dependencies, sort-keys-fix/sort-keys-fix, @typescript-eslint/naming-convention */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({

  plugins: [
    react(),
    viteTsconfigPaths({
      projects: ['../../../tsconfig.json']
    })
  ],

  build: {
    outDir: './build',
  },

  server: {
    port: 3000,
    strictPort: true
  }
})
