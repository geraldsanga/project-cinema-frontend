// Vue imports
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Other imports
import VueKonva from "vue-konva"


import "./assets/css/main.css"
import "./assets/js/main.js"
import secrets from "./config.js"

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "animate.css"

import axios from "axios";

import VueGeolocation from 'vue-browser-geolocation'

import * as VueGoogleMaps from "vue2-google-maps";

axios.defaults.baseURL = 'http://localhost:8000/'

Vue.config.productionTip = false;

Vue.use(VueGeolocation)
Vue.use(VueKonva)
Vue.use(VueGoogleMaps, {
  load: {
    key: secrets.google_key,
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
