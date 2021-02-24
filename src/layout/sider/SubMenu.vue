<template>
  <el-submenu index="5">
    <template #title>
      <MenuTitle index="5-1" title="SubMenu标题" icon="fa-bug"></MenuTitle>
    </template>
    <slot/>
  </el-submenu>
</template>

<script>
import { defineComponent } from 'vue'
import MenuTitle from './MenuTitle.vue'

export default defineComponent({
  name: 'SubMenu',
  components: {
    MenuTitle
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>
