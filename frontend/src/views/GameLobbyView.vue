<template>
  <div class="h-screen bg-zinc-900">
    <div class="max-w-lg mx-auto mt-0">
      <h1 class="text-2xl font-semibold text-center text-zinc-200 mb-10">Game Lobby</h1>
      <div class="mb-4">
        <p class="text-lg font-semibold text-zinc-200">Lobby Code:</p>
        <div class="flex items-center space-x-2">
          <input
            type="text"
            class="w-full p-3 bg-gray-800 shadow-lg rounded-lg text-zinc-300"
            disabled="true"
            v-model="lobbyId"
          />
          <button
            class="bg-yellow-500 text-zinc-900 p-3 rounded-lg hover:bg-yellow-600 transition"
            @click="copyToClipboard()"
          >
            Copy
          </button>
        </div>
      </div>

      <ul class="bg-gray-800 shadow-lg rounded-lg divide-y divide-gray-900">
        <li
          v-for="(player, i) in players"
          :key="player.name"
          class="pr-4 pl-4 p-2 flex items-center space-x-4 transition-colors"
        >
          <PlayerTile v-model="players[i]" />
        </li>
        <li
          v-for="placeholder in placeholderCount"
          class="pr-4 pl-4 p-2 text-gray-500 flex items-center justify-between transition-colors"
        >
          Empty
        </li>
      </ul>

      <div class="flex items-center space-x-6 mt-3">
        <p class="text-lg w-50 font-semibold text-zinc-200">Chickens:</p>
        <input
          type="number"
          v-model="chickenCount"
          class="w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600"
        />
        <button
    class="w-80 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    @click="randomizeRoles"
      >
        Randomize Roles
      </button>
    </div>
      <div class="flex items-center space-x-2 mt-3">
        
        <button
            class="w-50 p-2 bg-blue-800 shadow-lg rounded-lg text-white-600  hover:bg-gray-800"
            @click="openMapPopup()"
        >
        Select Map
        </button>
        <div
        class="w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600"
        >
        <p class="text-sm text-gray-400 mt-2">Selected: {{ selectedMap?.name || 'None' }}</p>
        </div>
     </div>

      <button
        :class="{
          'bg-green-700 hover:bg-green-800 text-zinc-200': isHost,
          'bg-gray-600': !isHost,
        }"
        :disabled="!isHost"
        class="w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"
        @click="startGame()"
      >
        {{ isHost ? 'Start Game' : '---' }}
      </button>
    </div>
  </div>
 
   <!--Pop up-->
   <div
  v-if="isMapPopupVisible"
  class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
>
  <div class="bg-zinc-800 p-6 rounded-lg shadow-lg max-w-md w-full">
    <h2 class="text-lg font-semibold text-zinc-200 mb-4">Select:</h2>
    
    <!-- Dropdown for map selection -->
    <div class="mt-3">
      <select
        v-model="selectedMap"
        class="w-full bg-gray-800 text-zinc-200 p-2 rounded-lg"
      >
        <option
          v-for="map in mapStore.mapsDTD.maps"
          :key="map.id"
          :value="map"
        >
          {{ map.name }}
        </option>
      </select>
    </div>

    <button
      class="bg-red-600 hover:bg-red-700 text-zinc-200 py-1 px-4 rounded-lg transition mt-4"
      @click="closeMapPopup()"
    >
      ok
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
import { Playerrole } from '@/stores/game/dtd/EPlayerrole.js'
import { useGameStore } from '@/stores/game/gamestore'
import { computed, onMounted, ref, watch} from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import PlayerTile from '@/components/PlayerTile.vue'
import type { Result } from '@/stores/game/responses/Result'
import { useMapStore } from '@/stores/map/MapStore'
import type { MapDTD } from '@/stores/game/dtd/MapsDTD'

const gameStore = useGameStore()
const { setPlayerRoleViaStomp} = gameStore

const route = useRoute()

const gamestore = useGameStore()
const mapStore = useMapStore()

//um die Sichtbarkeit des Pop-ups zusteuern
const isMapPopupVisible = ref(false) 

// Die ausgewählte Map
const selectedMap = ref<MapDTD | null>(null);

// TODO: gamemaster.id mit clientplayer.id vergleichen
const isHost = ref(true)

// Eventuell erst starten wenn alle Ready
const isReady = ref(false)

//ID in der aktuellen Lobby
const lobbyId = route.params.id.toString()

// Maximale Anzahl an Spielern in der Lobby
const maxPlayers = 7

// Spieler-Liste aus dem Store oder leeres Array
const players = computed(() => gamestore.gameState.gamedata?.players || [])

// Anzahl der Platzhalter
const placeholderCount = computed(() => maxPlayers - players.value.length)

//Anzahl der festgelegten Chickens im Game
const chickenCount = computed({
  get: () => gamestore.gameState.gamedata?.chickens.length || 0,
  set: async (value: number) => {
    await gamestore.setChickenCount(value)
  },
})

watch(
  () => gamestore.gameState.gamedata?.started,
  (newValue) => {
    if (newValue) {
      router.push({ name: 'game' })
    }
  },
)

//Funktion um das Game zu starten
async function startGame() {
  //startGame request and backend
  try {
    if (!mapStore.mapsDTD.selectedMap?.map) {
      throw new Error("No map selected!");
    }
    await gamestore.startGame(mapStore.mapsDTD.selectedMap?.name)// muss ins backend gesendet werden, da die Tiles erstellt werden müssen
    //Log zum testen
    console.log(gamestore.gameState)
    console.log("playMap: ",gamestore.gameState.gamedata.playmap)// gamestate hat jetzt auch die aktuelle map
  } catch (error) {
    console.log(error)
  }
}

//Um Lobby Code kopieren zu können
function copyToClipboard() {
  alert('Copied to Clipboard!')
  navigator.clipboard.writeText(lobbyId)
}

onMounted(async () => {
  try {
    await gamestore.fetchGameStatus()
  } catch (error) {
    console.error('Error fetching game status:', error)
  }
})

async function randomizeRoles() {
  const roles = [Playerrole.SNACKMAN, Playerrole.GHOST];
  for (const player of players.value) {
    const randomRole: Playerrole = roles[Math.floor(Math.random() * roles.length)];
    player.playerrole = randomRole; // Lokal setzen
    console.log(`Assigning random role ${randomRole} to player ${player.name}`);
    
    // Rolle auf dem Server setzen
    await setPlayerRoleViaStomp(player.name, randomRole).then((result: Result) => {
      console.log(result);
    });
  }
}

onMounted(async () => {
  try {
    await mapStore.fetchMaps(); //mapStore.mapsDTD erhält alle Karten vom Backend
    // default auswahl
    if (mapStore.mapsDTD.maps.length > 0) {
      mapStore.mapsDTD.selectedMap = mapStore.mapsDTD.maps[0];
      selectedMap.value = mapStore.mapsDTD.selectedMap;
      console.log("Default:",selectedMap.value.name);
    }
       
    } catch (error) {
    console.error("Error during setup:", error);
  }
});

// Watch für Map-Auswahl
watch(selectedMap, (newSelectedMap) => {
  if (newSelectedMap) {
    mapStore.mapsDTD.selectedMap = newSelectedMap;
  }
})

// Öffnet das Pop-up
function openMapPopup() {
  isMapPopupVisible.value = true
}

// Schließt das Pop-up
function closeMapPopup() {
  isMapPopupVisible.value = false
}

</script>
