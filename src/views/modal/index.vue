<template>
  <div>
    <button id="show-modal" @click="showModal = true">show modal</button>
    <modal-item v-if="showModal" @close="showModal = false">
      <h3 slot="header">custom header</h3>
    </modal-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ModalItem from './components/ModalItem.vue'

@Component({
  components: {
    ModalItem
  }
})
export default class Modal extends Vue {
  showModal: boolean = false
}
</script>

<style scoped>

</style>
