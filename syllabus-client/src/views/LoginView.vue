<template>
  <div id="container-login">
    <h2 @click="socialLogin" class="social-button">
      Login
    </h2>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
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
            token: token
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

<style lang="scss" scoped>
.social-button {
  max-width: 250px;
  color: white;
  width: 40%;
  border: none;
  border-radius: 5px;
  background: #42b883;
  opacity: 0.85;
  display: inline-block;
  text-decoration: none; /* remove underline from anchors */
}
.social-button:hover {
  opacity: 1;
  cursor: pointer;
  text-decoration: underline;
}
#container-login {
  position: relative;
}
</style>
