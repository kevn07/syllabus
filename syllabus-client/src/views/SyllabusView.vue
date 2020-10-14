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
      this.$store.dispatch("fetchSyllabus", this.syllabusId)
      this.syllabusData = this.$store.state.editorData
    }
  },
  created() {
    this.fetchSyllabus()
  }
}
</script>