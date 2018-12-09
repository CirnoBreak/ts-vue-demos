<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from 'vuex-class'

@Component
export default class About extends Vue {
  // read getters and actions from vuex by vuex-class
  @Getter('getText') public text!: string
  @Action('setText') public setText!: any

  created () {
    const { text, setText } = this
    setText('This is About Page')
    console.log(text)
  }

  mounted () {
    const { text } = this
    console.log(text)
  }
}
</script>
