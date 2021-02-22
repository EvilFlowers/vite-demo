import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: "",
  plugins: [
      vue(),
      viteMockServe({
        supportTs: false,
        mockPath: 'mock',
        localEnabled: command === 'serve',
        watchFiles: true
      })
  ],
  server: {
    host: "localhost",
    port: "1024",
    proxy: {
      "/admin": {
        target: "http://106.15.251.89:7777",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/admin/, "")
      }
    }
  }
}))
