<template>
  <div style="display: flex; margin: 10px">
    <img class="left-image left-radius" src="@/static/demo.jpg" alt />

    <div class="right-item right-radius">
      <h3 class="to-hidden item-title theme-night">织田肉桂信长</h3>

      <p class="to-hidden" style="margin-left:10px">
        <van-tag class="item-tag">搞笑</van-tag>
        <van-tag class="item-tag">日本</van-tag>
        <van-tag class="item-tag">治愈</van-tag>
      </p>

      <p class="to-hidden theme-night" style="margin-left:10px">更新至第12集</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  }
};
</script>

<style>
.item-detail {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-tag {
  margin-right: 5px;
  margin-bottom: 5px;
}

.theme-night {
  color: #929292;
}

.item-title {
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 5px;
}

.to-hidden {
    /* no ... */
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.left-radius {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.right-radius {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.right-item {
  background: #282828;
  width: 100%;
}

.left-image {
  width: auto;
  height: 150px;
}
</style>