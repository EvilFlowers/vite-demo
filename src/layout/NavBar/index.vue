<template>
  <div class="nav-container" style="margin-left: 20px;">
    <div class="nav-left">
      <i :class="classObj" @click="handleCollapse"></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>菜单</el-breadcrumb-item>
        <el-breadcrumb-item>菜单</el-breadcrumb-item>
        <el-breadcrumb-item>
          <el-dropdown>
            <span>
              下拉菜单<i class="el-icon-arrow-down"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>菜单项1</el-dropdown-item>
                <el-dropdown-item>菜单项2</el-dropdown-item>
                <el-dropdown-item>菜单项3</el-dropdown-item>
                <el-dropdown-item>菜单项4</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-breadcrumb-item>
        <el-breadcrumb-item>菜单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nav-right">
      <i :class="['fas', isFullscreen ? 'fa-compress-arrows-alt' : 'fa-expand-arrows-alt']" @click="handleFull"></i>
      <i class="fas fa-sync-alt" @click="handleRefresh"></i>
      <el-avatar size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
      <el-dropdown>
        <span>内置管理员<i class="el-icon-arrow-down"></i></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>github地址</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, toRefs } from 'vue'
import screenfull from "screenfull"

export default defineComponent({
  name: 'NavBar',
  props: {
    collapse: Boolean
  },
  setup(props) {
    const { collapse } = toRefs(props)
    let isFullscreen = ref(false)

    const handleFull = () => {
      isFullscreen.value = !isFullscreen.value
      screenfull.toggle()
    }
    return {
      collapse,
      isFullscreen,
      handleFull
    }
  },
  computed: {
    classObj() {
      return [
          // 'indent-outdent',
          'fa-lg',
          'fas',
          this.collapse ? 'fa-indent' : 'fa-outdent'
      ]
    }
  },
  methods: {
    handleCollapse() {
      this.$emit('collapse')
    },
    handleRefresh() {
      console.log('refresh')
      this.$emit('refresh')
    }
  }
})
</script>

<style lang="scss" scoped>

.nav-container {
  margin-left: 20px;
  height: $base-nav-height;
  display: flex;
  justify-content: space-between;

  .nav-left {
    display: flex;
    align-items: center;
    justify-content: start;
    height: $base-nav-height;

    .indent-outdent {
      font-size: 20px;
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: $base-nav-height;
    margin-right: 20px;
  }
}
</style>
