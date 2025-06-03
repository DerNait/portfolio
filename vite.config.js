import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
        '@pages': '/src/pages',
        '@components': '/src/components',
        '@hooks': '/src/hooks',
        '@assets': '/src/assets',
        '@icons': '/src/assets/icons',
        '@styles': '/src/styles',
        '@data' : '/src/data',
    }
  }
})
