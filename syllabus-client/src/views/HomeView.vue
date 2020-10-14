<template>
  <div v-if="loaded">
    <h1>Home</h1>
    <h2 @click="logout" class="social-button">Logout</h2>
    <div v-for="(syllabus, index) in syllabusData" v-bind:key="index">
      <SyllabusModal :syllabus="syllabus" @click.native="viewSyllabus(syllabus.key)" class="syllabus-modal"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import SyllabusModal from "../components/SyllabusModal"
export default {
  name: "HomeView",
  components: {
    SyllabusModal
  },
  data() {
    return {
      loaded: false
    };
  },
  computed: {
    ...mapGetters({
      syllabusData: 'returnMenuData'
    })
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchSyllabusByAuthor");
    },
    logout() {
      this.$store.dispatch("logout");
    },
    viewSyllabus(key){
      this.$router.push({ name:"syllabus", params: { id: key } })
    }
  },
  mounted() {
    this.loaded = false
    this.fetchData()
    this.loaded = true
  }
};
</script>
<style lang="scss" scoped>
#container-login {
  position: relative;
}

.syllabus-modal:hover {
  background: green
}
</style>
