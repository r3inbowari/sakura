<template>
  <div class="video">
    
    <SakuraPlayer></SakuraPlayer>
<h1>Sakura Project {{ index }}</h1>
  </div>
</template>

<script>
import SakuraPlayer from '@/components/VideoPlayer'

export default {
  components: {
    SakuraPlayer
  },
  data() {
    return {
      index: ""
    }
  },
  mounted() {
    console.log(this.index)
    this.index = this.$route.params
  }
}
</script>
