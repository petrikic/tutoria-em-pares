import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  snackbar: false,
  color: "",
  texto: "",
  },
  getters: {
    snackbarRes: state => {
      state.snackbar = true
      state.color = "green"
    },
    snackbarErr: state => {
      state.snackbar = true
      state.color = "red"
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
