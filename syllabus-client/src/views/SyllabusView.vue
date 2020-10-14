<template>
  <div>
    hello world
    {{ this.syllabusKey }}
  </div>
</template>

<script>
export default {
  name: "SyllabusView",
  props: {
    syllabusKey: {}
  }
}
</script>