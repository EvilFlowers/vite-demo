<template>
  <div class="tabs">
    <el-tabs v-model="selectTab" type="card" class="tabs-content" closable>
      <el-tab-pane
          v-for="item in visitedRoutes"
          :key="item.path"
          :name="item.name"
      >
        <template #label>
          <span @contextmenu.prevent="openMenu(item, e)">{{ item.meta.title }}</span>
        </template>
      </el-tab-pane>
    </el-tabs>
    <teleport to="body">
      <div v-show="menuVisible" style="position: fixed; z-index: 2001" :style="{'left': left + 'px', 'top': top + 'px'}">
        <el-dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$emit('refresh')">重新加载</el-dropdown-item>
            <el-dropdown-item @click="closeSelectTab">关闭当前</el-dropdown-item>
            <el-dropdown-item @click="closeLeftTabs">关闭左侧</el-dropdown-item>
            <el-dropdown-item @click="closeRightTabs">关闭右侧</el-dropdown-item>
            <el-dropdown-item @click="closeOtherTabs">关闭其他</el-dropdown-item>
            <el-dropdown-item @click="closeAllTabs">关闭全部</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </teleport>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref, watch } from 'vue'
import { useStore } from "vuex"
import { useRoute, useRouter } from "vue-router"

export default defineComponent({
  name: 'TabBar',
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const affixTabs = reactive([])
    const selectTab = ref("")

    const menuVisible = ref(false)
    const top = ref(0)
    const left = ref(0)
    const openMenu = (item, e) => {
      left.value = e.clientX
      top.value = e.clientY
      menuVisible.value = true
      selectTab.value = item.path
    }

    const closeMenu = () => { menuVisible.value = false }

    watch(menuVisible, (value) => {
      if (value) {
        window.addEventListener('click', closeMenu)
      } else {
        window.removeEventListener('click', closeMenu)
      }
    })

    const isActive = (tab) => (tab.path === route.path)

    const visitedRoutes = computed(() => store.getters['tabsBar/visitedRoutes'])

    const closeLeftTabs = async () => {
      const view = await toThisTab()
      await store.dispatch("tabsBar/delLeftRoutes", view)
    }

    const closeRightTabs = async () => {
      const view = await toThisTab()
      await store.dispatch("tabsBar/closeRightRoutes", view)
    }

    const closeOtherTabs = async () => {
      const view = await toThisTab()
      await store.dispatch("tabsBar/delOtherRoutes", view)
    }

    const closeAllTabs = async () => {
      const view = await toThisTab()
      const { visitedRoutes } = await store.dispatch("tabsBar/delAllRoutes")
      if (affixTabs.some(tab => tab.path === view.path)) {
        return;
      }
      toLastTab(visitedRoutes, view)
    }

    const closeSelectTab = async (view) => {
      const { visitedRoutes } = await store.dispatch("tabsBar/delRoute", view)
      if (isActive(view)) {
        toLastTab(visitedRoutes, view)
      }
    }

    const toLastTab = (visitedRoutes, view) => {
      const latestView = visitedRoutes.slice(-1)[0]
      if (latestView) {
        router.push(latestView)
      } else {
        router.push("/")
      }
    }

    const toThisTab = () => {
      const view = visitedRoutes.filter(item => {
        if (item.path === route.fullPath) {
          return item
        }
      })[0]
      if (route.path !== view.path) router.push(view)
      return view
    }

    return {
      openMenu,
      menuVisible,
      top,
      left,
      selectTab,
      closeLeftTabs,
      closeRightTabs,
      closeOtherTabs,
      closeAllTabs,
      closeSelectTab,
      visitedRoutes
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
