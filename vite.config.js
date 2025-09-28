import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sevilworks.github.io/', // Set base to match your repo name for GitHub Pages
})