export default {
  changeBannerList(state, payload) {
    state.swiperList = payload;
  },
  changeRecommendList(state, payload) {
    state.recommendList = payload;
  },
  clearRecommendList(state) {
    state.recommendList = [];
  }
};
