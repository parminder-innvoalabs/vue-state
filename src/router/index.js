import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import CountView from "../views/CountView.vue";
import DateView from "../views/DateView.vue";
import AppView from "../views/app.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "user",
    component: UserView,
  },
  {
    path: "/count",
    name: "count",
    component: CountView,
  },
  {
    path: "/date",
    name: "DateView",
    component: DateView,
  },
  {
    path: "/app",
    name: "AppView",
    component: AppView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
