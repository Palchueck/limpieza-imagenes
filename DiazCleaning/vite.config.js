import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      '.trycloudflare.com'
    ],
    proxy: {
      '/api': {
        //configuracion para decirle al frontend haga peticiones al puerto del backend 
        target: 'http://localhost:5058',
        changeOrigin: true,
      }
    }
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})