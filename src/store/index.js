import { createStore } from "vuex";
export default createStore({
  state: {
    currentPage: 1,
    loginStatus: 0,
  },
  mutations: {
    setCurrentPage: (state, params) => (state.currentPage = params),
    setLoginStatus: (state, params) => (state.loginStatus = params),
  },
  actions: {
    setCurrentPage({ commit }, currentPage) {
      commit("setCurrentPage", currentPage);
    },
    setLoginStatus({ commit }, loginStatus) {
      commit("setLoginStatus", loginStatus);
    },
  },
  getters: {
    currentPage: (state) => state.currentPage,
    loginStatus: (state) => state.loginStatus,
  },
});
