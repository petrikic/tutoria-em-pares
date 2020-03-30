import Vue from 'vue'
import Vuex from 'vuex'
// import tutorias from '../service/tutorias'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: false,
    color: "",
    texto: "",
    user: localStorage.getItem("user")
  },
  getters: {
    snackbarResponse: state => {
      state.snackbar = true;
      state.color = "green";
    },
    snackbarErr: state => {
      state.snackbar = true;
      state.color = "red";
    }

  },
  mutations: {

  },
  actions: {

  },
  modules: {
  }
})
