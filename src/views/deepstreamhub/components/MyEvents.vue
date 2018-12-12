<template>
  <div class="group pubsub">
    <div class="half left">
      <h2>Publish</h2>
      <button class="half left" id="send-event" @click="handleClick()">Send test-event with</button>
      <input type="text" class="half" id="event-data" v-model="value" />
    </div>
    <div class="half">
      <h2>Subscribe</h2>
      <ul id="events-received">
        <template v-for="event in eventsReceived">
          <li :key="event">{{ event }}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Emit, Vue } from 'vue-property-decorator'

@Component
export default class Events extends Vue {
  @Prop() ds: any
  eventsReceived: Array<any> = []
  value: string = ''
  event: any

  created () {
    this.event = this.ds.event
    this.event.subscribe('test-event', (value: any) => {
      this.eventsReceived.push(value)
    })
  }

  handleClick () {
    this.event.emit('test-event', this.value)
  }
}
</script>

<style scoped>

</style>
