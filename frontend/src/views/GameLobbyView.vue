<template>
  <div class="layout-main" :style="{ backgroundImage: `url('/src/assets/FuturisticBackground.png')` }">
    <!-- <video autoplay loop muted class="absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10">
      <source src="@/assets/BackgroundVideo.mp4" type="video/webm">
      <source src="@/assets/BackgroundVideo.mp4" type="video/mp4">
    </video> -->
    <div class="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
    <div class=" mx-auto mt-0 z-10">
      <div class="min-h-screen flex flex-col items-center justify-center">
        <h1 class="header-neumorphism">Game Lobby</h1>


        <div class="grid grid-cols-7 grid-rows-4 gap-4">


          <!-- Lobby Code -->
          <div
            class="flex items-center col-start-2 col-end-5 row-start-1 row-end-2 bg-[#e8e8e8] rounded-lg p-4 shadow-lg">
            <button class="button-small-neumorphism" @click="copyToClipboard()">
              Copy
            </button>
            <input type="text" class="input-form-small-neumorphism" disabled="true" v-model="lobbyId" />
          </div>

          <!-- Spielerliste -->
          <div class="col-start-2 col-end-5 row-start-2 row-end-5 card">
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
          </div>

          <!-- Chickens und Map -->
          <div class="col-start-5 col-end-7 row-start-1 row-end-3 card space-y-4">
            <div class="flex items-center justify mt-3 s">
              <div class="flex items-center">
                <p class="button-small-neumorphism">Chickens:</p>
                <input type="number" v-model="chickenCount" class="input-form-small-neumorphism" />
              </div>
            </div>
            <div class="flex">
              <button class="button-small-neumorphism" @click="openMapPopup()">
                Select Map
              </button>
              <div class="input-form-big-neumorphism flex items-center justify-center">
                <p class="h-[82]">Selected: {{ selectedMap?.name || 'None' }}</p>
              </div>
            </div>
          </div>

          <!--Start nutton-->
          <div class="col-start-5 col-end-7 row-start-3 row-end-5 card">
            <div class="flex flex-col gap-3">
              <!-- ToDo: Button -->
              <button :class="{
                'button-small-neumorphism': isHost,
                'bg-gray-600': !isHost,
              }" :disabled="!isHost" class="w-full mt-5 px-6 py-3 text-lg  rounded-lg transition"
                @click="startGame()">
                {{ isHost ? 'Start Game' : '---' }}
              </button>
              <button :class="{
                'button-small-neumorphism': isHost,
                'bg-gray-600': !isHost
              }" class="" @click="leaveGame(lobbyId)">
                leave lobby
              </button>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>

  <!--Pop up-->
  <div v-if="isMapPopupVisible" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
    <div class="card max-w-md w-full">
      <h2 class="font-mono text-grau">Select:</h2>

      <!-- Dropdown for map selection -->
      <div class="mt-3 flex">
        <button class="button-small-neumorphism">
          Kick
        </button>
        <select v-model="selectedMap" class="input-form-small-neumorphism">
          <option v-for="map in maps" :key="map.id" :value="map">
            {{ map.name }}
          </option>
        </select>

      </div>
      <button class="button-small-neumorphism mt-3" @click="closeMapPopup()">
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
<style>
/* .input {
  background: linear-gradient(145deg, #CDCFD2, #FFFFFF);
  border-radius: 30%;
  box-shadow: inset 28.83px 28.83px 48px #BABBBE, inset -28.83px -28.83px 48px #FFFFFF;
} */
</style>
