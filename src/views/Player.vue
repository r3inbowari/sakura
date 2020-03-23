<template>
  <div class="video" ref="pb">
    <d-player ref="player" :options="options"></d-player>
  </div>
</template>

<script>
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
// import SakuraPlayer from "@/components/VideoPlayer";
export default {
  components: {
    // SakuraPlayer
    "d-player": VueDPlayer
  },
  data() {
    return {
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
      tempID: ""
    };
  },
  methods: {
    ppp() {
      this.player.play();
    },
    bbb() {
      this.player.switchVideo({
        url:
          "http://120.241.192.227/vmtt.tc.qq.com/1098_c7f85a7cbc26d99e77261e464006bcc5.f0.mp4?vkey=B64696CFDBDF842C959BA028A1292D883B10D54A37928DF772CEC4B5734E765FCF1FEC4FCD8052F667B3E7F477187605C947B8D77FFB5FFF7A1A79F81060A18221AB2E0B6F9926C980E3E95C78673AAE0124D4C24834323D"
      });
    },
    ccc() {
      this.player.switchVideo({
        url:
          "http://120.241.192.197/vmtt.tc.qq.com/1098_cf1673e5d55cdd15f7da1a3f4d357c48.f0.mp4?vkey=385C08D7F95B1E634D3BDCDDB3588D119BEC1858F6101D5404A8D71F7704E6C78AE4CC7D50C8F28946C291BF9877D78F38503C5536FFCB1F8E2C6F37B0E4C7F344991667964FFB8749DCEF482DFBD83233CD24681839ECB4"
      });
    },
    // 设置视频播放路径
    _setVideoUrl(url) {
      this.player.switchVideo({
        url: url
      });
    }
  },
  created() {
    // this._setVideoUrl(this.source);
  },
  mounted() {
    this.player = this.$refs.player.dp;
    // 返回顶部位置
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // this.bangumiDetail = this.$route.params.result;
    // console.log(this.bangumiDetail);
    console.log(this.$route.params.playurl);
    // this.playerOptions.sources.push({
    //   type: "video/mp4",
    //   src:
    //     "https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/607272_11d5cad2110530c892f7248946ebe51b.mp4"
    //   src: "http://quan.qq.com/video/1098_45b8f3ce393c72e8b8ebabee02fed632"
    //   src: "https://qq.ziyuan605.com/20200223/NWDr7uzY/index.m3u8"
    // });
    // this.$route.params.playurl
    // this.player.pause
    // this._setVideoUrl(this.$route.params.playurl);
    // this.player.play();
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
