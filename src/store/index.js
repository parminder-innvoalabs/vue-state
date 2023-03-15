import Vue from "vue";
import { apiDefaults, axios } from "@/api/index.js";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: localStorage.getItem("userData") || [],
    endpoints: {
      users: "/users",
    },
  },
  mutations: {
    updateUserData(state, res) {
      localStorage.setItem("userData", res.userData);
      state.userData = res.userData;
    },
  },

  getters: {
    client: () => {
      const apiClient = axios.create({
        ...apiDefaults,
      });
      return apiClient;
    },
  },
  modules: {},
});
