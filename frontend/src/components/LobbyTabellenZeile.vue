<script setup lang="ts">
import router from "@/router";
import type { IGameDTD } from "@/stores/game/dtd/IGameDTD";
import { useGameStore } from "@/stores/game/gamestore";

const gameStore = useGameStore();

async function joinLobby(gameId:string) {
    gameStore.joinLobby(gameId);
    router.push(`/lobby/${gameId}`);
}

defineProps<{
    game: IGameDTD,
}>();
</script>

<template>
    <td class="px-6 py-3 text-gray-600">
        <span class="font-medium px-6 py-3"></span> {{ game.id }}
    </td>
    <td class="px-6 py-3 text-gray-600">
        <span class="font-medium px-6 py-3"></span> {{ game.gamemaster?.name || 'Unknown' }}
    </td>
    <td class="px-6 py-3">
        <button
            @click="joinLobby(game.id)"
            class="rounded-lg bg-gray-300 hover:bg-gray-400 p-3 px-6 py-3"
        >
        Join
        </button>
    </td>
  </template>