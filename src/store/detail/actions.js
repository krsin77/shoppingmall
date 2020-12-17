import { getDetailInfoApi } from "../../utils/api";

export default {
  async getDetailInfoApi({ commit }, payload) {
    const res = await getDetailInfoApi({
      productId: payload.id
    });
    commit("getDetailInfo", res.result);
  }
};
