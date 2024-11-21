<template>

  <Modal v-if="modal.isModalOpen" >
    <template #titel>
      <h2 class="font-bold text-3xl text-center" >Titel</h2>
    </template>
    <template #content>
      <input v-model="newPlayer.name" type="text" name="name" id="name"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        placeholder="Username eingeben" />
      <!-- TODO: überprüfen ob name eingeben worden ist -->
      <button class="rounded-lg bg-gray-300 hover:bg-gray-400 p-3" @click="newGame()">Weiter</button>
    </template>

  </Modal>


  <div class="homeMenue">
    <h1>Snackman</h1>
    <div class="form-container">
      <button class="buttons-top-bottom" @click="modal.openModal()">New Game</button>
      <div>
        <input type="text" v-model="gameId" placeholder="Game Id eingeben" class="gameid-input-field">
        <button class="button-middle" v-on:click="joinGame">Join</button>
      </div>
      <button class="buttons-top-bottom" v-on:click="findLobbies">Find Lobbies/Games</button>
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


const modal = useModalStore()
const game = useGameStore()

const gameId = ref('');


const newPlayer: IPlayerDTD = reactive({
  name: "",
  email: "",
  password: "",
  playertype: PlayerType.GUEST

})

async function newGame() {
  await game.createGame(newPlayer)

  const id = useGameStore().gameState.gamedata?.id
  router.push({ name: 'lobbyWithId', params: { id } })
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
