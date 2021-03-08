<template>
  <div class="tabs">
    <el-tabs v-model="editableTabsValue" type="card" class="tabs-content" closable>
      <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :name="item.name"
      >
        <template #label>
          <span @contextmenu.prevent="openMenu">{{ item.title }}</span>
        </template>
      </el-tab-pane>
    </el-tabs>
    <teleport to="body">
      <div v-show="menuVisible" style="position: fixed; z-index: 2001" :style="{'left': left + 'px', 'top': top + 'px'}">
        <el-dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$emit('refresh')">重新加载</el-dropdown-item>
            <el-dropdown-item>关闭当前</el-dropdown-item>
            <el-dropdown-item>关闭左侧</el-dropdown-item>
            <el-dropdown-item>关闭右侧</el-dropdown-item>
            <el-dropdown-item>关闭其他</el-dropdown-item>
            <el-dropdown-item>关闭全部</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </teleport>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'TabBar',
  props: {
    editableTabs: Array
  },
  setup() {
    const editableTabsValue = ref('')

    const menuVisible = ref(false)
    const top = ref(0)
    const left = ref(0)
    const openMenu = (e) => {
      left.value = e.clientX
      top.value = e.clientY
      // menuVisible.value = value
      menuVisible.value = true
    }

    const closeMenu = () => {
      // console.log('clickScreen')
      menuVisible.value = false
    }

    watch(menuVisible, (value) => {
      if (value) {
        window.addEventListener('click', closeMenu)
      } else {
        window.removeEventListener('click', closeMenu)
      }
    })
    return {
      editableTabsValue,
      openMenu,
      menuVisible,
      top,
      left
    }
  }
})
</script>

<style lang="scss" scoped>
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
