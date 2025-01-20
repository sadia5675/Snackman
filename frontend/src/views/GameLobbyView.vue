<template>
 <video autoplay loop muted class="absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10">
   <source src="@/assets/BackgroundVideo.mp4" type="video/webm">
  </video>


  <div class="flex gap-12 mx-auto max-w-7xl justify-center h-auto mt-24 py-4 items-center">
  <div class="flex-1 h-max self-start">
    <ul class="space-x-2 bg-black/70 border-2 h-max border-yellow-400 backdrop-blur rounded-xl h-full p-2 w-full divide-y divide-gray-300/30">
        <li v-for="(player, i) in players" :key="player.name"
        class="pr-4 pl-4 p-2 flex items-center space-x-4 text-white">
        <PlayerTile v-model="players[i]" :lobby-id="lobbyId" />
      </li>
      <li v-for="placeholder in placeholderCount"
      class="pr-4 pl-4 p-2 text-gray-200/40 flex items-center justify-between transition-colors">
      Empty
    </li>
  </ul>

  <button v-if="isGamemaster" class="w-full mt-2 flex gap-2 px-4 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold text-black p-3 rounded-lg hover:bg-yellow-600 transition"
        @click="randomizeRoles()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dices"><rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"/><path d="M6 18h.01"/><path d="M10 14h.01"/><path d="M15 6h.01"/><path d="M18 9h.01"/></svg>
        Randomize Roles
      </button>
  </div>

  <div class="flex-1 h-full">
    <div class="max-w-lg bg-black/70 border-yellow-400 backdrop-blur rounded-xl border-2 p-4">
      <h1 class="text-2xl font-semibold text-zinc-200">{{ gameStore.gameState.gamedata.gamemaster?.name }}'s Game</h1>
      <hr class="my-4 border-white/20">
      <div class="flex gap-2">
          <div class="text-white flex gap-2 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>
          <p>{{ mapStore.mapsDTD.selectedMap?.name || 'None' }}</p>
          </div>
          <div class="text-white flex gap-2 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paintbrush"><path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/></svg>
          <p>{{ themeStore.selectedTheme || 'None' }}</p>
        </div>
      </div>
      <hr class="my-4 border-white/20">
      <div class="mb-4">
        <p class="text-lg font-semibold text-zinc-200">Lobby Code</p>
        <div class="flex items-center space-x-2">
          <input type="text" class="w-full p-3 bg-black backdrop-blur border-b border-yellow-400 rounded-lg text-zinc-300" disabled="true"
            v-model="lobbyId" />
          <button class="bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold text-black p-3 rounded-lg hover:bg-yellow-600 transition"
            @click="copyToClipboard()">
            Copy
          </button>
        </div>
      </div>

      <div v-if="isGamemaster && gamePassword" class="mb-4 max-w-lg">
        <p class="text-lg font-semibold text-zinc-200">Lobby Passwort</p>
        <div class="flex items-center space-x-2">
          <input type="text" class="w-full p-3 bg-black backdrop-blur border-b border-yellow-400 rounded-lg text-zinc-300" :value="gamePassword"
            disabled="true" />
        </div>
      </div>

    <div class="flex w-full gap-2 mt-2">
      <button v-if="isGamemaster" class="bg-gradient-to-r flex-1 from-yellow-400 to-amber-500 font-semibold text-black p-3 rounded-lg hover:bg-yellow-600 transition"
        @click="openMapPopup()">
        Select Map
      </button>
        <button
        v-if="isGamemaster"
            class="bg-gradient-to-r flex-1 from-yellow-400 to-amber-500 font-semibold text-black p-3 rounded-lg hover:bg-yellow-600 transition"
            @click="openThemePopup()"
        >
        Select Themes
        </button>
        <div class="flex flex-col flex-1">
      <p class="text-lg w-50 font-semibold text-zinc-200"> Chickens: </p>
      <input type="number" v-model="chickenCount"  class=" p-3 bg-black backdrop-blur border-b border-yellow-400 rounded-lg text-zinc-300 " />

    </div>

     </div>
     <div  class="flex gap-2">
      <button  v-if="isGamemaster"
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

    <button :class="{
      'bg-red-700 hover:bg-red-800 text-zinc-200': isHost,
      'bg-gray-600': !isHost
    }" class="w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition" @click="leaveGame(lobbyId)">
      Leave
    </button>
  </div>
  </div>

  <!--Pop up-->
  <div v-if="isMapPopupVisible" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
    <div class="bg-zinc-800 p-6 rounded-lg shadow-lg max-w-4xl w-full">
      <h2 class="text-lg font-semibold text-zinc-200 mb-4">Select a Map</h2>

      <!-- Grid mit Map-Bildern -->
      <div class="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto custom-scrollbar">
        <div v-for="map in mapStore.mapsDTD.maps" :key="map.id" :class="[
          'p-4 rounded-lg shadow-lg transition cursor-pointer',
          map.id === selectedMap?.id ? 'bg-blue-700 border-blue-400' : 'bg-gray-800 hover:bg-gray-700'
        ]" @click="selectMap(map)">
          <!-- Canvas für die Map -->
          <canvas :id="'mapCanvas-' + map.id" class="w-full h-40 border border-zinc-500 bg-blue-600"></canvas>
          <p class="text-center text-zinc-200 font-semibold">{{ map.name }}</p>
        </div>
      </div>

      <div class="flex justify-between mt-4">
        <button class="bg-blue-600 hover:bg-blue-700 text-zinc-200 py-1 px-4 rounded-lg transition"
          @click="selectRandomMap()">
          Random Map
        </button>

        <button class="bg-red-600 hover:bg-red-700 text-zinc-200 py-1 px-4 rounded-lg transition"
          @click="closeMapPopup()">
          OK
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Theme Popup -->
<div v-if="isThemePopupVisible" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
  <div class="bg-zinc-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
    <h2 class="text-lg font-semibold text-zinc-200 mb-4">Select a Theme</h2>
    <p class="text-zinc-300">Choose a Theme for the game.</p>

    <div class="grid grid-cols-2 gap-4 mt-4">
      <button
        v-for="(theme, themeName) in themeStore.themes"
        :key="themeName"
        :class="[
          'p-4 rounded-lg shadow-lg transition font-semibold',
          themeName === themeStore.selectedTheme
            ? 'bg-blue-700 text-white border-blue-400'
            : 'bg-gray-800 text-zinc-200 hover:bg-gray-700'
        ]"
        @click="themeStore.setSelectedTheme(themeName, lobbyId)"
      >
        {{ themeName }}
      </button>
    </div>

    <div class="flex justify-end mt-4">
      <button
        class="bg-blue-600 hover:bg-blue-700 text-zinc-200 py-1 px-4 rounded-lg transition"
        @click="closeThemePopup()"
      >
        OK
      </button>
    </div>
  </div>
