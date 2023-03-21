import Vue from "vue";

const initState = {
  user_id: null,
};

const appModule = {
  namespaced: true,
  state: () => initState,
  mutations: {
    init(state, user_id) {
      Vue.set(state, "user_id", user_id);
    },
  },
  actions: {
    init({ commit }) {
      const user_id = 5;
      commit("init", user_id);
    },
  },
  getters: {
    user_id: (s) => s.user_id,
  },
};

export default appModule;
