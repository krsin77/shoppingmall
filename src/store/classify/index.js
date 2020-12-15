import { getClassifyListApi } from "../../utils/api";

const classify = {
  state: {
    classifyList: []
  },
  getters: {},
  mutations: {
    changeClassifyList(state, payload) {
      state.classifyList = payload;
    }
  },
  actions: {
    async getClassifyList({ commit }, payload) {
      const res = await getClassifyListApi({
        type: payload.type
      });
      // this.classifyList = res.result;
      commit("changeClassifyList", res.result);
    }
  }
};

export default classify;
