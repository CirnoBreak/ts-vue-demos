<template>
  <table>
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey === key }"
          :key="key">
          {{ key | capitalize }}
          <span
            class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in filteredData" :key="index">
        <td v-for="key in columns" :key="key">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import gridInterface from '../grid.interface'

@Component({
  filters: {
    capitalize (str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
})
export default class DemoGrid extends Vue {
  @Prop({ required: true }) columns!: Array<string> // 表头
  @Prop({}) filterKey!: string // 查找关键词
  @Prop({}) gridData!: Array<gridInterface> // 表数据
  sortKey: string = '' // 筛选排序关键词
  sortOrders: any = {} // 表头筛选升/降序

  created () {
    this.setSortOrders()
  }

  // 默认把sortOrders都设置为1
  setSortOrders () {
    let sortOrders: any = {}
    this.columns.forEach((key) => {
      sortOrders[key] = 1
    })
    this.sortOrders = sortOrders
  }

  // 把sortKey改成当前点中的表头字段，并把sortOrders里面对应的该字段的数字*-1
  sortBy (key: any) {
    this.sortKey = key
    this.sortOrders[key] = this.sortOrders[key] * -1
  }
  // 根据筛选的条件(查找关键词/筛选字段)排序
  get filteredData () {
    let sortKey = this.sortKey
    let filterKey = this.filterKey && this.filterKey.toLowerCase()
    let order = this.sortOrders[sortKey] || 1
    let data = this.gridData

    // 存在查找关键词时，根据查找关键词筛选数据
    if (filterKey) {
      data = data.filter((row: any) => {
        return Object.keys(row).some(function (key) {
          return String(row[key]).toLowerCase().indexOf(filterKey) > -1
        })
      })
    }

    // 存在筛选条件时，在数据排序时，sort函数判断条件*当前order(1/-1)
    if (sortKey) {
      data = data.slice().sort(function (a: any, b: any) {
        a = a[sortKey]
        b = b[sortKey]
        return (a === b ? 0 : a > b ? 1 : -1) * order
      })
    }

    return data
  }
}
</script>

<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
  margin-top: 10px;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
