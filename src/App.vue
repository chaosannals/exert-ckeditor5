<template>
  <div class="app">
    <div ref="editor"></div>
  </div>
</template>

<script>
import ClassicEditor from "./editor";

export default {
  name: "App",
  async mounted() {
    console.log(this.$refs.editor);
    let editor = await ClassicEditor.create(this.$refs.editor, {
      toolbar: {
        items: ["bold", "italic"],
        viewportTopOffset: 30,
        shouldNotGroupWhenFull: true,
      },
    });
    console.log(editor);
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
