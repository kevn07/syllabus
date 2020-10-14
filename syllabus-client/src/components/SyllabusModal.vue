<template>
  <div class="square">
    <h2>{{syllabus.author}}</h2>
    <p>{{ syllabus }}</p>
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
  margin: auto;
  width: 50%;
  background: lightgrey;
  border-radius: 5px;
  padding: 0.1rem;
}

// .square:after {
//   content: "";
//   display: block;
//   padding-bottom: 100%;
// }
</style>