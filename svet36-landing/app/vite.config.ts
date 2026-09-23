import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/den/svet36-landing/',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'dist' },
})