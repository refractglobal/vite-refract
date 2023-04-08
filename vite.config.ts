import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  define: {
    __DEV__: true,
    __TEST__: true
  },
  server: {
    port: 3000
  }
})
