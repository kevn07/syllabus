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
    async fetchSyllabus() {
      this.syllabusData = await this.$store.dispatch("fetchSyllabus", this.syllabusId)
    }
  },
  async mounted() {
    await this.fetchSyllabus()
  }
}
</script>