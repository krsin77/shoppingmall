<template>
  <div>
    <van-nav-bar title="分类" :fixed="true" :placeholder="true" />

    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      background="transparent"
      shape="round"
    />

    <div class="classify-main">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="item in list"
          :key="item.type"
          :title="item.title"
          @click="itemClick"
        />
      </van-sidebar>

      <div class="classify-right">
        <div
          class="classify-item"
          v-for="item in classifyList"
          :key="item.productId"
          @click="goToDetail(item.productId)"
        >
          <img :src="item.imgUrl" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getClassifyListApi } from "../utils/api";

export default {
  data() {
    return {
      value: "",
      activeKey: 0,
      type: "1",
      list: [
        {
          title: "推荐分类",
          type: "1"
        },
        {
          title: "皮噜娃尿包服务",
          type: "2"
        },
        {
          title: "全球奶粉",
          type: "3"
        },
        {
          title: "尿不湿",
          type: "4"
        },
        {
          title: "营养辅食",
          type: "5"
        },
        {
          title: "喂养用品",
          type: "6"
        },
        {
          title: "宝宝洗护",
          type: "7"
        },
        {
          title: "清洁用品",
          type: "8"
        },
        {
          title: "孕产母乳",
          type: "9"
        },
        {
          title: "婴幼儿服饰",
          type: "10"
        }
      ]
    };
  },
  computed: {
    classifyList() {
      return this.$store.state.classify.classifyList;
    }
  },
  mounted() {
    // this.getClassifyList();
    this.$store.dispatch("getClassifyList", { type: this.type });
  },
  methods: {
    async getClassifyList() {
      const res = await getClassifyListApi({
        type: this.type
      });
      this.classifyList = res.result;
      console.log(res);
    },
    itemClick(index) {
      this.type = this.list[index].type;
      this.$store.dispatch("getClassifyList", { type: this.type });
    },
    goToDetail(id) {
      this.$router.push("./detail/" + id);
    }
  }
};
</script>

<style lang="stylus" scoped>
.classify-main
  display flex
  position absolute
  top 100px
  bottom 50px
  left 0
  right 0

  .classify-right
    display flex
    flex-wrap wrap
    flex 1
    width 100%
    height 50%
    text-align center
    .classify-item
      width 33.33%
      img
        margin-left 25px
        display block
        width 50px
      p
        display block
        font-size 12px
        text-algin center
</style>
