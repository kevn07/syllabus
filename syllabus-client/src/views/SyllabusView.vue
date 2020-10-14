<template>
  <div>
    hello world
    {{ this.syllabusId }}
  </div>
</template>

<script>
export default {
  name: "SyllabusView",
  props: {
    syllabusId: String
  },
  methods: {
    
  }
}
</script>