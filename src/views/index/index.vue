<template>
  <div>这是首页</div>
  <el-dropdown type="primary">
    <span>下拉菜单</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from "vuex"

export default defineComponent({
  name: 'Index',
  setup() {
    const store = useStore()
    console.log(store)
    console.log(store.getters['tabsBar/visitedRoutes'])
  }
})
</script>

