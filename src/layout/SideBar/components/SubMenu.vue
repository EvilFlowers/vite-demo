<template>
  <el-submenu
      :index="fullPath"
  >
    <template #title>
      <i v-if="item && item.icon" :class="[ 'fas', item.icon ]"></i>
      <span>{{ item.title }}</span>
    </template>
    <slot />
  </el-submenu>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  item: Object,
  fullPath: {
    type: String,
    default: ""
  }
})
</script>

<style scoped>

</style>
