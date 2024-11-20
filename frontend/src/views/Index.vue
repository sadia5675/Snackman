
<template>
  <div class="homeMenue">
    <h1>Snackman</h1>
    <form action="" class="form-container">
      <button class="buttons-top-bottom" v-on:click="createNewGame">New Game</button>
      <div>
        <input type="text" v-model="gameId" placeholder="Game Id eingeben" class="gameid-input-field">
        <button class="button-middle" v-on:click="joinGame">Join</button>
      </div>
      <button class="buttons-top-bottom" v-on:click="findLobbies">Find Lobbies/Games</button>
    </form>
  </div>

</template>




<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const gameId = ref('');

  // Bei den Routerpfaden bin ich mir nicht sicher welche genutzt werden sollen, habe beispiel Pfade erstellt die wahrscheinlich noch abgeändert werden müssen.
  // Um mein Template ausgeben zu können habe ich in index.ts einen Pfad erstellt um testen zu können. Habe diesen auch markiert um ihn im nahchinhein richtig anpassen zu können
  const router = useRouter();

  // Button "New Game" wird geklickt

  function createNewGame(){

    // neues json objekt "newGame" erstellt, mit hilfsmethode "generateRandomGameId()" eine id generiert
    const newGame = {
      "id" : generateRandomGameId(),
      "players" : ["host"]
    }

    // Es wird auf neue Seite umgeleitet und benötigte querys mitgegeben.
    router.push({
      path : '/lobbie',
      query : {
        id : newGame.id.toString(),
        players : JSON.stringify(newGame.players)
      }
    })

  }

  // Button "Join" wird geklickt
  function joinGame(){

    // Prüfen ob eine Id eingegeben wurde
    if(!gameId.value){
      alert('Please enter a GameId');
      return;
    }

    // Neues Json Objekt erstellt
    const joinGame = {
      "id" :  gameId.value ,
      "players" : ["host", "newPlayer"]
    }

    // Es wird auf neue Seite umgeleitet und benötigte querys mitgegeben.
    router.push({
      path : '/lobbie',
      query : {
        id : joinGame.id.toString(),
        players : JSON.stringify(joinGame.players)
      }
    })

  }

  // Button "Lobbies/Game" wird geklickt, dadurch umleitung auf neue Seite
  function findLobbies(){
    router.push('/lobbies');
  }

  // Random Zahl in string umgewandelt, mit radix 36 um zahlen und Buchsteben zu erhalten, nach 0. abgeschnitten um keine Dezimaldarstellung zu haben
  function generateRandomGameId(){
    return Math.random().toString(36).substring(2, 7).toUpperCase;
  }

</script>




<style>
@media (min-width: 1024px) {
  h1{
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
    background-color:bisque;
    border-radius: 10px;
    padding: 10px;
  }
  .button-middle{
    background-color:bisque;
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
