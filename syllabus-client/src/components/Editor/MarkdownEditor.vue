<template>
  <div id="markdown-editor">
    <textarea
      :value="input"
      @input="update"
      placeholder="# write markdown text here :)"
    ></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "debounce";
import DOMPurify from 'dompurify';

export default {
  name: "MarkdownEditor",
  props: {
    sequenceNo: Number
  },
  data() {
    return {
      input: ""
    };
  },
  computed: {
    compiledMarkdown() {
      const text = DOMPurify.sanitize(this.input);
      return marked(text);
    }
  },
  methods: {
    update: debounce(function(e) {
      this.input = e.target.value;
      this.$emit("update-component", {
        sequenceNo: this.sequenceNo,
        input: this.input
      });
    }, 300)
  }
};
</script>

<style lang="scss">
html,
body,
#markdown-editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#markdown-editor div {
  display: inline-block;
  width: 50%;
  height: 100%;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
  text-align: left;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
  height: 100%;
}

code {
  color: #f66;
}
</style>
