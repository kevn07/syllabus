export default {
  // change values obtained from state store
  setUserProfile(state, user) {
    state.userProfile = user;
  },
  
  setEditorData(state, data) {
    state.editorData = data;
  }
};
