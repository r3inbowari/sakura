<template>
  <div class="video">
    <SakuraPlayer></SakuraPlayer>
    <h1>{{ bangumiDetail.title }}</h1>
    <h1>更新至: {{ bangumiDetail.count }} 集</h1>
    <h1>{{ bangumiDetail.detail }}</h1>
  </div>
</template>

<script>
import SakuraPlayer from "@/components/VideoPlayer";

export default {
  components: {
    SakuraPlayer
  },
  data() {
    return {
      bangumiDetail: ""
    };
  },
  mounted() {
    this.bangumiDetail = this.$route.params.result;
    console.log(this.bangumiDetail);
  }
};
</script>
