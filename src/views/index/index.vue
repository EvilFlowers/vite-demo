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
<!--    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <Item icon="fa-phone" title="标题" />
&lt;!&ndash;      <el-menu-item-group>
        <template #title>分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template #title>选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>&ndash;&gt;
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <template #title>导航二</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <template #title>导航三</template>
    </el-menu-item>
    <Item icon="fa-phone" title="标题" index="4" />
    <SubMenu>
      <Item icon="fa-home" title="子项标题" index="5-2"/>
    </SubMenu>-->
    <Item :item="item" />
    <Menu v-for="item in menuList" :item="item"/>
  </el-menu>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import Item from '../../layout/SideBar/components/MenuItem.vue'
// import Item from './MenuItem.vue'
import SubMenu from '../../layout/sider/SubMenu.vue'
import Menu from '../../layout/sider/Menu.vue'
import menuList from "../../layout/sider/menu.js"

export default defineComponent({
  name: 'Index',
  components: {
    Menu,
    Item,
    SubMenu
  },
  setup() {
    const collapse = ref(true)
    const item = reactive({icon: 'fa-home', title: 'Demo', url: '/'})
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

