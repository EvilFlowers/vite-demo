<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld/>
</template>

<script>
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue"

export default defineComponent({
  name: "Home",
  components: { HelloWorld },
  setup() {
      return {}
  }
})
</script>

<style scoped>

</style>
