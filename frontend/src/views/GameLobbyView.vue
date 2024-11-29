<template>
    <div class="h-screen bg-zinc-900">
        <div class="max-w-lg mx-auto mt-0">
            <h1 class="text-2xl font-semibold text-center text-zinc-200 mb-10">Game Lobby</h1>
            <div class="mb-4">
                <p class="text-lg font-semibold text-zinc-200">Lobby Code:</p>
                <div class="flex items-center space-x-2">
                    <input type="text" class="w-full p-3 bg-gray-800 shadow-lg rounded-lg text-zinc-300" disabled="true"
                        v-model="lobbyId" />
                    <button class="bg-yellow-500  text-zinc-900 p-3 rounded-lg hover:bg-yellow-600 transition"
                        @click="copyToClipboard()">
                        Copy
                    </button>
                </div>
            </div>

            <ul class="bg-gray-800 shadow-lg rounded-lg divide-y divide-gray-900">
                <li v-for="player in players" :key="player.userId"
                    class="pr-4 pl-4 p-2 flex items-center space-x-4 transition-colors">
                    <div class="flex flex-col flex-grow">
                        <p class="text-sm font-medium text-gray-900">ID: {{ player.userId }}</p>
                        <p class="text-lg font-semibold text-blue-600">{{ player.name }}</p>
                    </div>
                    <p :class="{
                        'text-gray-500 bg-darkgray border border-gray-300 px-4 py-2 rounded': !player.isReady,
                        'text-green-500 bg-darkgray border border-green-500 px-4 py-2 rounded': player.isReady
                    }" class="transition text-center w-32">
                        {{ player.isReady ? 'Ready' : 'Not Ready' }}
                    </p>
                    <div class="flex items-center space-x-2">
                        <select v-model="player.playertype"
                        @change="setPlayerRole(player.name, player.playerrole)"
                            class="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="snackman">Snackman</option>
                            <option value="ghost">Ghost</option>
                        </select>
                        <button
                            class="px-2 py-1 text-sm font-small text-white bg-red-500 rounded hover:bg-red-600 transition"
                            @click="kickPlayer(player.name)">
                            Kick
                        </button>
                    </div>
                </li>
                <li v-for="placeholder in placeholderCount"
                    class="pr-4 pl-4 p-2 text-gray-500 flex items-center justify-between transition-colors">
                    Empty
                </li>
            </ul>


            <div class="flex items-center space-x-2 mt-3">
                <p class="text-lg w-50 font-semibold text-zinc-200"> Chickens: </p>
                <input
                    type="number"
                    v-model="chickenCount"
                    class="w-50  p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600"
                />
            </div>

            <button
                :class="{
                    'bg-green-700 hover:bg-green-800 text-zinc-200': isHost,
                    'bg-gray-600': !isHost
                }"
                :disabled="!isHost"
                class="w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"
                @click="startGame()">
                {{ isHost ? 'Start Game' : '---' }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { sendMessage, stompClient, subscribeToLobby } from '@/config/stompWebsocket';
    import { PlayerType } from '@/stores/game/dtd/PlayerType';
    import { useGameStore } from '@/stores/game/gamestore';
    import { onMounted, computed, ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const gamestore = useGameStore();
    const jsonString = '{"employee":{ "name":"John", "age":30, "city":"New York" }}';

    // TODO: gamemaster.id mit clientplayer.id vergleichen
    const isHost = ref(true);

    // Eventuell erst starten wenn alle Ready
    const isReady = ref(false);

    //ID in der aktuellen Lobby
    const lobbyId = route.params.id.toString();

    // Maximale Anzahl an Spielern in der Lobby
    const maxPlayers = 7;

    // Spieler-Liste aus dem Store oder leeres Array
    const players = computed(() => gamestore.gameState.gamedata?.players || []);

    // Anzahl der Platzhalter
    const placeholderCount = computed(() => maxPlayers - players.value.length);

    //Anzahl der festgelegten Chickens im Game
    const chickenCount = computed({
        get: () => gamestore.gameState.gamedata?.chickens.length || 0,
        set: async (value: number) => {
            await gamestore.setChickenCount(value);
        },
    });

// Funktion, um die Rolle des Spielers zu setzen
function setPlayerRole(playerName: string, role: string) {
    const player = players.value.find(p => p.name === playerName);
    if (player) {
        player.playerrole = role; // Rolle des Spielers setzen
        console.log(`Player ${player} role updated to ${role}`);
    }
}

//Methode wenn Host Spieler kicken will
async function kickPlayer(username: string) {
    try {
        await gamestore.kickUser(username);

        //log zum testen
        console.log(gamestore.gameState);
    } catch (error) {
        console.log(error);
    }
}

//Funktion um das Game zu starten
async function startGame() {
    //startGame request and backend
    try {
        await gamestore.startGame();
        //Log zum testen
        console.log(gamestore.gameState);
    } catch (error) {
        console.log(error);
    }

    }

    //Um Lobby Code kopieren zu können
    function copyToClipboard(){
        alert("Copied to Clipboard!")
        navigator.clipboard.writeText(lobbyId);
    }

    onMounted(async () => {
        try {
            await gamestore.fetchGameStatus();

        } catch (error) {
            console.error("Error fetching game status:", error);
        }

    });
</script>
