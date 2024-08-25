import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api/v1':"https://wasserstoff-fullstack-intern-task-46wb.vercel.app/"
    }
  },
  build: {
    rollupOptions: {
      external: ['axios'],
    },
  },
})
