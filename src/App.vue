<script setup lang="ts">

import { onMounted, shallowRef } from 'vue';
const map = shallowRef()
window.__MAP__init = function() {
  var center = new qq.maps.LatLng(39.914850, 116.403765);
  map.value = new qq.maps.Map(document.getElementById("map-container"), {
    center,
    zoom: 13,
  });

}
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
onMounted(() => {
  const node = document.createElement('script')
  node.type = 'text/javascript'
  node.src = 'https://map.qq.com/api/js?v=2.exp&key=4MUBZ-XDS66-VG6S3-MHEII-T76NO-D2F2O&callback=__MAP__init'
  document.body.appendChild(node)
})
function handleAdd() {
  const scaleSize = new qq.maps.Size(200, 30)
  var anchor = new qq.maps.Point(6, 6),
      origin = new qq.maps.Point(0.1, 0.1),
      // icon = new qq.maps.MarkerImage('https://mapapi.qq.com/web/lbs/javascriptV2/demo/img/center.gif', size, origin, anchor);
      icon = new qq.maps.MarkerImage('https://rxjbz.jsrxjt.com/res/walk/pkm3w8/20220602/7955598d95fe6fa1016b02f950905078.png', scaleSize, origin, anchor, scaleSize);
  var marker = new qq.maps.Marker({
      icon: icon,
      map: map.value,
      position:map.value.getCenter()});
}
</script>

<template>
  <div id="map-container" />
  <button @click="handleAdd">添加节点</button>
</template>

<style>
#map-container {
  width: 400px;
  height: 600px;
}
</style>
