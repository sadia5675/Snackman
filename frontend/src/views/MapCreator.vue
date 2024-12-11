<template>
  <div>
    <h1>Map Creator</h1>
    <p>Gib einen Namen für die Map ein:</p>
    <input type="text" v-model="mapStore.mapName" placeholder="Map Name" />
    <p>Definiere die Größe des Spielfelds:</p>
    <p> Zeilen:</p>
    <input type="number" v-model="mapStore.rows" placeholder="Anzahl der Reihen" min="1" max="15"  />
    <p>Spalten</p>
    <input type="number" v-model="mapStore.cols" placeholder="Anzahl der Spalten" min="1" max="15" />
    <button class="buttons-top-bottom" @click="mapStore.createGrid">Spielfeld erstellen</button>
  </div>
  <br>
  <br>
  <!-- Raster des Spielfelds -->
  <!-- um dynamischer zur sein inline style verwendet (sofort Änderungen gezeigt)
   Bestimmt, wie viele Zeilen/Spalten das Grid haben soll und wie breit diese sein solle(repeat(3, 50px)-> 3 Spalten, jede 50px breit)
  -->
  <div
    class="grid-container"
    :style="{
      gridTemplateColumns: `repeat(${mapStore.cols}, 50px)`,
      gridTemplateRows: `repeat(${mapStore.rows}, 50px)`
    }"
    v-if="mapStore.grid.length > 0"
  >
  <!-- .flat wandelt das "2Darray" in eindimensionalen array um direkt durchzuiterieren (sonst Probleme mit spalte größer als zeile)

  -->
    <div
      v-for="(cell, index) in mapStore.grid.flat()"
      :key="'cell-' + index"
      class="grid-cell"
      @click="mapStore.updateCell(Math.floor(index / mapStore.cols), index % mapStore.cols)"
      :data-value="cell"
    >
      {{ cell }}
    </div>
     <!--Math.floor berechnet die Zeile, in der sich die aktuelle Zelle befindet
     bsp.index = 5, cols = 3, 5 / 3 = 1.66 -> Math.floor rundet runter d.h. Zeile 1
     bsp.index = 5, cols = 3, 5 % 3 = 2 -> Spalte 2.
     -->
  </div>
  <br>
  <br>
  <button class="buttons-top-bottom"@click="mapStore.saveMap">Create</button>

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


