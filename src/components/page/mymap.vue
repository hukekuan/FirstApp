<template>
  <div class="mymap">
  <c3map></c3map>
  <menus></menus>
  </div>
</template>

<script>
import Vue from 'vue'
import c3map from './map'
import menus from './menus'

export var Hub = new Vue()
export default {
  components: {
    c3map, menus
   }
}
</script>

<style>
  .mymap{
    height:100%;
    width:100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
