import html from 'vite-plugin-html'

export function htmlPlugin(env) {
  const { VITE_GLOB_TITLE } = env

  return html({
    inject: {
      injectData: {
        title: VITE_GLOB_TITLE
      }
    }
  })
}
