import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/GLE/',  // <-- IMPORTANT : Remplace par le nom exact de ton dépôt (GLE)
  build: {
    outDir: 'dist/public',
  }
})
