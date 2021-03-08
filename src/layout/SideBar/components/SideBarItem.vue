<template>
  <component
      :is="menuComponent"
      :item="item"
      :full-path="fullPath + item.url"
  >
    <template v-if="item.children && item.children.length">
      <SideBarItem
          v-for="route in item.children"
          :key="fullPath + route.url"
          :item="route"
          :full-path="fullPath + item.url"
      />
    </template>
  </component>
</template>

<script>
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'SideBarItem',
  props: {
    item: Object,
    fullPath: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const { item } = toRefs(props)
    let routeChildren = {};
    const handleChildren = (children = [], parent) => {
      const showChildren = children.filter((item) => {
        if (item.children) {
          return false
        } else {
          routeChildren = item
          return true
        }
      })
      if (showChildren.length === 1) {
        return true
      }

      if (showChildren.length === 0) {
        routeChildren = {
          ...parent,
          path: "",
          notShowChildren: true
        }
        return true
      }
      return false
    }

    let menuComponent = computed(() => {
      return item.value.children ? "SubMenu" : "MenuItem"
    })

    return {
      handleChildren,
      routeChildren,
      menuComponent
    }
  }
})
</script>

<style scoped>

</style>
