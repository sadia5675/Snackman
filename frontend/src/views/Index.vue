<template>

  <Modal v-if="modal.isModalOpen">
    <template #titel>
      <h2 class="text-lg text-white text-semibold mb-4">{{ modal.modalType === ModalType.JOIN_GAME ? "Join Game" : "Create a new Game" }}
      </h2>
    </template>
    <template #content>
      <div class="flex flex-col gap-3">
        <input v-model="newPlayer.name" type="text" name="name" id="name"
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          placeholder="Username eingeben" />
        <div v-if="modal.inputErrorMessage" class="input-error-message text-red-600">{{ modal.inputErrorMessage }}</div>
        <!-- TODO: überprüfen ob name eingeben worden ist -->

        <div v-if="modal.modalType === ModalType.NEW_GAME">
          <label class="mt-4 mb-4 mflex itmes-center space-x-2">
            <input type="checkbox" v-model="modal.requirePassword" id="requirePassword"
              class="form-checkbox rounded shadow-sm hover:shadow-md transition-shadow duration-300" />
            <span class="text-white">Private Game</span>
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
        <button class="font-semibold text-zinc-800 p-3 rounded-md bg-gray-200"
          @click=" modal.modalType === ModalType.NEW_GAME ? modal.newGame(newPlayer) : modal.joinGame(newPlayer)">Weiter</button>
        <button class="font-semibold text-zinc-800 p-3 rounded-md bg-gray-200" @click="modal.closeModal()">Schließen</button>
      </div>
    </template>
  </Modal>


  <div class="layout-main">
    <video autoplay loop muted class="absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10">
      <source src="@/assets/BackgroundVideo.mp4" type="video/webm">
    </video>
    <div>
      <img src="../assets/snackmanlogo-2.png" class="-mb-4" >
    </div>

    <div class="flex flex-col gap-3">
      <button class="btn-new" @click="modal.openModal(ModalType.NEW_GAME, '', false)">New Game</button>
      <div>
        <input type="text" v-model="gameId" placeholder="Game Id eingeben" class="p-3 bg-white/70 backdrop-blur-lg placeholder:text-zinc-700 rounded-l">
        <!-- @click="game.joinGame()"-->
        <button class="bg-white/40 text-black p-3 font-semibold hover:bg-gray-100 backdrop-blur-lg shadow-sm rounded-r text-black" @click="modal.checkPrivateGame(gameId)">Join</button>
      </div>
      <!-- @click="game.findLobbies()"-->
      <button class="btn-new" @click="router.push('/lobby')">Find Lobbies/Games</button>
      <button class="btn-new" v-on:click="toMapCreator">Map Creator</button>
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
