<template>
    <div class="h-screen bg-zinc-900">
        <div class="max-w-lg mx-auto mt-0">
            <h1 class="text-2xl font-semibold text-center text-zinc-200 mb-10">Game Lobby</h1>
            <div class="mb-4">
                <p class="text-lg font-semibold text-zinc-200">Lobby Code:</p>
                <div class="flex items-center space-x-2">
                    <input type="text" class="w-full p-3 bg-gray-800 shadow-lg rounded-lg text-zinc-300" disabled="true"
                        v-model="lobbyId" />
                    <button class="bg-yellow-500 text-zinc-900 p-3 rounded-lg hover:bg-yellow-600 transition"
                        @click="copyToClipboard()">
                        Copy
                    </button>
                </div>
            </div>

            <ul class="bg-gray-800 shadow-lg rounded-lg divide-y divide-gray-900">
                <li v-for="(player, i) in players" :key="player.name"
                    class="pr-4 pl-4 p-2 flex items-center space-x-4 transition-colors">
                    <PlayerTile v-model="players[i]" :lobby-id="lobbyId" />
                </li>
                <li v-for="placeholder in placeholderCount"
                    class="pr-4 pl-4 p-2 text-gray-500 flex items-center justify-between transition-colors">
                    Empty
                </li>
            </ul>

            <div class="flex items-center space-x-6 mt-3">
                <div class="flex items-center space-x-2">
                    <p class="text-lg w-50 font-semibold text-zinc-200">Chickens:</p>
                    <input type="number" v-model="chickenCount"
                        class="w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600" />
                </div>

                <br>

                <button v-if="isGamemaster"
                    class="w-50 p-2 bg-blue-800 shadow-lg rounded-lg text-white-600  hover:bg-gray-800"
                    @click="openMapPopup()">
                    Select Map
                </button>
                <div class="w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600">
                    <p class="text-sm text-gray-400 mt-2">Selected: {{ selectedMap?.name || 'None' }}</p>
                </div>
            </div>

            <button v-if="isGamemaster" :class="{
                'bg-green-700 hover:bg-green-800 text-zinc-200': isHost,
                'bg-gray-600': !isHost,
            }" :disabled="!isHost" class="w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"
                @click="startGame()">
                {{ isHost ? 'Start Game' : '---' }}
            </button>
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
import { useRoute } from 'vue-router'
import router from '@/router'
import PlayerTile from '@/components/PlayerTile.vue'

const route = useRoute()

const gamestore = useGameStore()

const isGamemaster = computed(() => {
    const currentPlayer = sessionStorage.getItem("myName");
    const gamemaster = gamestore.gameState.gamedata?.gamemaster;

    return gamemaster?.name === currentPlayer && gamemaster?.playertype;
})

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
        await gamestore.startGame()
        //Log zum testen
        console.log(gamestore.gameState)
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

// Öffnet das Pop-up
function openMapPopup() {
    isMapPopupVisible.value = true
}

// Schließt das Pop-up
function closeMapPopup() {
    isMapPopupVisible.value = false
}

</script>
