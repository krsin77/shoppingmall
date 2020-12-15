import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "amfe-flexible";
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Search,
  Grid,
  GridItem,
  Card,
  List,
  Sidebar,
  SidebarItem
} from "vant";

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Card);
Vue.use(List);
Vue.use(Sidebar);
Vue.use(SidebarItem);

import "./assets/css/style.stylus";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
