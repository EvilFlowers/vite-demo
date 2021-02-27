<template>
  <el-menu-item :index="routeChildren.url" @click="handleClick(routeChildren.url)">
    <i v-if="routeChildren.icon" :class="[ routeChildren.icon.includes('fa')? 'fas' : '', routeChildren.icon ]"/>
    <template #title>{{ routeChildren.title }}</template>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter, useRoute } from "vue-router"

defineProps({
  item: Object,
  routeChildren: {
    type: Object,
    default() {
      return null;
    }
  }
})

const router = useRouter();
const route = useRoute();

const handleClick = (url) => {
  router.push(url)
}
</script>

<style scoped>

</style>
