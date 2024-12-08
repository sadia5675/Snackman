<template>
  <div class="centered ">
    <video autoplay loop muted class="absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10">
      <source src="@/assets/BackgroundVideo.mp4" type="video/webm">
      <source src="@/assets/BackgroundVideo.mp4" type="video/mp4">
    </video>
    <!--toDo: Überschriften vereinheitlichen und aus-agern-->
    <div class=" mx-auto mt-0 ">
      <!-- <div class="min-h-screen flex flex-col items-center justify-center"> -->
      <h1 class="header1">Game Lobby</h1>
      <div class="mb-3">
        <!-- <p class="text-lg font-semibold text-zinc-200">Lobby Code:</p> -->
        <div class="flex items-center">
          <input type="text" class="form-next-to-button text-gold w-full" disabled="true" v-model="lobbyId" />
          <button class="button-next-to-form" @click="copyToClipboard()">
            Copy
          </button>
        </div>
      </div>

      <ul class="bg-hellesgraulila shadow-lg rounded-lg divide-y divide-gray-900">
        <!-- ToDo: Padding und Margin vereinheitlichen und auslagern -->
        <li v-for="(player, i) in players" :key="player.name"
          class="pr-4 pl-4 p-2 flex items-center space-x-4 transition-colors">
          <PlayerTile v-model="players[i]" :lobby-id="lobbyId" />
        </li>
        <li v-for="placeholder in placeholderCount"
          class="pr-4 pl-4 p-2 text-gray-500 flex items-center justify-between transition-colors">
          Empty
        </li>
      </ul>

      <div class="bg-hellesgraulila rounded-lg p-3 mt-3">
        <div class="flex items-center gap-3 mt-3">
        <div class="flex items-center space-x-2">
          <p class="text-lg w-50 font-semibold text-zinc-200">Chickens:</p>
          <input type="number" v-model="chickenCount" class="w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600" />
        </div>

      </div>
      <div class="flex gap-3 mt-3">
        <button class="w-50 p-2 bg-blue-800 shadow-lg rounded-lg text-white-600  hover:bg-gray-800"
          @click="openMapPopup()">
          Select Map
        </button>
        <div class="w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600">
          <p class="text-sm text-gray-400 mt-2">Selected: {{ selectedMap?.name || 'None' }}</p>
        </div>
      </div>
      </div>
      

      


      <div class="flex gap-3">
        <!-- ToDo: Button -->
        <button :class="{
          'button-small': isHost,
          'bg-gray-600': !isHost,
        }" :disabled="!isHost" class="w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"
          @click="startGame()">
          {{ isHost ? 'Start Game' : '---' }}
        </button>
        <button :class="{
          'button-small': isHost,
          'bg-gray-600': !isHost
        }" class="w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition" @click="leaveGame(lobbyId)">
          leave
        </button>
      </div>

    </div>
  </div>

  <!--Pop up-->
  <div v-if="isMapPopupVisible" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
    <div class="bg-zinc-800 p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-lg font-semibold text-zinc-200 mb-4">Select:</h2>

      <!-- Dropdown for map selection -->
      <div class="mt-3">
        <select v-model="selectedMap" class="w-full bg-gray-800 text-zinc-200 p-2 rounded-lg">
          <option v-for="map in maps" :key="map.id" :value="map">
            {{ map.name }}
          </option>
        </select>
        <button class="px-2 py-1 text-sm font-small text-white bg-red-500 rounded hover:bg-red-600 transition">
          Kick
        </button>
      </div>
      <button class="bg-red-600 hover:bg-red-700 text-zinc-200 py-1 px-4 rounded-lg transition mt-4"
        @click="closeMapPopup()">
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game/gamestore'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PlayerTile from '@/components/PlayerTile.vue'

const route = useRoute()
const router = useRouter();

const gamestore = useGameStore()

//um die Sichtbarkeit des Pop-ups zusteuern
const isMapPopupVisible = ref(false)

//Liste der Maps
const maps = ref([
  { name: 'Map 1', id: 'map1' },
  { name: 'Map 2', id: 'map2' },
  { name: 'Map 3', id: 'map3' },
])

//aktuell ausgewählte Map
const selectedMap = ref(maps.value[0]) //Standard immmer erste map wählen

// TODO: gamemaster.id mit clientplayer.id vergleichen
const isHost = ref(true);

// Eventuell erst starten wenn alle Ready
const isReady = ref(false);

//ID in der aktuellen Lobby
const lobbyId = route.params.id.toString();

// Maximale Anzahl an Spielern in der Lobby
const maxPlayers = 7;

// Spieler-Liste aus dem Store oder leeres Array
const players = computed(() => gamestore.gameState.gamedata?.players || []);

// Anzahl der Platzhalter
const placeholderCount = computed(() => maxPlayers - players.value.length);

//Anzahl der festgelegten Chickens im Game
const chickenCount = computed({
  get: () => gamestore.gameState.gamedata?.chickens.length || 0,
  set: async (value: number) => {
    await gamestore.setChickenCount(value);
  },
});

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
    await gamestore.startGame();
    //Log zum testen
    console.log(gamestore.gameState);
  } catch (error) {
    console.log(error);
  }

}

//Um Lobby Code kopieren zu können
function copyToClipboard() {
  alert('Copied to Clipboard!')
  navigator.clipboard.writeText(lobbyId)
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
    const success = await gamestore.leaveGame(lobbyId, leavingPlayer);
    console.log("Lobby-Daten nach leaveGame:", players.value);


  } catch (error) {
    console.log("Fehler beim ausfueren des leaven", error);
  }
}


onMounted(async () => {
  try {
    await gamestore.fetchGameStatus()
  } catch (error) {
    console.error('Error fetching game status:', error)
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
  try {
    await gamestore.fetchGameStatus();
    //Log zum testen
    //gamestore.joinLobby(lobbyId,);

  } catch (error) {
    console.error("Error fetching game status:", error);
  }

});
</script>
