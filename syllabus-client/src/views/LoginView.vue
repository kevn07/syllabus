<template>
  <div id="container-login">
    <AppTitle />
    <h2 @click="socialLogin" class="social-button">
      Login
    </h2>
  </div>
</template>

<script>
import firebase from "firebase";
import AppTitle from "../components/AppTitle"
export default {
  name: "Login",
  components: {
    AppTitle
  },
  methods: {
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const token = result.credential.accessToken;
          this.$store.dispatch("socialLogin", {
            email: result.user.email,
            displayName: result.user.displayName,
            token: token,
            uid: result.user.uid
          });
          this.$router.push("/home");
        })
        .catch(err => {
          alert("Login Failed: " + err.message);
        });
    }
  }
};
</script>

<style lang="scss">
#container-login {
  position: relative;
}
</style>
