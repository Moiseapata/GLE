import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './',
  base: '/GLE/',  // <-- C'est LE réglage crucial pour éviter la page blanche !
  build: {
    outDir: 'dist/public',
  }
})
