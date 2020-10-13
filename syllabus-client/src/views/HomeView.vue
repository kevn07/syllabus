<template>
  <div v-if="loaded">
    <h1>Home</h1>
    <h2 @click="logout" class="social-button">Logout</h2>
    <div v-for="(syllabus, index) in syllabusData" v-bind:key="index">
      <SyllabusModal :syllabus="syllabus" />
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

.social-button {
  max-width: 250px;
  color: white;
  width: 40%;
  border: none;
  border-radius: 5px;
  background: #42b883;
  opacity: 0.85;
  display: inline-block;
  text-decoration: none; /* remove underline from anchors */
}
.social-button:hover {
  opacity: 1;
  cursor: pointer;
  text-decoration: underline;
}
</style>
