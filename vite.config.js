// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    // Make sure you have this if you are using a specific Vite plugin for Tailwind,
    // though for most setups, postcss-import and tailwindcss are handled by PostCSS config.
    // However, some setups might explicitly add a Tailwind Vite plugin.
    // If you explicitly added `@tailwindcss/vite`, ensure it's correctly configured here.
  ],
})