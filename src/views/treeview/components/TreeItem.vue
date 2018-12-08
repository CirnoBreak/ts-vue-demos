<template>
  <li>
    <div
      :class="{ bold: isFolder }"
      @click="toggle"
      @dblclick="changeType"
      >
      {{ model.name }}
      <span v-if="isFolder">[{{ open ? '+' : '-' }}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <tree-item
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model">
      </tree-item>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TreeItem extends Vue {
  @Prop() model!: any

  open: boolean = false

  get isFolder () {
    return this.model.children &&
      this.model.children.length
  }

  toggle () {
    if (this.isFolder) {
      this.open = !this.open
    }
  }

  changeType () {
    if (!this.isFolder) {
      Vue.set(this.model, 'children', [])
      this.addChild()
      this.open = true
    }
  }

  addChild () {
    this.model.children.push({
      name: 'new stuff'
    })
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
