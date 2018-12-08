<template>
  <div>
    <p>双击一个无子元素的item可以新建一个文件夹</p>
    <ul id="demo">
      <tree-item
        class="item"
        :model="treeData">
      </tree-item>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TreeItem from './components/TreeItem'

let initTreeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

@Component({
  components: {
    TreeItem
  }
})
export default class TreeView extends Vue {
  treeData = initTreeData
}
</script>

<style scoped>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}

</style>
