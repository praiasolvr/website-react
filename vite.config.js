import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import 'vite/modulepreload-polyfill'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ou '/nome-do-repositorio/' se for um subcaminho no GitHub Pages
  server: {
    port: 5173,
    open: true, // Para abrir o navegador automaticamente
  },
})
