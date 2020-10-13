export default {
  // change values obtained from state store
  setUserProfile(state, user) {
    state.userProfile = user;
    state.loggedIn = true;
  },

  setEditorData(state, data) {
    state.editorData = data;
  },

  setMenuData(state, data) {
    state.menuData.push(data)
  },

  toggleNav(state) {
    state.isNavOpen = !state.isNavOpen;
  },

  setLogout(state) {
    state.loggedIn = false;
  }
};
