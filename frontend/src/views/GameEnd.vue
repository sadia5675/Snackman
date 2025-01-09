<template>
      <div v-if="player.playerrole === Playerrole.GHOST">
      <!-- Victory Ghost -->
      <div v-if="ghostWon" class="h-screen bg-green-800 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-white mb-6">Victory!</h1>
        <p class="text-3xl text-zinc-300 mb-4">
          As the Ghost, you won! The Snackman has no lives left.
        </p>
        <p class="text-3xl text-zinc-300 mb-8">
          Touchcount: <span class="font-bold">{{ gameData.ghost.touchcount  }}</span>
        </p>
        <button
          class="bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          @click="backToLobby"
        >
          Back to lobby
        </button>
      </div>

      <!-- Defeat Ghost -->
      <div v-if="ghostLost" class="h-screen bg-red-800 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-white mb-6">Defeat!</h1>
        <p class="text-3xl text-zinc-300 mb-4">
          As the Ghost, you lost!
        </p>
        <p class="text-3xl text-zinc-300 mb-8">
          Touchcount: <span class="font-bold">{{ gameData.ghost.touchcount }}</span>
        </p>
        <button
          class="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          @click="backToLobby"
        >
          Back to lobby
        </button>
      </div>
      </div>

      <div v-if="player.playerrole === Playerrole.SNACKMAN">
      <!-- Victory Snackman -->
      <div v-if="snackmanWon" class="h-screen bg-green-800 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-white mb-6">Victory!</h1>
        <p class="text-3xl text-zinc-300 mb-4">
          As the Snackman, you won!
        </p>
        <p class="text-3xl text-zinc-300 mb-8">
          Nutriscore: <span class="font-bold">{{ gameData.snackman.nutriscore }}</span>
        </p>
        <button
          class="bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          @click="backToLobby"
        >
          Back to lobby
        </button>
      </div>

      <!-- Defeat Snackman -->
      <div v-if="snackmanLost" class="h-screen bg-red-800 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-white mb-6">Defeat!</h1>
        <p class="text-3xl text-zinc-300 mb-4">
          As the Snackman, you lost! Your lives have dropped to 0.
        </p>
        <p class="text-3xl text-zinc-300 mb-8">
          Nutriscore: <span class="font-bold">{{ gameData.snackman.nutriscore }}</span>
        </p>
        <button
          class="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          @click="backToLobby"
        >
          Back to lobby
        </button>
      </div>
      </div>
</template>


<script setup lang="ts">
import { ref, computed, type Ref } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router'
import { PlayerType } from '@/stores/game/dtd/PlayerType';
import { Playerrole } from '@/stores/game/dtd/EPlayerrole.js'
import type { IPlayerDTD } from '@/stores/game/dtd/IPlayerDTD'
const route = useRoute()

//const player: Ref<IPlayerDTD> = defineModel<IPlayerDTD>({ required: true })


// Mock-Daten für Demonstration
const player = ref<IPlayerDTD>({
  name: "TestPlayer",
  email: "test@example.com",
  password: "testpassword123",
  playertype: PlayerType.GUEST, 
  playerrole: Playerrole.SNACKMAN,
});

const gameData = ref({ 
  snackman: {
    life: 0, 
    nutriscore: 100,
  },
  ghost: {
    touchcount: 0,
  },
});


// zurück in die Lobby
function backToLobby() {
  const lobbyId = route.params.id; // Lobby-ID holen
  if (lobbyId) {
    router.push({ name: 'lobbyWithId', params: { id: lobbyId } });
  } else {
    console.error('Lobby ID not found');
  }
}

const snackmanWon = computed(() => (gameData.value.snackman.life > 0) || gameData.value.snackman.nutriscore >= 100) // // Snackman hat gewonnen, wenn er genug Punkte hat oder noch Leben besitzt
const snackmanLost = computed(() => gameData.value.snackman.life <= 0 && gameData.value.snackman.nutriscore < 100) // Snackman hat verloren, wenn er keine Leben und nicht genug Punkte hat

const ghostWon = computed(() => snackmanLost.value); // Ghost hat gewonnen, wenn Snackman verloren hat
const ghostLost = computed(() => snackmanWon.value); // Ghost hat verloren, wenn Snackman gewonnen hat

</script>
