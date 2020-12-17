<template>
  <div class="index">
    <van-nav-bar title="首页" :fixed="true" :placeholder="true" />
    <div style="position: relative">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        background="transparent"
        shape="round"
      />
      <swiper
        :swiperList="swiperList"
        :autoplay="3000"
        indicatorColor="white"
      />
    </div>

    <van-grid :border="false">
      <van-grid-item
        icon="https://m.360buyimg.com/babel/jfs/t1/60778/37/9838/3066/5d7739faEd3b7dbb9/dd4d9ef7ce8fc169.png"
        text="每日福利"
      />
      <van-grid-item
        icon="https://m.360buyimg.com/babel/jfs/t1/51584/31/10221/1685/5d7739e7E1adb25cd/1d0957d7f2ae01a2.png"
        text="热销榜"
      />
      <van-grid-item
        icon="https://m.360buyimg.com/babel/jfs/t1/57014/6/10297/815/5d773a07Ec7a61fc9/97917a2daa34be0f.png"
        text="皮噜甄选"
      />
      <van-grid-item
        icon="https://m.360buyimg.com/babel/jfs/t1/71890/14/9897/3048/5d7739ddE93eb94f8/f1f6dc5c207329f9.png"
        text="会员中心"
      />
    </van-grid>

    <section>
      <article class="colorA">
        <span>全球奶粉</span>
        <img src="../assets/images/naifen.jpg" alt="" />
      </article>
      <article class="colorB">
        <span>尿不湿</span>
        <img src="../assets/images/niaobushi.jpg" alt="" />
      </article>
      <article class="colorC">
        <span>营养辅食</span>
        <img src="../assets/images/fushi.jpg" alt="" />
      </article>
      <article class="colorD">
        <span>宝宝洗护</span>
        <img src="../assets/images/xihu.jpg" alt="" />
      </article>
    </section>

    <div class="recommend">
      <header>推荐商品</header>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="0"
      >
        <van-card
          v-for="item in recommendList"
          :key="item.productId"
          :price="item.currentPrice"
          :title="item.productName"
          :thumb="item.imgUrl"
          :origin-price="item.originalPrice"
          @click="goToDetail(item.productId)"
        />
      </van-list>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper";

export default {
  data() {
    return {
      value: "",
      count: 4,
      page: 1,
      loading: false,
      finished: true
    };
  },
  components: {
    Swiper
  },
  mounted() {
    this.$store.dispatch("getBannerList");
    this.$store
      .dispatch("getRecommendList", {
        count: this.count,
        page: this.page
      })
      .then(length => {
        this.page++;
        this.loading = false;
        if (length < this.count) {
          this.finished = true;
        } else {
          this.finished = false;
        }
      });
  },
  computed: {
    swiperList() {
      return this.$store.state.home.swiperList;
    },
    recommendList() {
      return this.$store.state.home.recommendList;
    }
  },
  methods: {
    onLoad() {
      this.$store
        .dispatch("getRecommendList", {
          count: this.count,
          page: this.page
        })
        .then(length => {
          this.page++;
          this.loading = false;
          if (length < this.count) {
            this.finished = true;
          } else {
            this.finished = false;
          }
        });
    },
    goToDetail(id) {
      this.$router.push("./detail/" + id);
    }
  },
  beforeDestory() {
    this.$store.commit("clearRecommendList");
  }
};
</script>

<style lang="stylus" scoped>
section
  display flex
  flex-wrap wrap
  justify-content space-evenly

  article
    width 172px
    height 100px
    margin-bottom 20px
    font-size 16px
    font-weight 900
    padding 10px 0 0 10px
    position relative
    img
      position absolute
      width 60px
      right 10px
      bottom 10px
  .colorA
    background rgb(255,246,227)
  .colorB
    background rgb(252,255,239)
  .colorC
    background rgb(255,243,245)
  .colorD
    background rgb(246,248,253)

.recommend
  padding 0 10px

  header
    font-size 14px
    border-left 4px solid orange
    padding-left 5px
</style>
