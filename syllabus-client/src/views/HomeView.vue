<template>
  <div>
    <h1>
      Home
    </h1>
    <h2 @click="logout" class="social-button">
      Logout
    </h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    logout() {
      this.$store.dispatch("logout");
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
