<template>
  <div class="flex flex-col flex-grow">
    <p class="text-sm font-medium text-gray-900">Name</p>
    <p class="text-lg font-semibold text-blue-600">{{ player.name }}</p>
    <!--
    TODO: playerrole kann testweise hiermit live gesehen werden, da über select nicht funktioniert:
    <p class="text-lg font-semibold text-blue-600">{{ player.playerrole }}</p>
    -->
    <p class="text-lg font-semibold text-blue-600">{{ player.playerrole }}</p>
  </div>
  <p
    :class="{
      'text-gray-500 bg-darkgray border border-gray-300 px-4 py-2 rounded': !true,
      'text-green-500 bg-darkgray border border-green-500 px-4 py-2 rounded': true,
    }"
    class="transition text-center w-32"
  >
    {{ true ? 'Ready' : 'Not Ready' }}
  </p>
  <div class="flex items-center space-x-2">
    <!-- TODO: select zeigt nicht aktuellen playerrole an, obwohl Daten geupdatet sind. Etwas mit select stimmt nicht -->
    <select
      v-model="player.playerrole"
      @change="onPlayerRoleChanged(player)"
      class="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option :value="Playerrole.SNACKMAN">Snackman</option>
      <option :value="Playerrole.GHOST">Ghost</option>
    </select>
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

const player: Ref<IPlayerDTD> = defineModel<IPlayerDTD>({ required: true })

const gameStore = useGameStore()
const { setPlayerRoleViaStomp, kickUser } = gameStore

async function onPlayerRoleChanged(player: IPlayerDTD) {
  await setPlayerRoleViaStomp(player.name, player.playerrole).then((result: Result) => {
    console.log(result)
  })
}

//Methode wenn Host Spieler kicken will
async function kickPlayer(username: string) {
  try {
    await kickUser(username)

    //log zum testen
    console.log(gamestore.gameState)
  } catch (error) {
    console.log(error)
  }
}
</script>
