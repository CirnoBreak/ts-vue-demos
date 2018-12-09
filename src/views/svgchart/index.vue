<template>
  <div>
    <svg width="200" height="200">
      <polygraph :stats="stats"></polygraph>
    </svg>
    <div v-for="stat in stats" :key="stat.label">
      <label>{{ stat.label }}</label>
      <input type="range" v-model="stat.value" min="0" max="100">
      <span>{{ stat.value }}</span>
      <button @click="remove(stat)" class="remove">X</button>
    </div>
    <form id="add">
      <input name="newLabel" v-model="newLabel">
      <button @click="add">Add a Stat</button>
    </form>
    <pre id="raw">{{ stats }}</pre>
    <p style="font-size:12px">* input[type="range"] requires IE10 or above.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Polygraph from './components/Polygraph.vue'

let stats = [
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 }
]

interface statsProp {
  label: string
  value: number
}

@Component({
  components: {
    Polygraph
  }
})
export default class SvgChart extends Vue {
  newLabel: string = ''
  stats:Array<statsProp> = stats

  add (e: Event) {
    e.preventDefault()
    if (!this.newLabel) {
      return
    }
    this.stats.push({
      label: this.newLabel,
      value: 100
    })
    this.newLabel = ''
  }

  remove (stat: any) {
    if (this.stats.length > 3) {
      this.stats.splice(this.stats.indexOf(stat), 1)
    } else {
      alert('Cant\'t delete more')
    }
  }
}
</script>

<style scoped>
label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}

#raw {
  position: absolute;
  top: 0;
  left: 300px;
}
</style>
