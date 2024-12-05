import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSvgr from 'vite-plugin-svgr'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),vitePluginSvgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@model': path.resolve(__dirname, './src/model'),
      '@store': path.resolve(__dirname, './src/store'),
      '@services': path.resolve(__dirname, './src/services'),
      '@constant': path.resolve(__dirname, './src/constant'),
      '@public': path.resolve(__dirname, './public'),
    },
  },
  
})
