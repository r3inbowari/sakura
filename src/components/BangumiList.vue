<template>
  <div style="margin-left:10px; margin-top: 10px">
    <van-skeleton
      style="height:180px; margin-top: 30px"
      avatar-shape="square"
      avatar-size="60"
      title
      avatar
      :row="4"
      :loading="loading"
    >
      <van-row>
        <van-col span="2">
          <img class="icon-avatar" src="../assets/tv.png" alt="Smiley face" width="30" height="30" />
        </van-col>
        <van-col span="10">
          <p class="list-title">最近更新</p>
        </van-col>
        <van-col span="12">
          <p class="list-update">更新: 5分钟前</p>
        </van-col>
      </van-row>
      <div>
        <vue-scroll :ops="ops">
          <div style="display: flex;">
            <BangumiSingleCard
              v-for="item of lastUpdate"
              :key="item.id"
              style="margin: 10px;"
              :title="item.title"
              :imgurl="item.cover"
              :update="item.update"
              @click.native="loadBangumiURL(item.id, 11)"
            ></BangumiSingleCard>
          </div>
        </vue-scroll>
      </div>
    </van-skeleton>
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
      lastUpdate: [],
      loading: true
    };
  },
  methods: {
    loadLastestBangumi() {
      this.axios
        .get("apis/last")
        .then(res => {
          this.lastUpdate = res.data.result;
          console.log(this.lastUpdate);
          this.loading = false;
        })
        .catch(res => {
          console.log(res);
        });
    },
    loadBangumiDetail(bid) {
      this.openLoadingDialog();
      this.axios
        .get("apis/detail?bid=" + bid)
        .then(res => {
          this.$toast.clear();
          this.onPushDetail(res.data.result);
        })
        .catch(res => {
          console.log(res);
          this.$toast.clear();
        });
    },
    loadBangumiURL(bid, num) {
      this.openLoadingDialog();
      this.axios
        .get("apis/play?bid=" + bid + "&num=" + num)
        .then(res => {
          this.$toast.clear();
          console.log(res.data.result);
          this.onPushDetail(bid, res.data.result);
        })
        .catch(res => {
          console.log(res);
          this.$toast.clear();
        });
    },
    onPushDetail(id, playurl) {
      let self = this;
      // self.$router.push("/video/" + bangumiID);
      self.$router.push({
        name: "video",
        params: {
          id: id,
          playurl: playurl
        }
      });
    },
    openLoadingDialog() {
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: "加载中"
      });
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
  font-size: 16px;
  margin: 5px 5px;
}

.list-update {
  text-align: right;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 15px;
  color: burlywood;
}
</style>