<template>
  <div id="container-login">
    <h1>Login</h1>
    <p>
      <button @click="socialLogin" class="social-button">
        Sign In with Google
      </button>
    </p>
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
    },
  }
};
</script>
