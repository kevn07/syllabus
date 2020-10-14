<template>
  <div>
    {{ this.syllabusData }}
  </div>
</template>

<script>
export default {
  name: "SyllabusView",
  data() {
    return {
      syllabusData: {}
    }
  },
  props: {
    syllabusId: String
  },
  methods: {
    fetchSyllabus() {
      // this.loaded = false
      console.log("hello world")
      this.$store.dispatch("fetchSyllabus", this.syllabusId)
      this.syllabusData = this.$store.state.editorData
      // this.loaded = true
    }
  },
  created() {
    this.fetchSyllabus()
  }
}
</script>