</div>
</div>
</template>

<script setup lang="ts">
import { Playerrole } from '@/stores/game/dtd/EPlayerrole.js'
import { useGameStore } from '@/stores/game/gamestore'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PlayerTile from '@/components/PlayerTile.vue'
import type { Result } from '@/stores/game/responses/Result'
import { useMapStore } from '@/stores/map/MapStore'
import type { MapDTD } from '@/stores/game/dtd/MapsDTD'
import { nextTick } from 'vue';
import { useThemeStore } from "@/stores/themes/themeStore";

const themeStore= useThemeStore();
const isThemePopupVisible = ref(false);
const gameStore = useGameStore()
const { setPlayerRoleViaStomp } = gameStore

const route = useRoute()
const router = useRouter();

const mapStore = useMapStore()

// um die Sichtbarkeit des Pop-ups zu steuern
const isMapPopupVisible = ref(false)

// Die ausgewählte Map
const selectedMap = ref<MapDTD | null>(null);

// TODO: gamemaster.id mit clientplayer.id vergleichen
const isHost = ref(true);

// Eventuell erst starten wenn alle Ready
const isReady = ref(false);

// ID in der aktuellen Lobby
const lobbyId = route.params.id.toString()

// Maximale Anzahl an Spielern in der Lobby
const maxPlayers = 7;

// Spieler-Liste aus dem Store oder leeres Array
const players = computed(() => gameStore.gameState.gamedata?.players || []);

// Anzahl der Platzhalter
const placeholderCount = computed(() => maxPlayers - players.value.length);

// Hole Passwort aus gamestore
const gamePassword = computed(() => gameStore.gameState.gamedata?.password || null);

const chickenCount = ref(1);

// Anzahl der festgelegten Chickens im Game
/*
const chickenCount = computed({
  get: () => gameStore.gameState.gamedata?.chickens.length || 0,
  set: async (value: number) => {
    await gameStore.setChickenCount(value)
  },
}) */

// Überprüfung, ob aktueller Spieler Gamemaster ist
const isGamemaster = computed(() => {
  const currentPlayerName = sessionStorage.getItem("myName"); // Spielername aus sessionStorage
  const gamemaster = gameStore.gameState.gamedata?.gamemaster;

  return gamemaster?.name === currentPlayerName && gamemaster?.name; // Vergleich mit Gamemaster
});

