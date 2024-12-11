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

const modal = useModalStore();
const apiUrl = "/api/game";

const games = ref<IGameDTD[]>([]);

const newPlayer: IPlayerDTD = reactive({
  name: "",
  email: "",
  password: "",
  playertype: PlayerType.GUEST,
  playerrole: Playerrole.GHOST,

})


async function getAllGames(){
    try{
      const response = await fetch(`${apiUrl}/games`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const responseData = await response.json();

      if(responseData.status == "ok") games.value = responseData.feedback;
      else throw new Error("Something went wrong, while receiving Games!")
    }catch(error){
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
      <h2 class="font-bold text-3xl text-center">Join Game</h2>
    </template>
    <template #content>
      <input v-model="newPlayer.name" type="text" name="name" id="name"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        placeholder="Username eingeben" />
      <div v-if="modal.inputErrorMessage" class="input-error-message">{{ modal.inputErrorMessage }}</div>
      <!-- TODO: überprüfen ob name eingeben worden ist -->
       <div class="flex space-x-4">
        <button class="rounded-lg bg-gray-300 hover:bg-gray-400 p-3" @click="modal.joinGame(newPlayer)">Weiter</button>
        <button class="rounded-lg bg-gray-300 hover:bg-gray-400 p-3" @click="modal.closeModal()">Schließen</button>
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
            <tr v-for="game in games" 
                :key="game.id" 
                :game="game">
                <LobbyTabellenZeile 
                    :game="game"
                    @open-modal="modal.openModal"
                />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>