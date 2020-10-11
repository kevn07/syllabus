export default {
  // change values obtained from state store
  setUserProfile(state, user) {
    state.userProfile = user;
  },

  createComponent(state, data) {
    state.editorData.push(data);
  },

  updateComponent(state, data) {
    state.editorData[data.sequenceNo] = data;
    console.log(state.editorData);
  }
};
