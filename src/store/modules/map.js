/**
 * Created by hukekuan on 17-8-7.
 */
let ol = require('openlayers')

// initial state
const state = {
  center: [118.753859, 36.309878],
  target: 'map',
  projection: ol.proj.get('EPSG:4326'),
  zoom: 8,
  maxZoom: 18,
  minZoom: 7,
  map: {
    type: Object,
    default: {}
  }
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  initMap: function (state) {
    let projection = ol.proj.get('EPSG:4326');
    let projectionExtent = projection.getExtent();
    let size = ol.extent.getWidth(projectionExtent) / 256;
    let resolutions = new Array(20);
    let matrixIds = new Array(14);
    for (let z = 0; z < 20; z++) {
      resolutions[z] = size/Math.pow(2, z);
      matrixIds[z] = z;
    };

    state.map = new ol.Map({
      target: state.target,
      logo: false,
      layers: [
        new ol.layer.Tile({
          name: 'vec',
          source: new ol.source.WMTS({
            url: 'http://t{0-6}.tianditu.com/vec_c/wmts',
            layer: 'vec',
            format: 'tiles',
            tileGrid: new ol.tilegrid.WMTS({
              origin: ol.extent.getTopLeft(projectionExtent),
              resolutions: resolutions,
              matrixIds: matrixIds
            }),
            matrixSet: 'c',
            style: 'default'
          })
        }),
        new ol.layer.Tile({
          name: 'sd_xzq',
          source: new ol.source.WMTS({
            url: 'http://www.sdmap.gov.cn/tileservice/SDPubMap',
            layer: '0',
            format: 'image/png',
            tileGrid: new ol.tilegrid.WMTS({
              origin: ol.extent.getTopLeft(projectionExtent),
              resolutions: resolutions,
              matrixIds: matrixIds
            }),
            matrixSet: 'tianditu2013',
            style: 'default'
          })
        })
        // new ol.layer.Vector({
        //   source: new ol.source.Vector({
        //     url: 'http://localhost:8080/api/test',
        //     format: new ol.format.GeoJSON()
        //   }),
        //   style: new ol.style.Style({
        //     stroke: new ol.style.Stroke({
        //       color: 'yellow',
        //       width: 1
        //     }),
        //     fill: new ol.style.Fill({
        //       color: 'rgba(255, 255, 0, 0.1)'
        //     })
        //   })
        // })
      ],
      view: new ol.View({
        center: state.center,
        projection: state.projection,
        zoom: state.zoom,
        maxZoom: state.maxZoom,
        minZoom: state.minZoom
      })
    })
  },
  flytoLocation (state) {
    state.map.getView().animate({
      center: state.center,
      duration: 200,
      zoom: state.zoom,
    }, function () {
    })
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
