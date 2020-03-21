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
          @click="onLoad"
        ></BangumiSingleCard>

        <!-- <BangumiSingleCard
          style="margin: 10px;"
          title="超科学的电磁炮"
          imgurl="http://css.njhzmxx.com/down/1/101654066732881.jpg"
          update="全12集"
        ></BangumiSingleCard>

        <BangumiSingleCard
          style="margin: 10px;"
          title="请在伸展台上微笑"
          imgurl="http://css.njhzmxx.com/down/1/jB13751993717398.jpg"
          update="全12集"
        ></BangumiSingleCard>
        <BangumiSingleCard
          style="margin: 10px;"
          title="请在伸展台上微笑"
          imgurl="http://css.njhzmxx.com/down/1/jB13751993717398.jpg"
          update="全12集"
        ></BangumiSingleCard>
        <BangumiSingleCard
          style="margin: 10px;"
          title="请在伸展台上微笑"
          imgurl="http://css.njhzmxx.com/down/1/jB13751993717398.jpg"
          update="全12集"
        ></BangumiSingleCard>-->
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
    onLoad() {
        console.log("aaaaa")
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