import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [vue()],
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

})
