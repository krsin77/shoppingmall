import Vue from "vue";
import Vuex from "vuex";

import classify from "./classify";
import home from "./home";
import detail from "./detail";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    classify,
    detail
  }
});