watch(
  () => gameStore.gameState.gamedata?.started,
  (newValue) => {
    if (newValue) {
      router.push({ name: 'game' })
    }
  },
)

// Funktion, um die Rolle des Spielers zufällig zu setzen
async function randomizeRoles() {
  const roles = [Playerrole.SNACKMAN, Playerrole.GHOST];
  for (const player of players.value) {
    const randomRole: Playerrole = roles[Math.floor(Math.random() * roles.length)];
    player.playerrole = randomRole; // Lokal setzen
    console.log(`Assigning random role ${randomRole} to player ${player.name}`);

    // Rolle auf dem Server setzen
    await setPlayerRoleViaStomp(player.name, randomRole, lobbyId).then((result: Result) => {
      console.log(result);
    });
  }
}


// Funktion, um das Game zu starten
async function startGame() {
  try {
    if (!mapStore.mapsDTD.selectedMap?.map) {
      throw new Error("No map selected!");
    }
    await gameStore.startGameViaStomp(mapStore.mapsDTD.selectedMap?.name, chickenCount.value); // muss ins Backend gesendet werden, da die Tiles erstellt werden müssen
    // Log zum Testen
    console.log(gameStore.gameState);
    //console.log("ChickenCount: ", chickenCount.value)
    console.log("playMap: ", gameStore.gameState.gamedata.playmap); // gamestate hat jetzt auch die aktuelle map
  } catch (error) {
    console.log(error);
  }
}

// Um Lobby Code kopieren zu können
function copyToClipboard() {
  alert('Copied to Clipboard!');
  navigator.clipboard.writeText(lobbyId);
}

async function leaveGame(lobbyId: string) {
  try {

    const playerName = sessionStorage.getItem("myName");

    if (!playerName) {
      console.error("nicht gefunden");
      return;
    }

    const leavingPlayer = players.value.find(p => p.name === playerName);

    if (!leavingPlayer) {
      console.error("Spieler nicht in der Liste gefunden!");
      return;
    }

    console.log("Lobby-Daten vor leaveGame:", players.value);
    const success = await gameStore.leaveGame(lobbyId, leavingPlayer);
    console.log("Leaving Game succeeded:", success);
    console.log("Lobby-Daten nach leaveGame:", players.value);


  } catch (error) {
    console.log("Fehler beim ausfueren des leaven", error);
  }
}


onMounted(async () => {
  try {
    await gameStore.fetchGameStatus(lobbyId);
    await themeStore.fetchSelectedTheme(lobbyId);
    console.log("Passwort von gamestate", gameStore.gameState.gamedata?.password);
  } catch (error) {
    console.error('Error fetching game status:', error);
  }
});


onMounted(async () => {
  try {
    await mapStore.fetchMaps(); // mapStore.mapsDTD erhält alle Karten vom Backend
    // Default Auswahl
    if (mapStore.mapsDTD.maps.length > 0) {
      mapStore.mapsDTD.selectedMap = mapStore.mapsDTD.maps[0];
      selectedMap.value = mapStore.mapsDTD.selectedMap;
      console.log("Default:", selectedMap.value.name);
    }
  } catch (error) {
    console.error("Error during setup:", error);
  }
});

// Watch für Map-Auswahl
watch(
  () => isMapPopupVisible.value,
  async (visible) => {
    if (visible) {
      console.log('Popup is now visible. Drawing maps...');
      await nextTick(); // Wartet bis das DOM aktualisiert wurde
      drawAllMaps();
    }
  }
);

async function drawAllMaps() {
  mapStore.mapsDTD.maps.forEach((map) => {
    console.log(`Drawing map with ID: ${map.id}`);
    drawMapCanvas(map);
  });
}

// Öffnet das Pop-up
function openMapPopup() {
  isMapPopupVisible.value = true;
}

// Schließt das Pop-up
function closeMapPopup() {
  isMapPopupVisible.value = false;
}
window.addEventListener('beforeunload', (event) => {
  event.preventDefault();

  const playerName = sessionStorage.getItem("myName");
  if (playerName) {
    const leavingPlayer = players.value.find(p => p.name === playerName);
    if (leavingPlayer) {
      leaveGame(lobbyId);
    }
  }
});

onMounted(async () => {
  const savedData = localStorage.getItem(`gameState-${lobbyId}`);
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      if (parsedData?.id === lobbyId) {
        gameStore.gameState.gamedata = parsedData;
      }
    } catch (error) {
      console.error('Error parsing stored game state:', error);
    }
  }

  try {
    await gameStore.fetchGameStatus(lobbyId);
  } catch (error) {
    console.error('Error fetching game status:', error);
  }
});


