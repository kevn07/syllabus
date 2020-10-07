import router from "../router";

export default {
  // obtain asynchronous operations
  async socialLogin({ dispatch }, details) {
    console.log("socialLogin", details);
    dispatch("fetchUserProfile", details);
  },
  async fetchUserProfile({ commit }, user) {
    const userProfile = user;
    commit("setUserProfile", userProfile);
    router.push("/home");
  }
};
