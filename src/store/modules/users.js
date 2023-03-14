import { apiDefaults } from "@/api/index.js";

const Users = {
  state: () => ({
    userData: localStorage.getItem("userData") || [],
    apiDefaults: apiDefaults,
    endpoints: {
      users: "/users",
    },
  }),
  mutations: {
    updateUserData(state, res) {
      console.log("res", res);
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
    searchUser(context, data) {
      console.log(data);
      this.commit("updateUserData", {
        userData: data,
      });
    },
  },
};
export default Users;
