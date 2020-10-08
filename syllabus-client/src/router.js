import Vue from "vue";
import Router from "vue-router";
import LoginView from "./views/LoginView.vue";
import HomeView from "./views/HomeView";
import firebase from "firebase";
Vue.use(Router);

const routes = [
  {
    path: "/login",
    component: LoginView
  },
  {
    path: "/home",
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new Router({
  routes,
  mode: "history"
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
