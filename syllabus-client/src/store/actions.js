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
  async saveSyllabus(_,data) {
    const ref = firebase.database().ref("syllabus/").push(data);
    return ref.key;
  },

  async fetchSyllabus({dispatch}, id) {
    firebase.database().ref('syllabus/' + id).once('value', function(snapshot) {
      dispatch("returnData", snapshot.val())
    })
  },

  async returnData(_, data) {
    return data
  }
};
