import router from "../router";
import firebase from "firebase";
export default {
  // obtain asynchronous operations
  async socialLogin({ dispatch }, details) {
    console.log("socialLogin", details);
    dispatch("fetchUserProfile", details);
  },
  async fetchUserProfile({ commit }, user) {
    const userProfile = user;
    commit("setUserProfile", userProfile);
  },
  async logout({ commit }) {
    commit("setUserProfile", {});
    console.log("running logout");
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("inside here");
        router.push("/login");
      });
  },
  async createComponent({ commit }, data) {
    commit("createComponent", data);
  },
  async updateComponentInput({ commit }, data) {
    commit("updateComponentInput", data);
  }
};
