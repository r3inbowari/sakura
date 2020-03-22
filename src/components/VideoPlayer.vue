<template>
  <div>
    <video
      id="first-video"
      width="100%"
      height="100%"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-playsinline
      playsinline
      webkit-playsinline
      preload="auto"
      :poster="poster"
      src="https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/607272_11d5cad2110530c892f7248946ebe51b.mp4"
      :playOrPause="playOrPause"
      x-webkit-airplay="allow"
      @click="pauseVideo"
      @ended="onPlayerEnded($event)"
    ></video>
    <img v-show="isVideoShow" class="play" @click="playvideo" v-if="isiOS" :src="poster" />
    <img
      v-show="isShow"
      class="platStart"
      @click="androidPlay"
      v-if="isAndroid"
      src="http://css.njhzmxx.com/comic/focus/2016/12/29/20161229042521996.jpg"
    />
  </div>
</template>

<script>
export default {
  data() {
    var u = navigator.userAgent;
    return {
      //	      poster: this.appConfig('app.img_url'),
      //	      videoUrl: this.appConfig('app.video_url'),
      isVideoShow: true,
      isShow: true,
      playOrPause: true,
      video: null,
      isAndroid: u.indexOf("Android") > -1 || u.indexOf("Adr") > -1, // android终端
      isiOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    };
  },
  methods: {
    playvideo(event) {
      console.log(event);
      if (this.isiOS) {
        let video = document.querySelector("video");

        this.isVideoShow = false;
        video.play();
        //          进入全屏
        window.onresize = function() {
          video.style.width = window.innerWidth + "px";
          video.style.height = window.innerHeight + "px";
        };
      }
    },
    pauseVideo() {
      //暂停\播放
      let video = document.querySelector("video");
      if (this.playOrPause) {
        video.pause();
      } else {
        video.play();
      }
      this.playOrPause = !this.playOrPause;
    },
    onPlayerEnded(player) {
      console.log(player);
      //视频结束
      this.isVideoShow = true;
      this.isShow = true;
    },
    androidPlay() {
      let video = document.querySelector("video");
      this.isShow = false;
      video.play();
    }
  }
};
</script>

<style scoped>
#first-video {
  object-fit: fill;
}
.container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.play,
.platStart {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
