<template>
  <div id="main"></div>
</template>

<script>
  export default {
    name: 'echarts',
    mounted () {
      this.$store.commit('chart/initChart');
    }
  }
</script>

<style scoped>
  #main {
    z-index: 1000;
    position: absolute;
    width: 600px;
    height:400px;
    right: 15px;
    bottom: 15px;
  }
</style>
