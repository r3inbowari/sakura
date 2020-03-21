<template>
  <div class="home" ref="bt">
    <van-nav-bar title="标题" left-text="返回" left-arrow :border="false">
      <template #title>
        <van-search shape="round" v-model="value" placeholder="请输入搜索关键词" />
      </template>
      <template #left>
        <img class="icon-avatar" src="../assets/av.png" alt="Smiley face" width="30" height="30" />
      </template>
      <template #right>
        <van-icon :size="25" class="iconfont" class-prefix="icon" name="sixin" />
        <van-icon :size="25" class="iconfont" class-prefix="icon" name="lishijilu" />
      </template>
    </van-nav-bar>

    <van-tabs v-model="active" :border="false" sticky>
      <van-tab title="推荐">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <van-notice-bar mode="closeable" color="#1989fa" background="#ecf9ff" left-icon="volume-o">网站公告</van-notice-bar>
        <BangumiCard></BangumiCard>
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 2
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
        <br />内容 1
      </van-tab>
      <van-tab title="国漫">国漫</van-tab>
      <van-tab title="最新">最新</van-tab>
      <van-tab title="排行榜">排行榜</van-tab>
      <van-tab title="日漫">日漫</van-tab>
      <van-tab title="更多">更多</van-tab>
    </van-tabs>
    <div>11</div>
    <div>11</div>
    <div>11</div>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/iconfont.css";
import BangumiCard from "@/components/BangumiCard";

export default {
  name: "Home",
  components: {
    BangumiCard
  },
  data() {
    return {
      active: 0,
      hide: false
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.van-nav-bar__left {
  height: 35px;
  left: 8px !important;
}
.van-nav-bar__title {
  margin-left: 40px !important;
  max-width: 65% !important;
}
.van-nav-bar__right {
  height: 40px;
  right: 8px !important;
}
.iconfont {
  margin-left: 8px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>>
