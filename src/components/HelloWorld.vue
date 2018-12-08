<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Vue.js typescript examples</h3>
    <ul>
      <li><router-link to="/about">about</router-link></li>
      <li><router-link to="/markdown">markdown exmaple</router-link></li>
      <li><router-link to="/gitsub">github submit example</router-link></li>
      <li><router-link to="/grid">grid example</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
