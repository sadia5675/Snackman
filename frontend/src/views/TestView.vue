<script setup lang="ts">
import { onMounted } from 'vue';
import { useGameStore } from '@/stores/game/gamestore';

const gamestore = useGameStore();

onMounted(async () => {
  console.log("Selected Map at Mount:", gamestore.selectedMap); // Debugging
  if (gamestore.selectedMap) {
    const data = await gamestore.fetchMapData(gamestore.selectedMap);
    console.log("Map Data Fetched:", data); // Debugging
  } else {
    console.error("No selected map.");
  }
});
</script>

<template>
  <div>
    <h1>Selected Map: {{ gamestore.selectedMap }}</h1>
    <div v-if="gamestore.mapData.length > 0">
      <p>Map Data:</p>
      <ul>
        <li v-for="line in gamestore.mapData" :key="line">{{ line }}</li>
      </ul>
    </div>
    <p v-else>No map data available</p>
  </div>
</template>
