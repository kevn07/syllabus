<template>
  <div class="input-container">
    <input type="text" placeholder="Syllabus Title" @input="updateTitle" v-model="title"/>
  </div>
</template>

<script>
import debounce from "debounce";
export default {
  name: "TitleEditor",
  data() {
    return {
      title: ""
    }
  },
  methods: {
    update: debounce(function(e) {
      this.input = e.target.value;
      this.$emit("set-title", this.title);
    }, 200)
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  padding: 1rem;
}
input {
  width:100%; 
  font-family: Avenir;
  font-weight: 600;
  background-color: transparent;
  border: 0px solid;
  font-size:32px;
  text-align: center;
  border: none;
  padding: 0;
  margin: 0;
  color: #34495E;
  &:focus{
    outline: none;
  }
  &::placeholder {
    opacity: 0.5;
  }
}
</style>