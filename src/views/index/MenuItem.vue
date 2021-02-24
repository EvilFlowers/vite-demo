<script>
import { defineComponent, h } from 'vue'

export default {
  name: 'Item',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { icon, title } = props
    /*return () => {

    }*/

    return (
        <div>
          <i class={["fas", icon]}/>
          <span>{title}</span>
        </div>
    )
  },
  /*render() {
    function iconEl(icon) {
      return h("i", {class: ["fas", icon]} )
    }
    function titleEl(title) {
      return h("span", title)
    }
    return h("div", [iconEl(this.icon), titleEl(this.title)])
  }*/
}

/*export default defineComponent({
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  render(h, context) {
    const { icon, title } = context.props

    const vnodes = []
    if (icon) {
      if (icon.includes("fa")) {
        vnodes.push(<i class={[icon, "fas"]} />)
      } else {
        vnodes.push(<i class={ icon } />)
      }
    }

    if (title) {
      vnodes.push(<span slot="title">{ title }</span>)
    }

    return vnodes
  }
})*/
</script>

<style scoped>

</style>
