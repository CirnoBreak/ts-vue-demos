<template>
  <div class="group reqres">
    <div class="half left">
      <h2>Request</h2>
      <button class="half left" @click="handleClick">Make multiply request</button>
      <div class="half">
        <input type="text" v-model="requestValue" class="half left" />
        <span class="response half item">{{ displayResponse }}</span>
      </div>
    </div>
    <div class="half">
      <h2>Response</h2>
      <div class="half left item">Multiply</div>
      <input type="text" class="half" v-model="responseValue" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MyRPC extends Vue {
  @Prop() ds: any
  responseValue: string = '7'
  requestValue: string = '3'
  displayResponse: string = '-'
  rpc: any

  created () {
    this.rpc = this.ds.rpc
    this.rpc.provide('multiply-number', (data: any, response: any) => {
      response.send(data.value * parseFloat(this.responseValue))
    })
  }

  handleClick () {
    const data = {
      value: parseFloat(this.requestValue)
    }

    this.rpc.make('multiply-number', data, (err: any, resp: any) => {
      this.displayResponse = resp || err.toString()
    })
  }
}
</script>

<style scoped>

</style>
