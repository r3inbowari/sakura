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

      <p
        class="van-multi-ellipsis--l2 theme-night"
        style="margin-left:10px; margin-right: 10px; margin-top: 5px"
      >住在海边小镇日之坂钉的行合诸是个还没寻到梦想所以略感焦躁的16岁少女。“言语当中寄宿着灵魂哦，那叫做言灵呢”这是小时候她从祖母那里听来的，在发生某件事后诸就对此深信不疑。某天，诸因为迷路来到了长年未</p>
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
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
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