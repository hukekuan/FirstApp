<template>
  <div class="ol-map" id="map"></div>
</template>

<script>
  let ol = require('openlayers')
  require('openlayers/dist/ol.css')
  export default {
    name: 'map',
    props: {
    },
    data () {
      return {
        map: {
          type: Object,
          default: {}
        }
      }
    },
    computed: {
      id () {
        return this.$options.name + '-' + this._uid
      }
    },
    mounted () {
      this.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([51.22, 7.60]),
          zoom: 4
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ol-map{
    height:500px;
    width:500px;
  }
</style>
