<template>
  <div class="ol-map" id="map"></div>
</template>

<script>
  import Bus from '../../common/bus.js';
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
    mounted () {
      Bus.$on("b-msg", function (a) {
        alert("来自菜单的数据：" + a)
      }.bind(this));

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
    z-index: -1000;
    height:100%;
    width:100%;
    margin: 0;
    padding: 0;
  }
</style>
