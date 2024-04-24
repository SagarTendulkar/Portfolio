import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { /* this will not overwrite to css with same class names */
    modules: {
      localsConvention: "camelCase"
    }
  }
})
