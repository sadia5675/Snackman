<template>

  <Modal v-if="modal.isModalOpen">
    <template #titel>
      <h2 class="header-modal-adventure">{{ modal.modalType === ModalType.JOIN_GAME ? "Join Game" : "New Game"
        }}</h2>
    </template>
    <template #content>
      <div class="flex flex-col gap-3">
        <input v-model="newPlayer.name" type="text" name="name" id="name" class="input-form"
          placeholder="Username eingeben" />
        <div v-if="modal.inputErrorMessage" class="error-message">{{ modal.inputErrorMessage }}</div>
        <input v-if="modal.modalType === ModalType.JOIN_GAME" v-model="gameId" type="text" name="gameId" id="gameId" class="input-form"
          placeholder="Game ID eingeben" />
        <div v-if="modal.inputErrorMessage" class="error-message">{{ modal.inputErrorMessage }}</div>
      </div>
      <!-- TODO: überprüfen ob name eingeben worden ist -->
      <div class="flex space-x-4">
        <button class="button-small-adventure"
          @click=" modal.modalType === ModalType.NEW_GAME ? modal.newGame(newPlayer) : modal.joinGame(newPlayer)">Weiter</button>
        <button class="button-small-adventure" @click="modal.closeModal()">Schließen</button>
      </div>
    </template>
  </Modal>


  <div class="layout-main">
    <video autoplay loop muted class="absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10">
      <source src="@/assets/BackgroundVideo.mp4" type="video/webm">
      <source src="@/assets/BackgroundVideo.mp4" type="video/mp4">
    </video>

    <h1 class="header-adventure">Snackman</h1>
    <!-- <h1>Test: Namaku Font</h1> -->

    <div class="flex flex-col gap-3">
      <button class="button-small-adventure" @click="modal.openModal(ModalType.NEW_GAME, '')">New Game</button>
      <button class="button-small-adventure" @click="modal.openModal(ModalType.JOIN_GAME, gameId)">Join Game</button>
      <!-- @click="game.findLobbies()"-->
      <button class="button-small-adventure" @click="router.push('/lobby')">Find Lobbies/Games</button>
      <button class="button-small-adventure" v-on:click="toMapCreator">Map Creator</button>
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




<style></style>
