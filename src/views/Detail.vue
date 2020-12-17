<template>
  <div class="detail" v-if="detailInfo.title">
    <van-nav-bar
      title="商品详情"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      :placeholder="true"
    />

    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      @change="onChange"
    >
      <van-swipe-item v-for="item in detailInfo.imgArr" :key="item">
        <img :src="item" alt="" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/{{ detailInfo.imgArr.length }}
        </div>
      </template>
    </van-swipe>

    <b>￥</b><em>{{ detailInfo.currentPrice }}</em>
    <strong>普通价 ￥{{ detailInfo.originalPrice }}</strong>
    <p>{{ detailInfo.productName }}</p>

    <van-cell title="选择  可选规格" is-link @click="show = true" />

    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />

    <van-cell title="商品评论（0）" is-link value="好评" />

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onAddCartClicked" />
      <van-goods-action-button type="danger" text="立即购买" @click="onBuyClicked" />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      current: 0,
      show: false,
      goodsId: 1,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "尺码", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: this.$store.state.detail.detailInfo.title // skuValueName：规格值名称
              }
            ]
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: this.$store.state.detail.detailInfo.currentPrice, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: 1, // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: ""
      }
    };
  },
  props: ["id"],
  mounted() {
    this.$store.dispatch("getDetailInfoApi", {
      id: this.id
    });
  },
  computed: {
    detailInfo() {
      return this.$store.state.detail.detailInfo;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.current = index;
    },
    onBuyClicked() {
      Toast("购买成功");
    },
    onAddCartClicked() {
      Toast("加入购物车成功");
    }
  }
};
</script>

<style lang="stylus" scoped>
.my-swipe .van-swipe-item
  color #fff
  font-size 20px
  height 250px
  text-align center
  background-color #39a9ed
  img
    width 100%
    height 100%
.custom-indicator
  position absolute
  right 5px
  bottom 5px
  padding 2px 5px
  font-size 12px
  background rgba(0, 0, 0, 0.1)
  border-radius 99999px
  padding 0.08rem 0.3rem
b
  margin-left 10px
  color orange
  font-size 18px
  font-style normal
  display inline-block
em
  color orange
  font-size 30px
  font-style normal
  display inline-block
strong
  margin-top 10px
  margin-left 10px
  font-size 15px
  font-style normal
  display block
  color #999
p
  font-size 18px
  margin-left 10px
</style>
