import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CalcMixin extends Vue {
  /**
   * 坐标轴原点在圆心上，圆心为(100, 100)
   * 把finalVal的值设置为value*0.8的目的是为了让value为100的时候点贴在圆上(实际半径为80，value最大值为100)
   * 角度的计算相当于把圆平均分割成total份，然后独立的在index位置上
   * 由于圆心是(100, 100)，所以在坐标计算的时候tx、ty要各自加上100
   * 计算ty的时候，用-finalVal的目的是把第一个点的y坐标位于12点方向
   * @param value 数值
   * @param index 当前标签对应的index
   * @param total 标签总数
   */
  valueToPoint (value: number, index: number, total: number) {
    let finalVal = value * 0.8
    let angle = Math.PI * 2 / total * index
    let cos = Math.cos(angle)
    let sin = Math.sin(angle)
    let tx = finalVal * sin + 100
    let ty = -finalVal * cos + 100
    return {
      x: tx,
      y: ty
    }
  }
}
