<template>
  <div v-if="currentPlayer?.playerrole === Playerrole.GHOST">
    <div v-if="winner === 'GHOST'">
      <div class="h-screen bg-green-800 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-white mb-6">Victory!</h1>
        <p class="text-3xl text-zinc-300 mb-4">
          As the Ghost, you won! The Snackman has no lives left.
        </p>
        <p class="text-3xl text-zinc-300 mb-8">
          Hits: <span class="font-bold">{{ ghostTouch }}</span>
        </p>
        <button class="bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          @click="backToStart">
          Back to start
        </button>
      </div>
    </div>

    <div v-else-if="loser === 'GHOST'">
      <div class="h-screen bg-red-800 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-white mb-6">Defeat!</h1>
        <p class="text-3xl text-zinc-300 mb-4">
          As the Ghost, you lost!
        </p>
        <p class="text-3xl text-zinc-300 mb-8">
          Hits: <span class="font-bold">{{ ghostTouch }}</span>
        </p>
        <button class="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition" @click="backToStart">
          Back to start
        </button>
      </div>
    </div>
  </div>


  <div v-if="currentPlayer?.playerrole === Playerrole.SNACKMAN">
    <div v-if="winner === 'SNACKMAN'">
      <div class="h-screen bg-green-800 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-white mb-6">Victory!</h1>
        <p class="text-3xl text-zinc-300 mb-4">
          As the Snackman, you won! You reached enough points to win!
        </p>
        <p class="text-3xl text-zinc-300 mb-8">
          Points: <span class="font-bold">{{ snackmanMaxPoints/2 }}</span>
        </p>
        <button class="bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          @click="backToStart">
          Back to start
        </button>
      </div>
    </div>

    <div v-else-if="loser === 'SNACKMAN'">
      <div class="h-screen bg-red-800 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-white mb-6">Defeat!</h1>
        <p class="text-3xl text-zinc-300 mb-4">
          As the Snackman, you lost! Your lives have dropped to 0.
        </p>
        <p class="text-3xl text-zinc-300 mb-8">
          Points: <span class="font-bold">{{ snackmanPoints }}</span>
        </p>
        <button class="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition" @click="backToStart">
          Back to start
        </button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import router from '@/router';
import { computed, onBeforeUnmount, onMounted} from 'vue'
import { Playerrole } from '@/stores/game/dtd/EPlayerrole.js'
import { useGameStore } from '@/stores/game/gamestore'
import { stompClient } from '@/config/stompWebsocket';

const gameStore = useGameStore()


const currentPlayer = computed(() => {
  const myName = sessionStorage.getItem("myName"); 
  return gameStore.gameState.gamedata?.players.find(player => player.name === myName);
});

const currentCharacter = computed(() => {
  const myName: string = sessionStorage.getItem("myName") || "";
  if (!myName) return null;

  const character = gameStore.gameState.gamedata?.characters[myName] || null;
  console.log("Current Character:", character);
  return character;
});


const winner = computed(() => gameStore.gameState.gamedata.winnerRole); 
const loser = winner.value === "SNACKMAN" ? "GHOST" : "SNACKMAN";
const snackmanPoints = computed(() => currentCharacter.value?.currentPoints ?? 0); 
const snackmanMaxPoints = computed(() => gameStore.gameState.gamedata.maxPointsSnackman ?? 0);
const ghostTouch = computed(() => currentCharacter.value?.touchcount ?? 0);


function backToStart() {
  try {
    console.log("Navigating back to start...");

    // beenden
    if (gameStore.disconnectWebSocket) {
      gameStore.disconnectWebSocket();
      console.log("WebSocket disconnected.");
    }

    // reset
    gameStore.resetGameState();
    sessionStorage.clear();

    // starseite
    router.push({ name: 'index' }).then(() => {
      console.log("Navigated to start. Forcing reload...");
      // Reload 
      window.location.reload();
    }).catch((error) => {
      console.error("Error during navigation to index:", error);
    });
  } catch (error) {
    console.error("Error returning to start:", error);
  }
}

onMounted(() => {
  console.log("Setting up WebSocket cleanup...");
});

</script>
