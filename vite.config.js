 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this to ensure Vite treats mp4s as static assets
  assetsInclude: ['**/*.mp4'], 
})