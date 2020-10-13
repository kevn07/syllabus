<template>
  <div id="square">
    {{ syllabus }}
  </div>
</template>

<script>
export default {
  name: "SyllabusModal",
  props: {
    syllabus: Object
  }
}
</script>

<style lang="scss">
.square {
  width: 50%;
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>