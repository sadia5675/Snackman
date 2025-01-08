<template>

  <Modal v-if="modal.isModalOpen">
    <template #titel>
      <h2 class="font-bold text-3xl text-center">{{ modal.modalType === ModalType.JOIN_GAME ? "Join Game" : "New Game" }}
      </h2>
    </template>
    <template #content>
      <div class="flex flex-col gap-3">
        <input v-model="newPlayer.name" type="text" name="name" id="name"
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          placeholder="Username eingeben" />
        <div v-if="modal.inputErrorMessage" class="input-error-message">{{ modal.inputErrorMessage }}</div>
        <!-- TODO: überprüfen ob name eingeben worden ist -->

        <div v-if="modal.modalType === ModalType.NEW_GAME">
          <label class="mt-4 mb-4 mflex itmes-center space-x-2">
            <input type="checkbox" v-model="modal.requirePassword" id="requirePassword"
              class="form-checkbox rounded shadow-sm hover:shadow-md transition-shadow duration-300" />
            <span>Privates Spiel</span>
          </label>
          <input v-if="modal.requirePassword" v-model="newPlayer.password" type="text" id="password"
            class="block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            placeholder="Passwort eingeben" />
        </div>
      </div>

      <!-- TODO: überprüfen ob name eingeben worden ist -->

      <div v-if="modal.modalType === ModalType.JOIN_GAME">
        <input v-if="modal.isGamePrivate" v-model="newPlayer.password" type="text" id="password"
          class="block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          placeholder="Passwort eingeben" />
      </div>


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

    <div class="flex flex-col gap-3">
      <button class="buttons-top-bottom" @click="modal.openModal(ModalType.NEW_GAME, '', false)">New Game</button>
      <div>
        <input type="text" v-model="gameId" placeholder="Game Id eingeben" class="gameid-input-field">
        <!-- @click="game.joinGame()"-->
        <button class="button-middle" @click="modal.checkPrivateGame(gameId)">Join</button>
      </div>
      <!-- @click="game.findLobbies()"-->
      <button class="buttons-top-bottom" @click="router.push('/lobby')">Find Lobbies/Games</button>
      <button class="buttons-top-bottom" v-on:click="toMapCreator">Map Creator</button>
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
import backgroundImage from '@/assets/TestBackground1.jpg'


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
  h1 {
    font-size: 50px;
    margin-bottom: 80px;
  }

  .homeMenue {
    background-color: grey;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .buttons-top-bottom {
    background-color: bisque;
    border-radius: 10px;
    padding: 10px;
  }

  .button-middle {
    background-color: bisque;
    border-radius: 0 10px 10px 0;
    padding: 10px;
  }

  .button-middle:hover,
  .buttons-top-bottom:hover {
    background-color: rgb(247, 194, 130);
  }

  .gameid-input-field {
    height: 44px;
    border-radius: 10px 0 0 10px;
    text-align: center;
  }


}
</style>



<style></style>
