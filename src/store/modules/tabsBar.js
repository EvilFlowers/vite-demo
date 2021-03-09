const state = {}

const getters = {
  visitedRoutes: (state) => state.visitedRoutes
}

const mutations = {
  addVisitedRoute(state, route) {
    let target = state.visitedRoutes.find(item => item.path === route.path)
    if (target) {
      if (route.fullPath !== target.fullPath) Object.assign(target, route)
      return;
    }
    state.visitedRoutes.push(Object.assign({}, route))
  },
  delVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === route.path) state.visitedRoutes.splice(index, 1)
    })
  },
  delOtherVisitedRoute(state, route) {
    state.visitedRoutes = state.visitedRoutes.filter(item => item.meta.affix || item.path === route.path)
  },
  delLeftVisitedRoute(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter(item => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index <= state.visitedRoutes.indexOf(item)
    })
  },
  delRightVisitedRoute(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter(item => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index >= state.visitedRoutes.indexOf(item)
    })
  },
  delAllVisitedRoutes(state) {
    state.visitedRoutes = state.visitedRoutes.filter(item => item.meta.affix)
  }
}

const actions = {
  addVisitedRoute({ commit }, route) {
    commit('addVisitedRoute', route)
  },
  async delRoute({ dispatch, state }, route) {
    await dispatch('delVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes]
    }
  },
  delVisitedRoute({ commit, state }, route) {
    commit('delVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  async delOtherRoutes({ dispatch, state }, route) {
    await dispatch('delOthertVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes]
    }
  },
  async delLeftRoutes({ dispatch, state }, route) {
    dispatch('delLeftVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes]
    }
  },
  async delRightRoutes({ dispatch, state }, route) {
    await dispatch('delRightVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes]
    }
  },
  delOtherVisitedRoute({ commit, state }, route) {
    commit('delOtherVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  delLeftVisitedRoute({ commit, state }, route) {
    commit('delLeftVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  delRightVisitedRoute({ commit, state }, route) {
    commit('delRightVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  async delAllRoutes({ dispatch, state }) {
    await dispatch('delAllVisitedRoutes')
    return {
      visitedRoutes: [...state.visitedRoutes]
    }
  },
  delAllVisitedRoutes({ commit, state }) {
    commit('delAllVisitedRoutes')
    return [...state.visitedRoutes]
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
