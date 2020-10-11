<template>
  <div>
    <h1>
      Editor
    </h1>
    <!-- <MarkdownEditor /> -->
    <youtube :video-id="videoId" />
    <h1 @click="addVideoComponent">Add YT</h1>
    <h1 @click="addMdComponent">Add MD</h1>
    <!-- <div ref="editorContainer">
      <MarkdownEditor />
    </div> -->
    <span v-for="component of editorData" :key="component.sequenceNo">
      <div v-if="component.type == 'markdown'">
        <MarkdownEditor :sequence-no="component.sequenceNo" @update-component="updateComponent"/>
      </div>
      <div v-else-if="component.type == 'video'">
        <VideoEmbed :sequence-no="component.sequenceNo" :video-id="videoId" @update-component="updateComponent"/>
      </div>
    </span>
  </div>
</template>

<script>
import MarkdownEditor from "../components/MarkdownEditor";
import VideoEmbed from "../components/VideoEmbed";
export default {
  Name: "Editor",
  components: {
    MarkdownEditor,
    VideoEmbed
  },
  data() {
    return {
      editorData: [
        {
          input: "",
          type: "markdown",
          sequenceNo: 0
        }
      ],
      videoId: "v8bZVdTgXoY",
      sequenceNo: 0
    };
  },
  methods: {
    addMdComponent() {
      this.sequenceNo++;
      this.editorData.push({
        input: "",
        type: "markdown",
        sequenceNo: this.sequenceNo
      });
    },
    addVideoComponent() {
      this.sequenceNo++;
      this.editorData.push({
        input: "",
        type: "video",
        sequenceNo: this.sequenceNo
      });
    },
    updateComponent(data) {
      const index = this.editorData.findIndex((a) => a.sequenceNo === data.sequenceNo);
      this.editorData[index].input = data.input;
      console.log(this.editorData);
    }
  }
};
</script>
