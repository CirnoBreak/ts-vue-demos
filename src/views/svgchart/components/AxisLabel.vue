<template>
  <text :x="point.x" :y="point.y">
    {{ stat.label }}
  </text>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator'
import CalcMixin from './mixin'

@Component
export default class AxisLabel extends Mixins(CalcMixin) {
  @Prop() stat!: any
  @Prop() index!: number
  @Prop() total!: number

  get point () {
    return this.valueToPoint(
      +this.stat.value + 20, // 避免文字跑到图表里面
      this.index,
      this.total
    )
  }
}
</script>

<style scoped>
text {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 10px;
  fill: #666;
}
</style>
