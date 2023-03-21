const newsModule = {
  namespaced: true,
  actions: {
    getUserId({ rootGetters }) {
      console.log("+++", rootGetters["app/user_id"]);
    },
  },
};

export default newsModule;
