<template>
  <div v-if="loaded" id="editor-container">
    <h1 class="title">Editor</h1>
    <SideBar>
        <h3 @click="toggleInput" class="btn"><font-awesome-icon :icon="['fab','youtube']" /> Video</h3>
        <h3 @click="addMdComponent" class="btn"><font-awesome-icon :icon="['fab','markdown']" /> Textbox</h3>
    </SideBar>
    <div v-if="showInput">
      <input v-model="videoLink" type="text" placeholder="https://www.youtube.com/watch?v=oBpaB2YzX8s"/>
      <button @click="addVideoComponent"><font-awesome-icon :icon="['fas','search']" /> </button>
    </div>
    <TitleEditor/>
    <div class="component-container">
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
        <VideoEditor
          :sequence-no="component.sequenceNo"
          :video-id="component.input"
          @update-component="updateComponent"
        />
      </div>
    </span>
    </div>
    <h1 @click="onSave" class="btn">Save</h1> 
  </div>
</template>

<script>
import MarkdownEditor from "../components/Editor/MarkdownEditor";
import VideoEditor from "../components/Editor/VideoEditor";
import SideBar from "../components/Editor/SideBar";
import TitleEditor from "../components/Editor/TitleEditor";
import { getIdFromURL } from 'vue-youtube-embed'
export default {
  Name: "Editor",
  components: {
    MarkdownEditor,
    VideoEditor,
    SideBar,
    TitleEditor
  },
  props: {
    resumeId: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      showInput: false,
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
      videoLink: "",
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
      const videoId = getIdFromURL(this.videoLink)
      this.editorData.componentData.push({
        input: videoId,
        type: "video",
        sequenceNo: this.sequenceNo
      });
      this.videoLink = "";
      this.toggleInput();
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
    resumeEditor() {
      // call action to pull data and store as editorData
      return;
    },
    toggleInput() {
      return this.showInput = !this.showInput;
    },
    setTitle(title) {
      this.editorData.title = title;
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

<style lang="scss" scoped>
  #editor-container {
    width: 100%;
  }
  
  .btn {
    border-radius: 5px;
    padding: 0.5rem;
    box-shadow: 0 1px 2px #34495E;
  }
  .btn:hover {
    background: lightgrey;
    text-decoration: underline;
  }
</style>
