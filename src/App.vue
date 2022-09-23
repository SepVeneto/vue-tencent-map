<script setup lang="ts">
import { TencentMap } from './Map'

const tMap = new TencentMap('map-container')


function handleAdd() {
  tMap.setMarker(
    'https://rxjbz.jsrxjt.com/res/walk/pkm3w8/20220602/7955598d95fe6fa1016b02f950905078.png',
    200,
    30
  )
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
