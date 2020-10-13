<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "SideBar"
};
</script>

<style lang="scss">
  .sidebar {
    display: flex;
    flex-direction: row;
  }
</style>
