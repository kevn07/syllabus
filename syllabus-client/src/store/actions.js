import router from "../router";
import firebase from "firebase";
export default {
  // obtain asynchronous operations
  async socialLogin({ dispatch }, details) {
    dispatch("fetchUserProfile", details);
  },

  async fetchUserProfile({ commit }, user) {
    const userProfile = user;
    commit("setUserProfile", userProfile);
  },

  async logout({ commit }) {
    commit("setUserProfile", {});
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit("setLogout");
        router.push("/login");
      });
  },

  async saveSyllabus({ dispatch, getters, state }, data) {
    const ref = firebase
      .database()
      .ref("syllabus/")
      .push({
        ...data,
        title: state.editorData.title
      }
    );
    dispatch("fetchSyllabus", ref.key);
    console.log(getters.returnEditorData);
    return ref.key;
  },

  async fetchSyllabus(_, id) {
    try {
      const result = await firebase.database().ref("syllabus/" + id).once("value")
      return result.val()
    } catch (error) {
      console.log(error)
    }
  },

  async fetchSyllabusByAuthor({ state, commit}) {
    let ref = firebase.database().ref("syllabus");
    state.menuData = [];
    const value = ref.orderByChild("authorId").equalTo(state.userProfile.uid).on("child_added", function(snapshot) {
      commit("setMenuData", {
        title: snapshot.val().title,
        author: snapshot.val().author,
        key: snapshot.key
      })
    })
    console.log(value)
  }


};
