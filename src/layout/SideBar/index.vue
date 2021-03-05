<template>
  <el-scrollbar class="sidebar-container" :class="{'is-collapse': collapse}">
    <el-menu :collapse="collapse">
      <SideBarItem v-for="item in menuList" :item="item"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { defineComponent, ref, toRefs } from 'vue'
import SideBarItem from './components/SideBarItem.vue'
import menuList from "../../layout/sider/menu.js"

export default defineComponent({
  name: 'SideBar',
  components: { SideBarItem },
  props: {
    collapse: Boolean
  },
  setup(props) {
    // const collapse = ref(true)
    const { collapse } = toRefs(props)
    return {
      collapse,
      menuList
    }
  }
})
</script>

<style lang="scss" scoped>

.sidebar-container {
  width: $base-left-menu-width;
  height: 100%;
  position: fixed;
  top: 0;
  transition: width .3s;

  &.is-collapse {
    width: $base-left-menu-width-min;

    .el-menu {
      transition: width .3s;
    }
  }

  .el-menu {
    border-right: none;
  }
}
</style>
