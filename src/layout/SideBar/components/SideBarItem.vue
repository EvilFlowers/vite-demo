<template>
  <component
      :is="menuComponent"
      :item="item"
  >
    <template v-if="item.children && item.children.length">
      <SideBarItem
          v-for="route in item.children"
          :key="route.url"
          :item="route"
      />
    </template>
  </component>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue'

export default defineComponent({
  name: 'SideBarItem',
  props: {
    item: Object
  },
  setup(props) {
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

    onMounted(() => {
      // console.log(props.item)
      console.log(routeChildren)
    })

/*    const menuComponent = () => {
      if (handleChildren(this.item.children, this.item) && (
          !routeChildren.children || routeChildren.notShowChildren
      )) {
        return "MenuItem";
      } else {
        return "SubMenu"
      }
    }*/

    return {
      handleChildren,
      routeChildren
    }
  },
  computed: {
    menuComponent() {
      // console.log(this.handleChildren)
      if (this.handleChildren(this.item.children, this.item) && (
          !this.routeChildren.children || this.routeChildren.notShowChildren
      )) {
        return "MenuItem";
      } else {
        return "SubMenu"
      }
    }
  }
})
</script>

<style scoped>

</style>
