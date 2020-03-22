<template>
  <div style="width:100px;">
    <div class="con_img">
      <!-- <img class="image right-radius left-radius" src="@/static/demo.jpg" id="scenic_img" /> -->
      <van-image radius="6" lazy-load style="height: 140px" @load="imgLoaded" :src="imgurl">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
      <p class="ms van-ellipsis">{{ update }}</p>
    </div>
    <div class="van-ellipsis">{{ title }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    imgurl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    update: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    imgLoaded() {
      console.log("ok");
    }
  }
};
</script>

<style>
.con_img {
  position: relative;
  width: auto;
  height: auto;
}

.ms {
  color: #ffffff;
  font-size: 12px;
  position: absolute;
  /*position: relative;*/
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  bottom: 5px;
  right: 0;
  width: 80%;
  height: 10%;
  background: #505b4c;
  opacity: 0.8;
  filter: alpha(opacity=60);
  -moz-opacity: 0.8;
}
.image {
  width: 100%;
  height: auto;
}


</style>