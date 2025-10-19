import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',               // agar bisa diakses dari luar (termasuk ngrok)
    port: 5173,
    cors: true,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '.ngrok.io',
      '.ngrok.app',
      '.ngrok-free.app',
      '04bc6777833a.ngrok-free.app', // ganti sesuai domain ngrok kamu
    ],
    hmr: {
      host: '04bc6777833a.ngrok-free.app', // sama dengan domain ngrok kamu
      protocol: 'http',
      clientPort: 80,                      // gunakan port HTTP
    },
  },
})
