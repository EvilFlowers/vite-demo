<template>
  <div class="admin-layout">
    <SideBar :collapse="collapse"/>
    <div class="main-container" :class="{'is-collapse-main': collapse}">
      <div class="layout-header">
        <div class="nav">
          <NavBar :collapse="collapse"  @handle-collapse="handleCollapse" />
<!--          <el-button type="primary" @click="collapse = !collapse">切换</el-button>-->
        </div>
        <div class="tabs">
          <el-tabs v-model="editableTabsValue" type="card" class="tabs-content" closable>
            <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div style="width: 100%; position: relative; height: calc(100% - 100px); overflow: auto;">
        <router-view />
      </div>
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

export default defineComponent({
  name: 'Layout',
  components: { NavBar, SideBar, Menu, SideBarItem },
  setup() {
    const collapse = ref(true)
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
      collapse
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
    handleCollapse() {
      this.collapse = !this.collapse
    }
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



.tabs {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: $base-tabs-height;
  padding-right: 20px;
  padding-left: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  //background-color: #fff;
  border-top: 1px solid #f6f6f6;

  .tabs-content {
    width: 100%;
    height: 36px;

    .el-tabs__nav-next, .el-tabs__nav-prev {
      height: 36px;
      line-height: 36px;
    }

    ::v-deep(.el-tabs__header) {
      border-bottom: 0;

      .el-tabs__nav {
        border: 0;
      }

      .el-tabs__item {
        height: 36px;
        line-height: 36px;
        border: 0;
        margin-right: -5px;
        //padding: 0 30px;
        text-align: center;
        transition: all .5s cubic-bezier(.645,.045,.355,1) !important;

        &.is-active, &:hover, &.is-active:hover {
          /*mask: url(../assets/tab-background.png);
          -webkit-mask: url(../assets/tab-background.png);
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;*/
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          //padding: 0 30px;
        }

        &.is-active, &.is-active:hover {
          color: #1890ff;
          background: #e8f4ff;
        }

        &:hover {
          color: #515a6e;
          background-color: #dee1e6;
          border-bottom: 0;
        }
      }
    }
  }
}

</style>
