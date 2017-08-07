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
    mounted () {
      let projection = ol.proj.get("EPSG:4326");
      let projectionExtent = projection.getExtent();
      let size = ol.extent.getWidth(projectionExtent)/256;
      let resolutions = new Array(20);
      let matrixIds = new Array(14);
      for (let z = 0; z < 20; z++) {
        resolutions[z] = size/Math.pow(2,z);
        matrixIds[z] = z;
      };

      this.$store.state.map.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            name: "vec",
            source: new ol.source.WMTS({
              url: 'http://t{0-6}.tianditu.com/vec_c/wmts',
              layer: 'vec',
              format: 'tiles',
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent),
                resolutions: resolutions,
                matrixIds: matrixIds
              }),
              matrixSet: "c",
              style: 'default'
            })
          }),
          new ol.layer.Tile({
            name: "sd_xzq",
            source: new ol.source.WMTS({
              url: 'http://www.sdmap.gov.cn/tileservice/SDPubMap',
              layer:'0',
              format:'image/png',
              tileGrid:new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent),
                resolutions: resolutions,
                matrixIds: matrixIds
              }),
              matrixSet: "tianditu2013",
              style: 'default'
            })
          })
        ],
        view: new ol.View({
          center: [118.753859,36.309878],
          projection:ol.proj.get("EPSG:4326"),
          zoom: 8,
          maxZoom:18,
          minZoom:7
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
