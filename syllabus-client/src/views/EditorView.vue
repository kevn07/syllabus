<template>
  <div>
    <h1>
      Editor
    </h1>
    <MarkdownEditor />
    <youtube :video-id="videoId" />
    <h1 @click="addMarkdownComponent">Add Markdown</h1>
    <div ref="editorContainer">
      <MarkdownEditor />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import MarkdownEditor from "../components/MarkdownEditor";

export default {
  Name: "Editor",
  components: {
    MarkdownEditor: () => import("../components/MarkdownEditor")
  },
  data() {
    return {
      videoId: "v8bZVdTgXoY"
    };
  },
  methods: {
    addMarkdownComponent() {
      let componentClass = Vue.extend(MarkdownEditor);
      let instance = new componentClass();
      instance.$mount();
      this.$refs.editorContainer.appendChild(instance.$el);
      console.log(this.$refs.editorContainer);
    }
  }
};
</script>
