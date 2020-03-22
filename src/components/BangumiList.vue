<template>
  <div>
    <div style="display: flex; margin-left:10px; margin-top: 10px">
      <img class="icon-avatar" src="../assets/av.png" alt="Smiley face" width="30" height="30" />
      <p class="list-title">最近更新</p>
      <p class="list-update">更新时间: 1小时前</p>
    </div>

    <vue-scroll :ops="ops">
      <div style="display: flex;">
        <BangumiSingleCard
          v-for="item of lastUpdate"
          :key="item.id"
          style="margin: 10px;"
          :title="item.title"
          :imgurl="item.cover"
          :update="item.update"
          @click.native="onLoad(item.id)"
        ></BangumiSingleCard>
      </div>
    </vue-scroll>
  </div>
</template>

<script>
import BangumiSingleCard from "@/components/BangumiSingleCard";
export default {
  components: {
    BangumiSingleCard
  },
  data() {
    return {
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {
          disable: true
        }
      },
      lastUpdate: []
    };
  },
  methods: {
    loadLastestBangumi() {
      this.axios
        .get("apis/last")
        .then(res => {
          this.lastUpdate = res.data.result;
          console.log(this.lastUpdate);
        })
        .catch(res => {
          console.log(res);
        });
    },
    loadBangumiDetail(bid) {
      this.axios
        .get("apis/detail?bid=" + bid)
        .then(res => {
          this.lastUpdate = res.data.result;
          console.log(this.lastUpdate);
        })
        .catch(res => {
          console.log(res);
        });
    },
    onLoad(bangumiID) {
      console.log(bangumiID);
      this.onLoadingDialog(function(self) {
        // self.$router.push("/video/" + bangumiID);
        self.$router.push({
            name: 'video',
            params: {
                bid: bangumiID
            }
        });
      });
    },
    onLoadingDialog(callback) {
      let self = this;
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: "加载中"
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          // 手动清除 Toast
          this.$toast.clear();
          this.loadBangumiDetail(4748)
          callback(self);
        }
      }, 1000);
    }
  },
  mounted() {
    this.loadLastestBangumi();
  }
};
</script>

<style>
.list-title {
  text-align: left;
  margin-left: 8px;
  margin-top: 4px;
  font-size: 16px;
  width: 40%;
}

.list-update {
  margin-top: 4px;
  color: burlywood;
  float: right;
  width: 60%;
  font-size: 16px;
}
</style>