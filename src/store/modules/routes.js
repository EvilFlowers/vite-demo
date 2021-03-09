import { constantRoutes, asyncRoutes } from "../../router/index"

const state = () => ({
  routes: []
})

const getters = {
  routes: (state) => state.routes
}

const mutations = {
  setRoutes(state, routes) {
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
