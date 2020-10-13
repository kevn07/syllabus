<template>
  <div v-if="loaded" id="editor-container">
    <h1>Editor</h1>
    <SideBar>
        <h3 @click="addVideoComponent" class="add-component-btn"><font-awesome-icon :icon="['fab','youtube']" /> Video</h3>
        <h3 @click="addMdComponent" class="add-component-btn"><font-awesome-icon :icon="['fab','markdown']" /> Textbox</h3>
    </SideBar>
    <div>
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
          :video-id="component.input"
          @update-component="updateComponent"
        />
      </div>
    </span>
    <h1 @click="onSave">Save</h1>
    </div>
  </div>
</template>

<script>
import MarkdownEditor from "../components/Editor/MarkdownEditor";
import VideoEmbed from "../components/Editor/VideoEmbed";
import SideBar from "../components/Editor/SideBar";
export default {
  Name: "Editor",
  components: {
    MarkdownEditor,
    VideoEmbed,
    SideBar
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
        ]
      },
      videoId: "v8bZVdTgXoY",
      sequenceNo: 0
    };
  },
  computed: {
    isLoaded() {
      return this.loaded;
    }
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
      this.$store.dispatch("saveSyllabus", {
        ...this.editorData,
        authorId: this.$store.state.userProfile.uid,
        author: this.$store.state.userProfile.displayName
      });
    },
    resumeData() {
      // call action to pull data and store as editorData
      return;
    }
  },
  mounted() {
    if (this.resumeId) {
      this.resumeData();
    }
    this.loaded = true;
  }
};
</script>

<style lang="scss">
  #editor-container {
    width: 100%;
  }
  .add-component-btn {
    border-radius: 5px;
    width: 50%;
    padding: 0.5rem;
  }
  .add-component-btn:hover {
    background: lightgrey;
    text-decoration: underline;
  }
</style>
