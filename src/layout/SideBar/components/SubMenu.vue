<template>
  <el-submenu
      :index="item.url"
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
  item: Object
})
</script>

<style scoped>

</style>
