import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emails: []
  },
  mutations: {
    SEND(state, email) {
      state.emails.push(email)
    }
  },
  actions: {
    storeSend({commit}, {email}) {
      commit("SEND", email)
    }
  },
  modules: {
  }
})
