import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration enabling React and Tailwind CSS.
export default defineConfig({
  plugins: [react()],
})