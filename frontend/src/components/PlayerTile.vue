<template>
  <p
    :class="{
      'text-gray-500 bg-darkgray border bg-red-500': !true,
      'text-green-500 bg-darkgray border bg-green-500': true,
    }"
    class="transition text-center w-4 h-4 rounded-full"
  ></p>
  <div class="flex flex-col flex-grow">
    <p class="text-lg font-semibold text-blue-600">{{ player.name }}</p>
  </div>

  
    


  <div class="flex items-center space-x-2">
    <select
      v-model="player.playerrole"
      @change="onPlayerRoleChanged(player)"
      class="w-28 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option :value="Playerrole.SNACKMAN">Snackman</option>
      <option :value="Playerrole.GHOST">Ghost</option>
    </select>
    <button
        class="px-2 py-1 text-sm font-small text-white bg-blue-500 rounded hover:bg-blue-600 transition"
        @click="randomizeRole(player.name)">
      Randomize Role
    </button>
    <button
      class="px-2 py-1 text-sm font-small text-white bg-red-500 rounded hover:bg-red-600 transition"
      @click="kickPlayer(player.name)"
    >
      Kick
    </button>
  </div>
</template>

<script setup lang="ts">
import { Playerrole } from '@/stores/game/dtd/EPlayerrole.js'
import type { IPlayerDTD } from '@/stores/game/dtd/IPlayerDTD'
import type { Result } from '@/stores/game/responses/Result'
import { useGameStore } from '@/stores/game/gamestore'
import { type Ref } from 'vue'

const props = defineProps({
  lobbyId: {
    type: String,
    required: true,
  },
})

const player: Ref<IPlayerDTD> = defineModel<IPlayerDTD>({ required: true })

const gameStore = useGameStore()
const { setPlayerRoleViaStomp, kickUser } = gameStore

async function onPlayerRoleChanged(player: IPlayerDTD) {
  await setPlayerRoleViaStomp(player.name, player.playerrole, props.lobbyId).then((result: Result) => {
    console.log(result)
  })
}

// Funktion, um die Rolle des Spielers zufällig zu setzen
async function randomizeRole(playerName: string) {
  const roles = [Playerrole.SNACKMAN, Playerrole.GHOST];
  const randomRole: Playerrole = roles[Math.floor(Math.random() * roles.length)]; // math.floor --> Rundet das Ergebis
  player.value.playerrole = randomRole; // Rolle dem Spieler zuweisen
  console.log(`Assigning random role ${randomRole} to player ${playerName}`);
  await setPlayerRoleViaStomp(playerName, randomRole, props.lobbyId).then((result: Result) => {
    console.log(result)
  })
}

//Methode wenn Host Spieler kicken will
async function kickPlayer(username: string) {
  try {
    await kickUser(username)
  } catch (error) {
    console.log(error)
  }
}
</script>
