import { apiDefaults, axios } from "@/api/index.js";

export default {
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
  actions: {},
  modules: {},
};