watch(
  () => gameStore.gameState.gamedata,
  (newGameData) => {
    if (newGameData?.id) {
      localStorage.setItem(`gameState-${newGameData.id}`, JSON.stringify(newGameData));
    }
  },
  { deep: true }
);

watch(
  () => mapStore.mapsDTD,
  (newMapData) => {
    if (newMapData?.maps?.length > 0) {
      localStorage.setItem(`maps-${lobbyId}`, JSON.stringify(newMapData.maps));
      if (newMapData.selectedMap) {
        localStorage.setItem(`selectedMap-${lobbyId}`, JSON.stringify(newMapData.selectedMap));
      }
    }
  },
  { deep: true }
);

onMounted(async () => {
  try {
    // Lade Maps aus localStorage
    const savedMaps = localStorage.getItem(`maps-${lobbyId}`);
    const savedSelectedMap = localStorage.getItem(`selectedMap-${lobbyId}`);

    if (savedMaps) {
      mapStore.mapsDTD.maps = JSON.parse(savedMaps);
    }

    if (savedSelectedMap) {
      mapStore.mapsDTD.selectedMap = JSON.parse(savedSelectedMap);
      selectedMap.value = mapStore.mapsDTD.selectedMap;
    }

    // Falls Maps nicht vorhanden sind, vom Backend laden
    if (!savedMaps) {
      await mapStore.fetchMaps();
    }

    // Standardauswahl, falls keine Map ausgewählt ist
    if (!savedSelectedMap && mapStore.mapsDTD.maps.length > 0) {
      mapStore.mapsDTD.selectedMap = mapStore.mapsDTD.maps[0];
      selectedMap.value = mapStore.mapsDTD.selectedMap;
    }

  } catch (error) {
    console.error('Error during map setup:', error);
  }
});



onMounted(async () => {
  try {
    await gameStore.fetchGameStatus(lobbyId);
    //Log zum testen
    //gamestore.joinLobby(lobbyId,);

  } catch (error) {
    console.error("Error fetching game status:", error);
  }

});

function selectRandomMap() {
  const maps = mapStore.mapsDTD.maps;
  if (maps.length > 0) {
    const randomIndex = Math.floor(Math.random() * maps.length);
    const randomMap = maps[randomIndex];
    selectedMap.value = randomMap; // Die zufällig ausgewählte Karte zuweisen
    mapStore.mapsDTD.selectedMap = randomMap; // Im Map-Store setzen
    console.log("Randomly selected map:", randomMap.name);
  } else {
    alert("No maps available to select.");
  }
}

function selectMap(map: MapDTD) {
  selectedMap.value = map;
  mapStore.mapsDTD.selectedMap = map;
  mapStore.sendMapUpdateToBackend(map.name, lobbyId);
  localStorage.setItem(`map-${lobbyId}`, JSON.stringify(map));
}

function drawMapCanvas(map: MapDTD) {
  const canvas = document.getElementById('mapCanvas-' + map.id) as HTMLCanvasElement;
  if (!canvas) {
    console.error(`Canvas with ID 'mapCanvas-${map.id}' not found in the DOM.`);
    return;
  }

  const context = canvas.getContext('2d');
  if (!context) {
    console.error(`2D context for canvas 'mapCanvas-${map.id}' not available.`);
    return;
  }

  const tileSize = 20;
  const rows = map.map.length;
  const cols = map.map[0].length;

  canvas.width = cols * tileSize;
  canvas.height = rows * tileSize;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const tile = map.map[y][x];
      context.fillStyle = tile === '*' ? 'black' : 'blue';
      context.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      context.strokeStyle = 'black';
      context.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }

  console.log(`Map ${map.id} drawn successfully.`);
}
// Themes
function openThemePopup() {
      isThemePopupVisible.value = true;
}
function closeThemePopup() {
  const selectedTheme = themeStore.selectedTheme;
    if(selectedTheme){
      console.log("Selected theme:", selectedTheme);
      themeStore.subscribeToThemeUpdates(lobbyId).then(() => {
      console.log("Successfully subscribed to theme updates.")
      });
    } else {
      console.error("no theme selected!");
    }

      isThemePopupVisible.value = false;
}
</script>
<style>
/* Scrollbar-Styling */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px; /* Breite der Scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4b5563; /* Farbe des Scrollbars */
  border-radius: 4px; /* Abgerundete Ecken */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #1f2937; /* Farbe der Scrollspur */
}
</style>