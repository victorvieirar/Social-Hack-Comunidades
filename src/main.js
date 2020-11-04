import Vue from "vue";

import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPencilAlt,
  faCode,
  faChalkboardTeacher,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(faPencilAlt, faCode, faChalkboardTeacher, faStar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
}).$mount("#app");
