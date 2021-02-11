// Vue imports
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Other imports
import "./assets/css/main.css"
import "./assets/js/main.js"


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "animate.css"

import axios from "axios";

import * as VueGoogleMaps from "vue2-google-maps";

axios.defaults.baseURL = 'http://localhost:8000/'

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCEz5uaJY4kaS_2yI2Vbb_1xFm5ztU0Wow",
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
