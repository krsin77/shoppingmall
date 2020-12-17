<template>
  <div>
    <van-nav-bar title="会员中心" :fixed="true" :placeholder="true" />

    <div class="mine-top">
      <img :src="info.avatarImg" alt="" width="80px" @click="goToUpdate" />
      <span>{{ info.nickName }}</span>
      <em>v1 普通会员</em>
      <div class="mine-blackcard">
        <span>黑金卡</span>
        <i>立即开通</i>
      </div>
    </div>

    <van-cell title="我的订单" is-link />

    <van-grid :border="false" style="margin-bottom: 10px">
      <van-grid-item
        icon="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3380597351,1478879370&fm=26&gp=0.jpg"
        text="待付款"
      />
      <van-grid-item
        icon="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=626127726,3866178709&fm=26&gp=0.jpg"
        text="待发货"
      />
      <van-grid-item
        icon="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2653408146,1444382046&fm=26&gp=0.jpg"
        text="待收货"
      />
      <van-grid-item
        icon="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2185303963,3900898253&fm=26&gp=0.jpg"
        text="已收货"
      />
    </van-grid>

    <van-grid :column-num="4" :border="false">
      <van-grid-item
        v-for="value in 9"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
  </div>
</template>

<script>
import { getUserInfoApi } from "../utils/api";

export default {
  data() {
    return {
      info: {}
    };
  },
  mounted() {
    this.getUserInfoApi();
  },
  methods: {
    async getUserInfoApi() {
      const res = await getUserInfoApi({
        token: localStorage.getItem("token")
      });
      console.log(res);
      this.info = res.result;
    },
    goToUpdate() {
      this.$router.push("./update");
    }
  }
};
</script>

<style lang="stylus" scoped>
.mine-top
  width 100%
  height 150px
  background rgb(255,148,88)
  position relative
  margin-bottom 10px
  img
    border-radius 50%
    margin-left 30px
    margin-top 15px
    vertical-align middle
  span
    color #fff
    font-size 18px
    margin-left 20px
  em
    font-style normal
    font-size 8px
    color gold
    background #fff
    padding 1px 5px
    border-radius 99999px
    position absolute
    top 60px
    left 120px
  .mine-blackcard
    width 90%
    height 45px
    margin 0 auto
    background rgb(55,55,55)
    position absolute
    bottom 0
    left 5%
    border-radius 10px 10px 0 0
    span
      color gold
      font-size 14px
    i
      color rgb(123,92,56)!important
      font-style normal
      font-size 8px
      color gold
      background rgb(244,227,205)
      padding 1px 10px
      border-radius 99999px
      position absolute
      top 15px
      right 20px
</style>
