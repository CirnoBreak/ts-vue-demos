<template>
  <div>
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <demo-grid
      :grid-data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery">
    </demo-grid>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DemoGrid from './components/DemoGrid.vue'
import gridInterface from './grid.interface'

interface gridData {
  name: string,
  power: number
}

@Component({
  components: {
    DemoGrid
  }
})
export default class Grid extends Vue {
  searchQuery: string = '' // 查找关键词
  gridColumns: Array<string> = ['name', 'power'] // 表头
  gridData: Array<gridInterface> = [
    { name: 'Chuck Norris', power: Infinity },
    { name: 'Bruce Lee', power: 9000 },
    { name: 'Jackie Chan', power: 7000 },
    { name: 'Jet Li', power: 8000 }
  ] // 表数据
}
</script>

<style scoped>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
</style>
