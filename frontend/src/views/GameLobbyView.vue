<template>
    <div class="h-screen bg-gray-900 text-gray-100">
        <div class="max-w-lg mx-auto mt-0">
            <h1 class="text-2xl font-semibold text-center text-gray-400 mb-10">Game Lobby</h1>
            <div class="mb-4">
                <p class="text-lg font-semibold text-gray-500">Lobby Code:</p>
                <div class="flex items-center space-x-2">
                    <input 
                        type="text" 
                        class="w-full p-3 bg-gray-800 shadow-lg rounded-lg text-blue-600" 
                        disabled="true" 
                        v-model="lobbyId"
                    />
                    <button 
                        class="bg-yellow-500 p-3 rounded-lg hover:bg-yellow-600 transition"
                        @click="copyToClipboard()">
                        Copy
                    </button>
                </div>
            </div>
            <ul class="bg-gray-800 shadow-lg rounded-lg divide-y divide-gray-200">
                <li 
                    v-for="player in players" 
                    :key="player.id"
                    class="pr-4 pl-4 p-2 flex items-center justify-between transition-colors">
                    <div>
                        <p class="text-sm font-medium text-gray-900">ID: {{ player.id }}</p>
                        <p class="text-lg font-semibold text-blue-600">{{ player.name }}</p>
                        <p class="text-sm text-gray-500">{{ player.role }}</p>
                    </div>
                    <p 
                        :class="{
                            'text-gray-500 bg-darkgray border border-gray-300 px-4 py-2 rounded': !player.isReady,
                            'text-green-500 bg-darkgray border border-green-500 px-4 py-2 rounded ': player.isReady
                        }"
                        class="transition text-center">
                        {{ player.isReady ? 'Ready' : 'Not Ready' }}
                    </p>
                    <button 
                        class="px-2 py-1 text-sm font-small text-white bg-red-500 rounded hover:bg-red-600 transition"
                        @click="kickPlayer(player.name)">
                        kick
                    </button>
                </li>
            </ul>
            <div class="flex items-center space-x-2 mt-3">
                <p class="text-lg w-50 font-semibold text-gray-500"> Chickens: </p>
                <input 
                    type="number" 
                    v-model="chickenCount"
                    class="w-50  p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600"
                />
            </div>
            
            <button 
                :class="{
                    'bg-green-500 hover:bg-green-600 text-white': isHost,
                    'bg-gray-500': !isHost
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
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    //Test definitions
    const players = [
        {
            id: "1",
            name: "Player 1",
            role: "Snackman",
            isReady: false,
        },
        {
            id: "2",
            name: "Player 2",
            role: "Ghost",
            isReady: false,
        },
        {
            id: "3",
            name: "Player 3",
            role: "Ghost",
            isReady: false,
        },
        {
            id: "4",
            name: "Player 4",
            role: "Ghost",
            isReady: false,
        },
        {
            id: "5",
            name: "Player 5",
            role: "Ghost",
            isReady: true,
        },
    ]
    //#######Final Definitions########
    
    const route = useRoute();

    //Lobby/Game-Store definieren 
    const isHost = ref(true); //TODO: aus store holen

    const isReady = ref(false); // Brauchen wir ready überhaupt
    const lobbyId = route.params.id.toString(); //TODO: aus store holen
    
    const chickenCount = ref(5);

    //Methode wenn Host Spieler kicken will
    async function kickPlayer(username: string){
        try{
            //Senden der POST anfrage um Spieler zu kicken 
            const response = await fetch(`/api/api/game/kick/${username}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            //Response in Json umwandeln
            const data = await response.json();

            //Wenn error, werfen eines Errors mit Server Feedback als Error-Message
            if(data.status == "error"){
                throw new Error(data.feedback);
            }
            //Ansonsten wurde der Spieler erfolgreich gekickt
            else{
                console.log("Kicked player: ", username);
            }
        }catch(error){
            console.log(error);
        }
    }

    //Funktion um das Game zu starten
    async function startGame(){
        //startGame request and backend
        try{
            //Post Anfrage zum starten des Spiels
            const response = await fetch('/api/api/game/start',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            //Response in JSON umwandeln
            const data = await response.json();
            
            //Wenn error, soll ein Error geworfen werden, mit dem Server Feedback als Error-Message
            if(data.status == 'error'){
                throw new Error(data.feedback);
            }

            //Ansonsten wurde das Game erfolgreich gestartet
            else{
                console.log("Game started!");
                //TODO: weiterleiten an Game 
            }
        }catch(error){
            console.log(error);
        }

    }

    function copyToClipboard(){
        alert("Copied to Clipboard!")
        navigator.clipboard.writeText(lobbyId);
    }  

    onMounted(() => {
        //store.initWebsocket
        //send "Lobby join" Request, receive players in lobby
    });
</script>