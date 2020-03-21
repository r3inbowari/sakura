<template>
  <div class="video">
    <h1>Sakura Project {{ index }}</h1>
  </div>
</template>

<script>
export default {
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
