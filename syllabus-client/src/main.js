import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import { auth } from "./lib/firebase";
Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      el: "#app",
      store,
      router,
      render: h => h(App)
    });
  }
});
