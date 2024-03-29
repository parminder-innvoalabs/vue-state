import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import dateMixin from "./mixins/date";

Vue.mixin(dateMixin);

Vue.config.productionTip = false;
export const eventBus = new Vue(); // creating an event bus.

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
