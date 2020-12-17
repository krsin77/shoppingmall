<template>
  <div class="update">
    <van-nav-bar
      title="会员资料"
      left-arrow
      :fixed="true"
      :placeholder="true"
      @click-left="onClickLeft"
    />

    <van-cell-group>
      <van-field label="头像" is-link input-align="right" right-icon="" />
      <van-field
        label="账号"
        is-link
        value="9233"
        disabled
        input-align="right"
      />
      <van-field
        v-model="name"
        label="姓名"
        placeholder="未填写"
        is-link
        input-align="right"
        @blur="inputBlur"
      />
      <van-field
        v-model="phone"
        label="手机"
        placeholder="未填写"
        is-link
        input-align="right"
        @blur="inputBlur"
      />
      <van-field
        v-model="email"
        label="邮箱"
        placeholder="未填写"
        is-link
        input-align="right"
      />
    </van-cell-group>
    <van-cell title="地址管理" is-link style="margin:10px 0" />
    <van-cell title="修改密码" is-link />
    <van-cell title="绑定其他账号" is-link />
    <van-button type="primary" block color="#fff" style="margin-top: 10px">
      退出当前账号
    </van-button>
  </div>
</template>

<script>
import { Toast } from "vant";
import { updateUserInfoApi, getUserInfoApi } from "../utils/api";

export default {
  data() {
    return {
      sex: "1",
      name: "",
      phone: "",
      email: "",
      info: {}
    };
  },
  mounted() {
    this.getUserInfoApi();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async inputBlur() {
      const res = await updateUserInfoApi({
        token: localStorage.getItem("token"),
        nickName: this.name,
        sex: this.sex
      });
      console.log(res);
      Toast.success("修改成功");
    },
    async getUserInfoApi() {
      const res = await getUserInfoApi({
        token: localStorage.getItem("token")
      });
      console.log(res);
      this.info = res.result;
    }
  }
};
</script>

<style lang="stylus" scoped>
.update
  background rgb(246,245,245)
  height 100%
  .van-button__text
    color #000
</style>
