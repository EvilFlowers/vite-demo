<template>
  <el-submenu v-if="item && item.children" :index="item.url">
    <template #title>
      <i v-if="item.icon" :class="[ item.icon && item.icon.includes('fa')? 'fas': '', item.icon]"/>
      <span>{{ item.title }}</span>
    </template>
    <Menu v-for="childItem in item.children" :item="childItem" :full-path="fullPath + item.url" />
  </el-submenu>
  <el-menu-item v-else :index="item.url" @click="handleClick">
    <i v-if="item.icon" :class="[ item.icon && item.icon.includes('fa')? 'fas': '', item.icon]"/>
    <template #title>{{ item.title }}</template>
  </el-menu-item>
</template>

<script>
import { defineComponent, toRefs } from 'vue'
import { useRouter } from "vue-router"

export default defineComponent({
  name: 'Menu',
  props: {
    item: {
      type: Object,
      default: {}
    },
    fullPath: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const router = useRouter()
    const { item, fullPath } = toRefs(props)
    console.log(fullPath)
    const handleClick = () => {
      router.push(fullPath.value + item.value.url)
    }

    // const handlePath = fullPath.value + item.value.url

    return {
      handleClick,
      // handlePath
    }
  }
})
</script>

<style scoped>

</style>
