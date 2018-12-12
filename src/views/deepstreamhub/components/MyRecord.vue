<template>
  <div class="group realtimedb">
    <h2>Realtime Datastore</h2>
    <div class="input-group half left">
      <label>FirstName</label>
      <input type="text" v-model="firstname" @input="handleFirstNameUpdate()" />
    </div>
    <div class="input-group half">
      <label>LastName</label>
      <input type="text" v-model="lastname" @input="handleLastNameUpdate()" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MyRecord extends Vue {
  @Prop() ds!: any
  firstname: string = ''
  lastname: string = ''
  record!: any

  created () {
    this.record = this.ds.record.getRecord('test/johndoe')

    this.record.subscribe((values: any) => {
      this.firstname = values.firstname
      this.lastname = values.lastname
    })
  }

  handleFirstNameUpdate () {
    this.record.set('firstname', this.firstname)
  }

  handleLastNameUpdate () {
    this.record.set('lastname', this.lastname)
  }
}
</script>

<style scoped>

</style>
