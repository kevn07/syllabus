import Vue from "vue";
import Router from "vue-router";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import firebase from "firebase";
import EditorView from "./views/EditorView";
import SyllabusView from "./views/SyllabusView";
Vue.use(Router);

const routes = [
  {
    path: "/editor",
    component: EditorView,
    meta: {
      requiresAuth: true
    }
  },
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
  },
  {
    name: "syllabus",
    path: "/syllabus/:syllabusId",
    component: SyllabusView,
    props: true,
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
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next("/login");
  } else {
    next();
  }
});

export default router;
