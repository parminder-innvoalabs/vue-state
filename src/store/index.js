import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";
import One from "./modules/one";
import Two from "./modules/two";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
  },
  mutations: {},
  getters: {},
  modules: {
    users,
    a: One,
    b: Two,
  },
});
