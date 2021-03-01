<template>
  <el-menu-item :index="fullPath" @click="handleClick(fullPath)">
    <i v-if="item.icon" :class="[ item.icon.includes('fa')? 'fas' : '', item.icon ]"/>
    <template #title>{{ item.title }}</template>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter, useRoute } from "vue-router"

defineProps({
  item: Object,
  fullPath: String
})

const router = useRouter();
const route = useRoute();

const handleClick = (url) => {
  router.push(url)
}
</script>

<style scoped>

</style>
