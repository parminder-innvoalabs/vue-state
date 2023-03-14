import Vue from "vue";
import Vuex from "vuex";
import { apiDefaults } from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: localStorage.getItem("userData") || [],
    apiDefaults: apiDefaults,
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
  actions: {
    getUserDetails(context) {
      return context.state.apiDefaults
        .get(context.state.endpoints.users)
        .then((response) => {
          this.commit("updateUserData", {
            userData: response.data,
          });
        });
    },
  },
  modules: {},
});
