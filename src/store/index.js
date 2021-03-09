import { createStore } from "vuex"

const files = import.meta.globEager('./modules/*.js')
console.log('vuex', files)
let modules = {}
for (const path in files) {
  console.log(path.replace(/(\.\/modules\/|\.js)/g, ''))
  modules[path.replace(/(\.\/modules\/|\.js)/g, '')] = files[path].default
}

console.log(modules)

/*files.keys().forEach(key => {
  console.log(key.replace(/(\.\/|\.js)/g, ''))
  console.log(files[key])
})*/

export default createStore({
  modules
})
