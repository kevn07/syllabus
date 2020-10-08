<template>
  <div id="app">
    <h1 id="app-title">syllab<span style="color: #42b883">us</span></h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#main-logo {
  width: 20%;
}

#app-title {
  font-size: 50px;
}
</style>
