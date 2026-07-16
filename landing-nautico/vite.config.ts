import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/alturas': {
        target: 'http://190.0.152.194:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/alturas/, '/alturas/web/user/alturas'),
      },
    },
  },
})
