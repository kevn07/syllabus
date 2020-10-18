<template>
  <div id="markdown-editor">
    <textarea
      :value="input"
      @input="update"
      placeholder="# write markdown text here :)"
      id="text-editor"
    ></textarea>
    <div v-html="compiledMarkdown" id="compiled-editor"></div>
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

<style lang="scss" scoped>
#markdown-editor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
}

#text-editor {
  grid-column-start: 1;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  border: black;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
  height: 100%;
}
textarea,
#markdown-editor div {
  vertical-align: top;
  // -webkit-box-sizing: border-box;
  // -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-align: left;
}
#compiled-editor {
  padding: 0 20px;
  border: black;
}
code {
  color: #f66;
}
</style>
