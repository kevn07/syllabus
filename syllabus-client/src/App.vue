<template>
  <div id="app">
    <div id="app-container">
      <router-view id="router-container"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  text-align: center;
  flex-direction: column;
}

#app-container {
  display: grid;
  grid-template-columns: 0.5fr 5fr 0.5fr;
  position: relative;
  min-height: 100vh;
}

#router-container{
  grid-column-start: 2;
  grid-column-end: 3;
}

#footer {
  bottom: 0;
  width: 100%;
  padding-bottom: 1rem;
}
</style>
