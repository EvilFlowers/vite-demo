<template>
  <el-menu-item :index="item.url" @click="handleClick">
    <i v-if="item.icon" :class="[ item.icon.includes('fa')? 'fas' : '', item.icon ]"/>
    <template #title>{{ item.title }}</template>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter, useRoute } from "vue-router"

defineProps({
  item: Object
})

const router = useRouter();
const route = useRoute();

const handleClick = () => {
  router.push(item.url)
}
</script>

<style scoped>

</style>
