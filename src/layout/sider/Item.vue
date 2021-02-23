<template>
  <i v-if="icon" :class="classObj"></i>
  <span>{{ title }}</span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Item',
  props: {
    title: String,
    icon: String
  },
  setup(props) {
    let classObj
    const { icon } = props
    if (icon.includes("fa")) {
      classObj = ["fas", icon]
    }
    return {
      classObj
    }
  }
})
</script>

<style scoped>

</style>
