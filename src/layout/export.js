import MenuItem from "./SideBar/components/MenuItem.vue";
import SubMenu from "./SideBar/components/SubMenu.vue";

export default {
  install: (app, options) => {
    app.component("MenuItem", MenuItem);
    app.component("SubMenu", SubMenu)
  }
}
