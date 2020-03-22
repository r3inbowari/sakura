<template>
  <div style="display: flex; margin: 10px">
    <img class="left-image left-radius" src="http://css.njhzmxx.com/acg/2020/02/06/20200206031849222.jpg" alt />

    <div class="right-item right-radius">
      <h3 class="bangumi-single-text-nowrap bangumi-single-item-title theme-night">织田肉桂信长</h3>

      <p class="bangumi-single-text-nowrap bangumi-single-item-tags">
        <van-tag class="bangumi-single-item-tag">搞笑</van-tag>
        <van-tag class="bangumi-single-item-tag">日本</van-tag>
        <van-tag class="bangumi-single-item-tag">治愈</van-tag>
      </p>

      <p class="bangumi-single-item-update bangumi-single-text-nowrap theme-night">更新至第12集</p>

      <p
        class="bangumi-single-item-detail van-multi-ellipsis--l2 theme-night"
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
.bangumi-single-item-title {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
}

.bangumi-single-item-tags {
  margin-top: 0px;
  margin-bottom: 5px;
  margin-left: 10px;
}

.bangumi-single-item-tag {
  margin-right: 5px;
}

.bangumi-single-item-update {
  margin-top: 0px;
  margin-bottom: 5px;
  margin-left: 10px;
  font-size: 14px;
}

.bangumi-single-item-detail {
  margin-left: 6px;
  margin-right: 10px;
  margin-top: 5px;
}

.theme-night {
  color: #929292;
}

.bangumi-single-text-nowrap {
  /* nowrap ... */
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
  height: 150px;
}

.left-image {
  width: auto;
  height: 150px;
}
</style>