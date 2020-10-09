import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import { auth } from "./lib/firebase";
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      el: "#app",
      store,
      router,
      render: h => h(App)
    });
  }

  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
