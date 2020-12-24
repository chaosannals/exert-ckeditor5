<template>
  <div class="app">
    <div ref="editor"></div>
  </div>
</template>

<script>
import ClassicEditor from "./editor";
import { CustomUploadAdapter } from "./adapter";

export default {
  name: "App",
  data() {
    return {
      editor: null,
    };
  },
  async mounted() {
    this.editor = await ClassicEditor.create(this.$refs.editor, {
      toolbar: {
        items: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "blockQuote",
          "|",
          "insertTable",
          "|",
          "imageUpload",
          "imageStyle:full",
          "imageStyle:side",
          "|",
          "undo",
          "redo",
        ],
        viewportTopOffset: 30,
        shouldNotGroupWhenFull: true,
      },
      table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
      },
      heading: {
        options: [
          {
            model: "paragraph",
            title: "正文",
            class: "ck-heading_paragraph",
          },
          {
            model: "heading1",
            view: "h1",
            title: "标题 1",
            class: "ck-heading_heading1",
          },
          {
            model: "heading2",
            view: "h2",
            title: "标题 2",
            class: "ck-heading_heading2",
          },
        ],
      },
    });
    this.editor.plugins.get("FileRepository").createUploadAdapter = (
      loader
    ) => {
      return new CustomUploadAdapter(loader, this);
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
