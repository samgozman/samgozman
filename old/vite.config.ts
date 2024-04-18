import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Note: base for github pages
  // base: process.env.NODE_ENV === 'production' ? '/samgozman/' : '/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Note: ignore ionicons
          isCustomElement: (tag) => tag.startsWith('ion-')
        }
      }
    })
  ],
  build: {
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
