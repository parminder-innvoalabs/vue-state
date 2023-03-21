import Vue from "vue";
import Vuex, { Store } from "vuex";
import appModule from "./modules/app";
import client from "./modules/client";
import newsModule from "./modules/news";

Vue.use(Vuex);

let modules = {
  app: appModule,
  client: client,
  news: newsModule,
};

const store = new Store({
  modules: modules,
});

export default store;
