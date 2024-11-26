<template>
  <div>
    <h1>Map Creator</h1>
    <p>Definiere die Größe des Spielfelds:</p>
    <!-- eingabe wird an der row und coolum gebunden -->
    <input type="number" v-model="rows" placeholder="Anzahl der Reihen" min="1" max="15"/>
    <input type="number" v-model="cols" placeholder="Anzahl der Spalten" min="1" max="15"/>
    <button @click="createGrid">Spielfeld erstellen</button>

    <!-- Rasteranzeige nur dann wenn das Raster erstellt wurde-->
    <div class="grid-container" v-if="grid.length > 0"> 
      <div
        v-for="(row, rowIndex) in grid"
        :key="'row-' + rowIndex"
        class="grid-row"
      >
        <div
          v-for="(cell, colIndex) in row"
          :key="'cell-' + rowIndex + '-' + colIndex"
          class="grid-cell"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const rows = ref<number>(0); // Anzahl der Reihen
const cols = ref<number>(0); // Anzahl der Spalten
const grid = ref<number[][]>([]); // 2D-Array für das Raster

// Funktion zur Erstellung des Spielfeldes
function createGrid() {
  // Erstellt ein Raster entsprechend der Zeilen und Spalten
  grid.value = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => 0)
  );
  console.log(`Erstelle ein Spielfeld mit ${rows.value} Reihen und ${cols.value} Spalten.`);
}
</script>

<style scoped>
.grid-container {
  display: grid;
  gap: 5px;
  margin-top: 20px;
}

.grid-row {
  display: flex;
}

.grid-cell {
  width: 30px;
  height: 30px;
  background-color: #f1f1c2;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
