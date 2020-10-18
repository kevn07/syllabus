<template>
  <div class="video-container">
    <youtube :video-id="videoId" id="youtube"/>
  </div>
</template>

<script>
export default {
  name: "VideoEditor",
  props: {
    sequenceNo: Number,
    videoId: String
  }
};
</script>

<style lang="scss">
.video-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#youtube {
  grid-column-start: 2;
}
</style>