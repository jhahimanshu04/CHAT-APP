import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4002",  // 👈 tumhara backend
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
