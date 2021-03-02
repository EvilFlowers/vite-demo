<template>
  <el-scrollbar class="sidebar-container" :class="{'is-collapse': collapse}">
    <el-menu :collapse="collapse">
      <SideBarItem v-for="item in menuList" :item="item"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { defineComponent, ref } from 'vue'
import SideBarItem from './components/SideBarItem.vue'
import menuList from "../../layout/sider/menu.js"

export default defineComponent({
  name: 'SideBar',
  components: { SideBarItem },
  setup() {
    const collapse = ref(true)
    return {
      collapse,
      menuList
    }
  }
})
</script>

<style lang="scss" scoped>

.sidebar-container {
  width: 220px;
  height: 100%;
  position: fixed;
  top: 0;

  &.is-collapse {
    width: 64px;
  }

  .el-menu {
    border-right: none;
  }
}
</style>
