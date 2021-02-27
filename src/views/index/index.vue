<template>
  <div>Index</div>
  <el-button type="primary" @click="collapse = !collapse">切换</el-button>
  <el-button @click="handleChangeItem">切换标题</el-button>
  <el-menu
      default-active="2"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="collapse"
  >
<!--    <SideBarItem :item="item"/>-->
<!--    <Item :item="item" />-->
<!--    <Menu v-for="item in menuList" :item="item"/>-->
  </el-menu>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import Item from '../../layout/SideBar/components/MenuItem.vue'
import Menu from '../../layout/sider/Menu.vue'
import menuList from "../../layout/sider/menu.js"
import SideBarItem from '../../layout/SideBar/components/SideBarItem.vue'

export default defineComponent({
  name: 'Index',
  components: {
    Menu,
    Item,
    SideBarItem
  },
  setup() {
    const collapse = ref(true)
    const item = reactive({icon: 'fa-home', title: 'Demo', url: '/error/401'})
    const handleChangeItem = () => {
      console.log("1111")
      item.title = 'new Title'
    }
    return {
      collapse,
      menuList,
      item,
      handleChangeItem
    }
  }
})
</script>

