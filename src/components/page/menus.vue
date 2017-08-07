<template>
  <div class="button_content">
    <button id="dataLoad_btn" class="layui-btn layui-btn-normal"
            v-on:click="dataLoad">还原</button>
    <button id="removeLayer_btn" class="layui-btn layui-btn-normal">移除图层</button>
    <button id="pointsLoad_btn" class="layui-btn layui-btn-normal">点数据加载</button>
    <button id="boxSelect_btn" class="layui-btn layui-btn-normal">框选</button>
    <button id="featureSelect_btn" class="layui-btn layui-btn-normal">Feature选择</button>
    <button id="Point_btn" class="layui-btn layui-btn-normal">Point</button>
    <button id="LineString_btn" class="layui-btn layui-btn-normal">LineString</button>
    <button id="Polygon_btn" class="layui-btn layui-btn-normal">Polygon</button>
    <!-- 实时坐标 -->
    <div id="mouse-position"></div>
  </div>
</template>

<script>
//  import Bus from '../../common/bus.js';
  export default {
    name: 'menus',
    data () {
      return {
        a: 'map中的数据'
      }
    },
    methods: {
      dataLoad: function (event) {
//        Bus.$emit("b-msg", this.a);
//        alert(event.target.tagName)
        //console.log(this.$store.getters.done)
        this.$store.commit('map/flytoLocation')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button_content{
    z-index: 1000;
    width: auto;
    position: absolute;
    right: 15px;
    top: 15px;
    height: auto;
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#3f000000',endColorstr='#3f000000');
    background-color:rgba(255, 255, 255, 0.3)
  }
</style>
