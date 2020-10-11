<template>
  <div>
    <h1>
      Editor
    </h1>
    <!-- <MarkdownEditor /> -->
    <youtube :video-id="videoId" />
    <h1 @click="addVideoComponent">Add YT</h1>
    <h1 @click="addMdComponent">Add MD</h1>
    <div ref="editorContainer">
      <MarkdownEditor />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import MarkdownEditor from "../components/MarkdownEditor";
import youtube from "vue-youtube-embed";
export default {
  Name: "Editor",
  data() {
    return {
      videoId: "v8bZVdTgXoY",
      sequenceNo: 0
    };
  },
  methods: {
    addMdComponent() {
      let componentClass = Vue.extend(MarkdownEditor);
      let instance = new componentClass({
        propsData: { sequenceNo: this.sequenceNo }
      });
      instance.$mount();
      this.$refs.editorContainer.appendChild(instance.$el);
      this.$store.dispatch("createComponent", {
        sequenceNo: this.sequenceNo,
        type: "markdown",
        input: ""
      });
      console.log(this.$store.state.editorData);
      this.sequenceNo++;
    },
    addVideoComponent() {
      let componentClass = Vue.extend(youtube);
      let instance = new componentClass();
      instance.$mount();
      this.$refs.editorContainer.append(instance.$el);
      this.$store.dispatch("createComponent", {
        sequenceNo: this.sequenceNo,
        type: "video",
        input: this.videoId
      });
      console.log(this.$store.state.editorData);
      this.sequenceNo++;
    }
  }
};
</script>
