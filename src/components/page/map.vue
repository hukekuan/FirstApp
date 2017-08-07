<template>
  <div class="ol-map" id="map"></div>
</template>

<script>
  require('openlayers/dist/ol.css')

  export default {
    name: 'map',
    props: {
    },
    data () {
      return {
      }
    },
    mounted () {
      this.$store.commit('map/initMap')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ol-map{
    z-index: -1000;
    height:100%;
    width:100%;
    margin: 0;
    padding: 0;
  }
</style>
