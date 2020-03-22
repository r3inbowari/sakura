import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Lazyload } from 'vant'
import vuescroll from 'vuescroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Toast } from 'vant'

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.use(Toast)

Vue.use(VueAxios, axios)
Vue.use(vuescroll, {
  ops: {}
})

Vue.use(Lazyload)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
