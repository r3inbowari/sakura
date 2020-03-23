<template>
  <div id="app">
    
    <keep-alive>
      <router-view>
    <div id="nav">
      <van-tabbar route>
        <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/video" icon="search">频道</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    </router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
