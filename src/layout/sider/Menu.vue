<template>
  <el-submenu v-if="item && item.children" :index="item.url">
    <template #title>
      <i v-if="item.icon" :class="[ item.icon && item.icon.includes('fa')? 'fas': '', item.icon]"/>
      <span>{{ item.title }}</span>
    </template>
    <Menu v-for="childItem in item.children" :item="childItem"/>
  </el-submenu>
  <el-menu-item v-else :index="item.url">
    <i v-if="item.icon" :class="[ item.icon && item.icon.includes('fa')? 'fas': '', item.icon]"/>
    <template #title>{{ item.title }}</template>
  </el-menu-item>
</template>

<script>
import { defineComponent } from 'vue'
import menu from "./menu.js"

export default defineComponent({
  name: 'Menu',
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
})
</script>

<style scoped>

</style>
