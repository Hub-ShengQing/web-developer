import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapse: true,
  },
  mutations: {
    // 侧边栏折叠
    handleCollapse(state) {
      state.collapse = !state.collapse
    },
  },
})
