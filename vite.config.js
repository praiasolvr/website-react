import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   outDir: 'dist',
  // },

  server: {
    cors: {
      // the origin you will be accessing via browser
      origin: 'https://viacao-praiasol.netlify.app/',
    },
  },
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      
      input: './src/main.jsx',
    },
  },
})
