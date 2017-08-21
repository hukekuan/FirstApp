<template>
  <div class="c3gis">
  <c3map></c3map>
  <menus></menus>
  <layer></layer>
  <!--<echarts></echarts>-->
  </div>
</template>

<script>
import c3map from './map'
import menus from './menus'
import layer from './layer'
//import echarts from './echarts'

export default {
  components: {
    c3map, menus,layer
//    ,echarts
   }
}
</script>

<style>
  .c3gis{
    height:100%;
    width:100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
