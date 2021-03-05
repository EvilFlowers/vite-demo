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
      <i :class="['fas', isFullScreen ? 'fa-compress-arrows-alt' : 'fa-expand-arrows-alt']" @click="handleFull"></i>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'NavBar',
  props: {
    collapse: Boolean
  },
  setup(props) {
    const { collapse } = toRefs(props)
    const isFullScreen = ref(false)
    return {
      collapse,
      isFullScreen
    }
  },
  computed: {
    classObj() {
      return [
          'indent-outdent',
          'fas',
          this.collapse ? 'fa-indent' : 'fa-outdent'
      ]
    }
  },
  methods: {
    handleCollapse() {
      this.$emit('handle-collapse')
    },
    handleFull() {
      this.isFullScreen = !this.isFullScreen

    }
  }
})
</script>

<style lang="scss" scoped>

.nav-container {
  margin-left: 20px;
  height: $base-nav-height;
  display: flex;

  .nav-left {
    display: flex;
    align-items: center;
    justify-content: start;
    height: $base-nav-height;
    flex: 1;

    .indent-outdent {
      font-size: 20px;
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $base-nav-height;
    flex: 2;
  }
}
</style>
