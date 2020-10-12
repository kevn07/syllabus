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
  async saveSyllabus({ dispatch, getters },data) {
    const ref = firebase.database().ref("syllabus/").push(data);
    dispatch("fetchSyllabus", ref.key);
    console.log(getters.returnEditorData);
    return ref.key;
  },

  async fetchSyllabus({ commit }, id) {
    firebase.database().ref('syllabus/' + id).once('value', function(snapshot) {
      commit("setEditorData", snapshot.val())
    })
  }
};
