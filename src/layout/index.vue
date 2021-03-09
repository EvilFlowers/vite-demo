<template>
  <div class="admin-layout">
    <SideBar :collapse="collapse"/>
    <div class="main-container" :class="{'is-collapse-main': collapse}">
      <div class="layout-header">
        <div class="nav">
          <NavBar :collapse="collapse"  @collapse="handleCollapse" @refresh="handleRefresh" />
        </div>
        <TabBar @refresh="handleRefresh" />
      </div>
      <Main v-if="showMain" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted, nextTick } from 'vue'
import SideBarItem from './SideBar/components/SideBarItem.vue'
import menuList from "../layout/sider/menu.js"
import Menu from './sider/Menu.vue'
import SideBar from './SideBar/index.vue'
import NavBar from './NavBar/index.vue'
import Main from './Main/index.vue'
import TabBar from './TabBar/index.vue'

export default defineComponent({
  name: 'Layout',
  components: { TabBar, NavBar, SideBar, Menu, SideBarItem, Main },
  setup() {
    const collapse = ref(false)
    const showMain = ref(true)

    const handleCollapse = () => {
      collapse.value = !collapse.value
    }

    const handleRefresh = async () => {
      showMain.value = false
      await nextTick()
      showMain.value = true
    }
    const editableTabsValue = ref('2')
    const editableTabs = reactive([
      {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 3',
        name: '3',
        content: 'Tab 3 content'
      }, {
        title: 'Tab 4',
        name: '4',
        content: 'Tab 4 content'
      }, {
        title: 'Tab 5',
        name: '5',
        content: 'Tab 5 content'
      }, {
        title: 'Tab 6',
        name: '6',
        content: 'Tab 6 content'
      }, {
        title: 'Tab 7',
        name: '7',
        content: 'Tab 7 content'
      }, {
        title: 'Tab 8',
        name: '8',
        content: 'Tab 8 content'
      }, {
        title: 'Tab 9',
        name: '9',
        content: 'Tab 9 content'
      }, {
        title: 'Tab 10',
        name: '10',
        content: 'Tab 10 content'
      }
    ])
    // const item = reactive({icon: 'fa-home', title: 'Demo', url: '/error/401'})
    /*onMounted(() => {
      nextTick(() => {
        const elements = document.getElementsByClassName('el-tabs__item')
        Array.prototype.forEach.call(elements, function (element) {
          element.style.width = element.clientWidth + 'px'
          element.onmouseenter = () => {
            if (element.className.indexOf("is-active") === -1) {
              element.style.width = (element.clientWidth + 14) + 'px'
            }
          }
          element.onmouseleave = () => {
            if (element.className.indexOf("is-active") === -1) {
              element.style.width = (element.clientWidth - 14) + 'px'
            }
          }
        })
      })
    })*/
    return {
      editableTabsValue,
      editableTabs,
      menuList,
      collapse,
      showMain,
      handleCollapse,
      handleRefresh
    }
  },
  /*mounted() {
    this.$nextTick(() => {
      const elements = document.getElementsByClassName('el-tabs__item')
      Array.prototype.forEach.call(elements, function (element) {
        element.style.width = element.clientWidth + 'px'
        element.onmouseenter = () => {
          if (element.className.indexOf("is-active") === -1) element.style.width = (element.clientWidth + 14) + 'px'
        }
        element.onmouseleave = () => {
          if (element.className.indexOf("is-active") === -1) element.style.width = (element.clientWidth - 14) + 'px'
        }
      })
    })
  }*/
  methods: {
    /*handleCollapse() {
      this.collapse = !this.collapse
    },
    handleRefresh() {
      this.showMain = false;
      this.$nextTick(() => {
        this.showMain = true
      })
    }*/
  }
})
</script>

<style lang="scss" scoped>
.admin-layout {
  height: 100%;
}

.main-container {
  margin-left: $base-left-menu-width;
  height: 100%;
  padding-top: calc(#{$base-nav-height} + #{$base-tabs-height});
  transition: margin-left .3s;

  &.is-collapse-main {
    margin-left: $base-left-menu-width-min;
    transition: margin-left .3s;

    .layout-header {
      left: $base-left-menu-width-min;
      width: $base-right-content-width-min;
      transition: all .3s;
    }
  }

  .layout-header {
    position: fixed;
    top: 0;
    right: 0;
    left: $base-left-menu-width;
    width: $base-right-content-width;
    overflow: hidden;
    z-index: 2001;
    transition: all .3s;
  }
}
.nav {
  height: $base-nav-height;
  //background-color: #fff;
}




</style>
