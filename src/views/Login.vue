<template>
  <div>
    <van-nav-bar title="登录" :fixed="true" :placeholder="true" />

    <van-field
      v-model="phone"
      center
      clearable
      label="手机号"
      placeholder="请输入手机号"
    >
      <template #button>
        <van-button size="small" type="primary" @click="sendPhoneNum">
          发送验证码
        </van-button>
      </template>
    </van-field>

    <van-field v-model="code" label="短信" placeholder="请输入验证码" />

    <van-button type="primary" block @click="login">登录</van-button>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getPhoneCodeApi, LoginApi } from "../utils/api";

export default {
  data() {
    return {
      phone: "",
      code: ""
    };
  },
  methods: {
    async sendPhoneNum() {
      const res = await getPhoneCodeApi({
        phone: this.phone,
        templateId: "537707"
      });
      console.log(res);
    },
    async login() {
      const res = await LoginApi({
        phone: this.phone,
        code: this.code
      });
      console.log(res);
      Toast.success("登陆成功");
      localStorage.setItem("token", res.result.token);
      this.$router.replace("/mine");
    }
  }
};
</script>
