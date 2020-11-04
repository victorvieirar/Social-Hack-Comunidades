import Vue from "vue";
import VueRouter from "vue-router";

import { Home } from "../pages";

Vue.use(VueRouter);

const routes = [{ path: "/", component: Home }];

const router = new VueRouter({
  mode: "history",
  scrollBehavior: (to) => {
    if (to.has) return { selector: to.hash };
    else return { x: 0, y: 0 };
  },
  routes,
});

export default router;
