<template>
  <div class="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-semibold mb-4 text-center">Map Creator</h1>
    
    <div class="space-y-4">
      <div>
        <label for="mapName" class="block text-sm font-medium text-gray-700">Gib einen Namen für die Map ein:</label>
        <input
          id="mapName"
          type="text"
          v-model="mapStore.mapName"
          placeholder="Map Name"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label for="rows" class="block text-sm font-medium text-gray-700">Definiere die Größe des Spielfelds:</label>
        <div>
          <label for="rows" class="block text-sm font-medium text-gray-700">Zeilen:</label>
          <input
            id="rows"
            type="number"
            v-model="mapStore.rows"
            placeholder="Anzahl der Reihen"
            :min="mapStore.minGridSize"
            :max="mapStore.maxGridSize"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div class="mt-4">
          <label for="cols" class="block text-sm font-medium text-gray-700">Spalten:</label>
          <input
            id="cols"
            type="number"
            v-model="mapStore.cols"
            placeholder="Anzahl der Spalten"
            :min="mapStore.minGridSize"
            :max="mapStore.maxGridSize"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <button
        class="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        @click="mapStore.createGrid"
      >
        Spielfeld erstellen
      </button>
    </div>
  </div>

  <div class="mx-auto w-max">
  <!-- Raster des Spielfelds -->
  <div
    class="grid-container mt-8 grid gap-0.5"
    :style="{
      gridTemplateColumns: `repeat(${mapStore.cols}, 50px)`,
      gridTemplateRows: `repeat(${mapStore.rows}, 50px)`
    }"
    v-if="mapStore.grid.length > 0"
  >
    <div
      v-for="(cell, index) in mapStore.grid.flat()"
      :key="'cell-' + index"
      class="grid-cell w-12 h-12 border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200"
      @click="mapStore.updateCell(Math.floor(index / mapStore.cols), index % mapStore.cols)"
      :data-value="cell"
    >
      {{ cell }}
    </div>
  </div>

  <br>

  <button
  v-if="mapStore.grid.length > 0"
    class="w-full py-2 mt-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
    @click="mapStore.saveMap"
  >
    Create
  </button>
</div>
</template>




<script setup lang="ts">
import { onMounted } from "vue";
import { useMapStore } from "@/stores/map/MapStore";


const mapStore = useMapStore();
//sorgt dafür das vorhandene Maps aus dem Backend sofort geladen und in mapStore.allmaps gespeichert
onMounted (async() => {
  await mapStore.fetchMaps();
  console.log("Aktuelle Maps:", mapStore.mapsDTD.maps);
})

onMounted(async () => {
    await mapStore.fetchGridLimits();
    console.log("grid min:", mapStore.minGridSize);
    console.log("grid max:", mapStore.maxGridSize);
});

</script>

<style scoped>
.grid-container {
  display: grid;
  gap: 1px; /* Abstand zwischen den Zellen */
  background-color: #ddd;
}

.grid-cell {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #2b2828;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  user-select: none;
}

/* Wand (Stern '*') */
.grid-cell[data-value="wall"] {
  background-color: #444;
  color: #fff;
}

/* Weg ("weg") */
.grid-cell[data-value="weg"] {
  background-color: #fff;
  color: #000;
}


/* Hover-Effekt */
.grid-cell:hover {
  background-color: #6fcdd2;
}

.buttons-top-bottom {
    background-color:bisque;
    border-radius: 10px;
    padding: 10px;
}
.buttons-top-bottom:hover {
  background-color: rgb(247, 194, 130);
}
</style>


