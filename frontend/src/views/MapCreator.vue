<template>
  <div>
    <h1>Map Creator</h1>
    <p>Definiere die Größe des Spielfelds:</p>
    <p> Zeilen:</p>
    <input type="number" v-model="rows" placeholder="Anzahl der Reihen" min="1" max="15"  />
    <p>Spalten</p>
    <input type="number" v-model="cols" placeholder="Anzahl der Spalten" min="1" max="15" />
    <button @click="createGrid">Spielfeld erstellen</button>
  </div>
  <!-- Raster des Spielfelds -->
  <!-- um dynamischer zur sein inline style verwendet (sofort Änderungen gezeigt)
   Bestimmt, wie viele Zeilen/Spalten das Grid haben soll und wie breit diese sein solle(repeat(3, 50px)-> 3 Spalten, jede 50px breit) 
  -->
  <div
    class="grid-container"
    :style="{
      gridTemplateColumns: `repeat(${cols}, 50px)`,
      gridTemplateRows: `repeat(${rows}, 50px)`
    }"
    v-if="grid.length > 0"
  >
  <!-- .flat wandelt das "2Darray" in eindimensionalen array um direkt durchzuiterieren (sonst Probleme mit spalte größer als zeile)
   
  -->
    <div
      v-for="(cell, index) in grid.flat()"
      :key="'cell-' + index"
      class="grid-cell"
      @click="updateCell(Math.floor(index / cols), index % cols)"
      :data-value="cell"
    >
      {{ cell }}
    </div>
     <!--Math.floor berechnet die Zeile, in der sich die aktuelle Zelle befindet
     bsp.index = 5, cols = 3, 5 / 3 = 1.66 -> Math.floor rundet runter d.h. Zeile 1
     bsp.index = 5, cols = 3, 5 % 3 = 2 -> Spalte 2.
     -->
  </div>
</template>



<script setup lang="ts">
import { ref } from "vue";
//ref = reagitives Objekt dass direkt auf Änderungen reagiert und an die UI aktualisiert
const rows = ref<number>(0); // Anzahl Reihen
const cols = ref<number>(0); // Anzahl Spalten
const grid = ref<string[][]>([]); // 2D-Array für das Raster

  //funktion um Raster zu erstellen
  function createGrid() {
  // Sicherstellung, dass die Eingaben valide sind spricht nicht unter 0
  if (rows.value <= 0 || cols.value <= 0) {
    alert("Bitte gültige Werte für Reihen und Spalten eingeben.");
    return;
  }
  // Raster als 2D-Array erstellen
  grid.value = Array.from({ length: rows.value }, () => //Array mit der Länge rows.value wird erstellt(jede Zeile ein neues Array)
    Array.from({ length: cols.value }, () => " ")//jedes dieser Zeilen also spalten wird mit 0 aufgefüllt 
  );
  console.log(`Erstelle ein Spielfeld mit ${rows.value} Reihen und ${cols.value} Spalten.`);
  }

  function updateCell(rowIndex:number,colIndex:number){
  // Prüft den aktuellen Wert der Zelle und wechselt zwischen '*' und ' '
  //ternäre Operator --> wie Ifelse aber wesentlich Kompakter
  grid.value[rowIndex][colIndex] =
    grid.value[rowIndex][colIndex] === "*" ? "weg" : "*";
    
  }

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
.grid-cell[data-value="*"] {
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
</style>


