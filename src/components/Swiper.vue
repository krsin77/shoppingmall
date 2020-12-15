<template>
  <van-swipe
    class="my-swipe"
    :autoplay="autoplay"
    :indicatorColor="indicatorColor"
  >
    <van-swipe-item v-for="item in swipeList" :key="item">
      <img :src="item" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    autoplay: Number,
    indicatorColor: String,
    swipeList: Array
  }
};
</script>

<style lang="stylus" scoped>
.my-swipe .van-swipe-item
    height 200px
    color #fff;
    background-color #39a9ed;
    img
        width 100%
        height 100%
</style>
