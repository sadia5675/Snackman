<script setup lang="ts">
import LobbyTabellenZeile from '@/components/LobbyTabellenZeile.vue';
import type { IGameDTD } from '@/stores/game/dtd/IGameDTD';
import { useGameStore } from '@/stores/game/gamestore';
import { computed, onMounted, reactive, ref } from 'vue';
import Modal from '@/components/Modal.vue';
import { useModalStore } from '@/stores/modalstore';
import { PlayerType } from '@/stores/game/dtd/PlayerType';
import type { IPlayerDTD } from '@/stores/game/dtd/IPlayerDTD';
import { ModalType } from '@/stores/game/dtd/EModalType';
import { Playerrole } from '@/stores/game/dtd/EPlayerrole';
import router from '@/router';

const modal = useModalStore();
const apiUrl = "/api/game";

const games = ref<IGameDTD[]>([]);
const offeneSpiele= computed(()=> {
  return games.value.filter(game=> !game.started);
})
const newPlayer: IPlayerDTD = reactive({
  name: "",
  email: "",
  password: "",
  playertype: PlayerType.GUEST,
  playerrole: Playerrole.GHOST,

})


async function getAllGames() {
  try {
    const response = await fetch(`${apiUrl}/games`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const responseData = await response.json();

    if (responseData.status == "ok") games.value = responseData.feedback;
    else throw new Error("Something went wrong, while receiving Games!")
  } catch (error) {
    console.error("Error getting Games!")
  }
}

onMounted(() => {
  getAllGames();
});

</script>

<template>
  <Modal v-if="modal.isModalOpen">
    <template #titel>
      <h2 class="text-lg text-white text-semibold mb-4">Join Game</h2>
    </template>
    <template #content>
      <div class="flex flex-col gap-3">
        <input v-model="newPlayer.name" type="text" name="name" id="name"
          class="block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          placeholder="Username eingeben" />
        <div v-if="modal.inputErrorMessage" class="input-error-message">{{ modal.inputErrorMessage }}</div>
      </div>
      <!-- TODO: überprüfen ob name eingeben worden ist -->

      <input v-if="modal.isGamePrivate" v-model="newPlayer.password" type="text" id="password"
        class="block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        placeholder="Passwort eingeben" />


      <div class="flex space-x-4">
        <button class="font-semibold text-zinc-800 p-3 rounded-md bg-gray-200"
          @click="modal.joinGame(newPlayer)">Weiter</button>
        <button class="font-semibold text-zinc-800 p-3 rounded-md bg-gray-200"
          @click="modal.closeModal()">Schließen</button>
      </div>

    </template>
  </Modal>


  <div class="flex items-center justify-center min-h-screen">
    <video autoplay loop muted class="absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10">
      <source src="@/assets/BackgroundVideo.mp4" type="video/webm">
      <source src="@/assets/BackgroundVideo.mp4" type="video/mp4">
    </video>
    <div class="card-adventure max-w-4xl">
      <table class="table-auto w-full border-rounded-lg border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100 opacity-60">
            <th class="px-6 py-3 text-gray-700">Lobby</th>
            <th class="px-6 py-3 text-gray-700">Host</th>
            <th class="px-6 py-3 text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in offeneSpiele" :key="game.id" :game="game">
            <LobbyTabellenZeile :game="game" @openModal="modal.checkPrivateGame(game.id)" />
          </tr>
        </tbody>
      </table>
      <button class="mt-4 w-full p-3 font-semibold text-zinc-800 rounded-md bg-gray-200 hover:bg-gray-100 backdrop-blur-lg shadow-sm" @click="router.push('/index')">
        Back
      </button>
    </div>
  </div>
</template>
