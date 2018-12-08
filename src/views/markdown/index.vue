<template>
  <div class="editor">
    <textarea :value="input" @input="updates"></textarea>
    <div v-html="compileMarkdown"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { debounce } from 'lodash'
import marked from 'marked'
import { Component } from 'vue-property-decorator'

@Component
export default class Markdown extends Vue {
  input: string = '# hello'

  constructor () {
    super()
    this.updates = debounce(this.updates, 300)
  }
  get compileMarkdown () {
    return marked(this.input, { sanitize: true })
  }

  updates (e: { target: HTMLInputElement; }): void {
    this.input = e.target.value
  }
}

</script>

<style scoped>
.editor {
  margin: 0;
  height: 98vh;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
}

textarea, .editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', 'Courier New', Courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
