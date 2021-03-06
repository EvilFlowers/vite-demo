<template>
  <div style="width: 100%; position: relative; height: calc(100% - 100px); overflow: auto; padding: 20px; background-color: #f6f8f9;">
    <router-view />
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Main',
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>
