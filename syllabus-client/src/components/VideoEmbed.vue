<template>
  <div id="video-embed">
    <youtube :video-id="videoId" />
  </div>
</template>

<script>
export default {
  name: "VideoEmbed",
  props: {
    sequenceNo: Number,
    videoId: String
  }
};
</script>
