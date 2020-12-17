import { getBannerListApi, getRecommendListApi } from "../../utils/api";

export default {
  async getBannerList({ commit }) {
    const res = await getBannerListApi();
    // this.swiperList = res.result.list;
    commit("changeBannerList", res.result.list);
  },
  getRecommendList({ commit, state }, payload) {
    return new Promise(resolve => {
      getRecommendListApi({
        count: payload.count,
        page: payload.page
      }).then(res => {
        let list = [...state.recommendList, ...res.result.list];
        commit("changeRecommendList", list);
        resolve(res.result.list.length);
      });
    });
  }
};
