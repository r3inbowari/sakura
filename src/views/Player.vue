<template>
  <div class="video" ref="pb">
    <d-player ref="player" :options="options"></d-player>

    <van-tabs v-model="tabActive">
      <van-tab title="简介">
        <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh">
          <van-skeleton
            style="margin-top: 16px; height: 400px"
            avatar-size="80"
            avatar-shape="square"
            title
            avatar
            :row="5"
            :row-width="roww"
            :loading="loading"
          >
            <div>实际内容</div>
          </van-skeleton>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="评论">评论</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
export default {
  components: {
    "d-player": VueDPlayer
  },
  data() {
    return {
      roww: ["30%", "30%", "100%", "100%", "60%"],
      options: {
        autoplay: true,
        preload: "metadata",
        video: {
          url:
            "https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/607272_11d5cad2110530c892f7248946ebe51b.mp4"
        },
        contextmenu: [{}]
      },
      // ID标识
      tempID: "",
      // 详细信息Loading
      loading: true,
      // tab -> 详细, 评论
      tabActive: 0,
      // 下拉刷新
      refreshLoading: false,
      // 下拉次数
      count: 2
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.refreshLoading = false;
        this.count++;
      }, 1000);
    },
    // 设置视频播放路径
    _setVideoUrl(url) {
      this.player.switchVideo({
        url: url
      });
    }
  },
  created() {},
  mounted() {
    this.player = this.$refs.player.dp;
    // 返回顶部位置
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log(this.$route.params.playurl);
  },
  activated() {
    if (this.$route.params.id === this.tempID) {
      this.player.play();
      this.$toast("继续播放");
      console.log("继续播放");
    } else {
      var self = this;
      this._setVideoUrl(this.$route.params.playurl);
      this.tempID = this.$route.params.id;
      this.player.on("loadedmetadata", function() {
        self.player.play();
      });
      console.log("视频切换");
    }
  }
};
</script>
