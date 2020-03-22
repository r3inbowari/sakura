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
        <van-swipe style="height: 200px" class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <van-image radius="0" style="width: 100%" lazy-load src="http://css.njhzmxx.com/comic/focus/2018/10/201810070912.jpg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </van-swipe-item>
          
          <van-swipe-item>
            <van-image style="width: 100%" lazy-load src="http://css.njhzmxx.com/comic/focus/2016/12/29/20161229042521996.jpg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </van-swipe-item>

          <van-swipe-item>
            <van-image style="width: 100%" lazy-load src="http://css.njhzmxx.com/comic/focus/2018/04/04/20180404045452339.jpg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </van-swipe-item>

          <van-swipe-item>
            <van-image style="width: 100%" lazy-load src="http://css.njhzmxx.com/comic/focus/2016/12/29/20161229040456369.jpg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </van-swipe-item>

        </van-swipe>
        <van-notice-bar
          mode="closeable"
          color="#1989fa"
          background="#ecf9ff"
          left-icon="volume-o"
        >网站公告: 正在建设中...</van-notice-bar>

        <BangumiList></BangumiList>

        <BangumiCard></BangumiCard>
        <BangumiCard></BangumiCard>
      </van-tab>
      <van-tab title="国漫">国漫</van-tab>
      <van-tab title="最新">最新</van-tab>
      <van-tab title="排行榜">排行榜</van-tab>
      <van-tab title="日漫">日漫</van-tab>
      <van-tab title="更多">更多</van-tab>
    </van-tabs>

    <div style="margin: 10px">本网站提供新影视资源均系收集各大网站，本网站只提供web页面浏览服务，并不提供影片资源存储，也不参与任何视频录制、上传!</div>
    <div>Coryright © 2020 All Right Reserved</div>
    <div>invenleey.oicp.net</div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/iconfont.css";
import BangumiCard from "@/components/BangumiCard";
import BangumiList from "@/components/BangumiList";

export default {
  name: "Home",
  components: {
    BangumiCard,
    BangumiList
  },
  data() {
    return {
      active: 0,
      hide: false,
      value: ""
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
