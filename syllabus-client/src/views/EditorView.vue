<template>
  <div v-if="loaded">
    <h1>
      Editor
    </h1>
    <youtube :video-id="videoId" />
    <h1 @click="addVideoComponent">Add YT</h1>
    <h1 @click="addMdComponent">Add MD</h1>
    <span
      v-for="component of editorData.componentData"
      :key="component.sequenceNo"
    >
      <div v-if="component.type == 'markdown'">
        <MarkdownEditor
          :sequence-no="component.sequenceNo"
          @update-component="updateComponent"
        />
      </div>
      <div v-else-if="component.type == 'video'">
        <VideoEmbed
          :sequence-no="component.sequenceNo"
          :video-id="videoId"
          @update-component="updateComponent"
        />
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
  props: {
    resumeId: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      loaded: false,
      editorData: {
        title: "",
        componentData: [
          {
            input: "",
            type: "markdown",
            sequenceNo: 0
          }
        ],
        id: 1
      },
      videoId: "v8bZVdTgXoY",
      sequenceNo: 0
    };
  },
  methods: {
    addMdComponent() {
      this.sequenceNo++;
      this.editorData.componentData.push({
        input: "",
        type: "markdown",
        sequenceNo: this.sequenceNo
      });
    },
    addVideoComponent() {
      this.sequenceNo++;
      this.editorData.componentData.push({
        input: "",
        type: "video",
        sequenceNo: this.sequenceNo
      });
    },
    updateComponent(data) {
      const index = this.editorData.componentData.findIndex(
        a => a.sequenceNo === data.sequenceNo
      );
      this.editorData.componentData[index].input = data.input;
    },
    onSave() {
      this.$store.dispatch("saveData", {
        title: this.title,
        data: this.editorData,
        id: this.id
      });
    },
    resumeData() {
      // call action to pull data and store as editorData
    },
    mounted() {
      if (this.resumeId) {
        this.resumeData();
      }
      this.loaded = true;
    }
  }
};
</script>
