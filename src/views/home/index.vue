<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from 'vuex-class'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  @Getter('getText') public text!: string
  @Action('setText') public setText!: any

  created () {
    const { text, setText } = this
    setText('This is Home page')
    console.log(text)
  }

  mounted () {
    const { text } = this
    console.log(text)
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 60px;
}
</style>
