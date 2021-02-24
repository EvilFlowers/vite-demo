<template>
  <i v-if="icon" :class="[icon.includes('fa')? 'fas': '', icon]"/>
  <span>{{ title }}</span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuTitle',
  props: {
    title: String,
    icon: String,
    index: String
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
