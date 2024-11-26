<script setup lang="ts">
import LobbyTabellenZeile from '@/components/LobbyTabellenZeile.vue';
import type { IGameDTD } from '@/stores/game/dtd/IGameDTD';
import { useGameStore } from '@/stores/game/gamestore';
import { computed, onMounted, ref } from 'vue';

const gameStore = useGameStore();
const apiUrl = "/api/game";

const games = ref<IGameDTD[]>([]);

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
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <table class="table-auto w-full border-rounded-lg border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
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
                />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>