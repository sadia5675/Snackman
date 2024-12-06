<template>

  <Modal v-if="modal.isModalOpen">
    <template #titel>
      <h2 class="font-bold text-3xl text-center">{{ modal.modalType === ModalType.JOIN_GAME ? "Join Game" : "New Game"
        }}</h2>
    </template>
    <template #content>
      <input v-model="newPlayer.name" type="text" name="name" id="name"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        placeholder="Username eingeben" />
      <div v-if="modal.inputErrorMessage" class="input-error-message">{{ modal.inputErrorMessage }}</div>
      <!-- TODO: überprüfen ob name eingeben worden ist -->
      <div class="flex space-x-4">
        <button class="rounded-lg bg-gray-300 hover:bg-gray-400 p-3"
          @click=" modal.modalType === ModalType.NEW_GAME ? modal.newGame(newPlayer) : modal.joinGame(newPlayer)">Weiter</button>
        <button class="rounded-lg bg-gray-300 hover:bg-gray-400 p-3" @click="modal.closeModal()">Schließen</button>
      </div>

    </template>


  </Modal>


  <div class="min-h-screen flex flex-col items-center justify-center">
    <!-- :style="{ backgroundImage: `url('/src/assets/TestBackground1.jpg')` }" -->
    
    <video autoplay loop muted class="absolute top-0 left-0 w-full object-cover -z-10">
      <source src="@/assets/BackgroundVideo.mp4" type="video/webm">
      <source src="@/assets/BackgroundVideo.mp4" type="video/mp4">
    </video>

    <h1 class="text-4xl lg:text-8xl mb-20">Snackman</h1>
    
    <div class="flex flex-col gap-3">
      <button class="button-small" @click="modal.openModal(ModalType.NEW_GAME, '')">New Game</button>
      <div>
        <input type="text" v-model="gameId" placeholder="Game Id eingeben" class="form-next-to-button">
        <!-- @click="game.joinGame()"-->
        <button class="button-next-to-form" @click="modal.openModal(ModalType.JOIN_GAME, gameId)">Join</button>
      </div>
      <!-- @click="game.findLobbies()"-->
      <button class="button-small" @click="router.push('/lobby')">Find Lobbies/Games</button>
      <button class="button-small" v-on:click="toMapCreator">Map Creator</button>
    </div>


    
  </div>

</template>




<script setup lang="ts">
import Modal from '@/components/Modal.vue';
import { reactive, ref } from 'vue';
import { useModalStore } from '@/stores/modalstore';
import { useGameStore } from '@/stores/game/gamestore';
import type { IPlayerDTD } from '@/stores/game/dtd/IPlayerDTD';
import { PlayerType } from '@/stores/game/dtd/PlayerType';
import router from '@/router';
import { ModalType } from '@/stores/game/dtd/EModalType';
import { Playerrole } from '@/stores/game/dtd/EPlayerrole';


const modal = useModalStore()
const game = useGameStore()

const gameId = ref('');

const inputErrorMessage = ref('');

const newPlayer: IPlayerDTD = reactive({
  name: "",
  email: "",
  password: "",
  playertype: PlayerType.GUEST,
  playerrole: Playerrole.GHOST,
})

function toMapCreator() {
  router.push({ name: 'createmap' });
}


</script>




<style>
@media (min-width: 1024px) {
}
</style>
