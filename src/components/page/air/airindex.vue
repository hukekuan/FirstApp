<template>
  <div id='airindex' class="layui-tab layui-tab-card" lay-filter="demo" style="height: 450px;">
    <ul class="layui-tab-title">
      <li class="layui-this">站点列表</li>
      <li>全市概况</li>
    </ul>
    <div class="layui-tab-content">
      <div class="layui-tab-item layui-show">
      </div>
      <div class="layui-tab-item"></div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      layui.use(['layer', 'element'],function () {
          let layer = layui.layer, element = layui.element();
          //监听Tab切换
          element.on('tab(demo)', function(data){
          });
      })
    }
  }
</script>
<style scoped>

</style>
