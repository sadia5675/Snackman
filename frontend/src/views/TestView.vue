<script setup lang="ts">
import { onMounted } from 'vue'
import { useMapStore } from '@/stores/map/MapStore'
import { storeToRefs } from 'pinia'

const mapStore = useMapStore()
const { mapsDTD } = storeToRefs(mapStore)

onMounted(async () => {
  console.log('Selected Map at Mount:', mapStore.mapsDTD.selectedMap) // Debugging
  if (mapStore.mapsDTD.selectedMap) {
    await mapStore.fetchMaps()
    console.log('Map Data Fetched:', mapsDTD.value) // Debugging
  } else {
    console.error('No selected map.')
  }
})
</script>

<template>
  <div>
    <h1>Selected Map: {{ mapStore.mapsDTD.selectedMap }}</h1>
    <div v-if="mapStore.mapsDTD.maps.length > 0">
      <p>Map Data:</p>
      <ul>
        <li v-for="(line, i) in mapsDTD.selectedMap?.map" :key="i">
          <div v-for="(cell, j) in line" :key="j">
            {{ cell }}
          </div>
        </li>
      </ul>
    </div>
    <p v-else>No map data available</p>
  </div>
</template>
