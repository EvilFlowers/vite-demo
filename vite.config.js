import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import { viteMockServe } from 'vite-plugin-mock'
import { vitePlugins } from "./build/vite/plugin"

const root = process.cwd()
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, root)

  return {
    base: "",
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        supportTs: false,
        mockPath: 'mock',
        localEnabled: command === 'serve',
        watchFiles: true
      }),
      ...vitePlugins(env)
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
  }
})
