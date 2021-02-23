import { htmlPlugin } from "./html"

export function vitePlugins(env) {
  const vitePlugins = []

  vitePlugins.push(htmlPlugin(env))

  return vitePlugins
}
