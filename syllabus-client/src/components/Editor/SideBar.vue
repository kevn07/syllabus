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
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.25rem;
    align-items: center;
  }
</style>
