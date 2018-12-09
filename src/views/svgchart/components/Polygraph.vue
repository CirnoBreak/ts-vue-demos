<template>
  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
    <axis-label
      v-for="(stat, index) in stats"
      :stat="stat"
      :index="index"
      :total="stats.length"
      :key="index">
    </axis-label>
  </g>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator'
import CalcMixin from './mixin'
import AxisLabel from './AxisLabel.vue'

@Component({
  components: {
    AxisLabel
  }
})
export default class Polygraph extends Mixins(CalcMixin) {
  @Prop() stats!: any
  @Prop() stat!: any
  @Prop() index!: number
  @Prop() total!: number

  get points () {
    let _this = this
    const total = _this.stats.length
    return _this.stats.map((stat: any, i: number) => {
      let point = _this.valueToPoint(stat.value, i, total)
      return point.x + ',' + point.y
    }).join(' ')
  }
}
</script>

<style scoped>
polygon {
  fill: #42b983;
  opacity: .75;
}

circle {
  fill: transparent;
  stroke: #999;
}
</style>
