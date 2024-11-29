import { defineStore } from 'pinia';
import { ref } from 'vue'
import { ModalType } from './game/dtd/EModalType';
import type { IPlayerDTD } from './game/dtd/IPlayerDTD';
import { useGameStore } from './game/gamestore';
import { useRouter } from 'vue-router';

export const useModalStore = defineStore('modal', () => {


    const isModalOpen = ref(false);
    const modalType = ref<ModalType>();
    const gameId = ref();
    const inputErrorMessage = ref('');
    const game = useGameStore();
    const router = useRouter();

    function openModal(type: ModalType, gameId_: String) {
        isModalOpen.value = true;
        modalType.value = type;
        gameId.value = gameId_;
    }

    function closeModal() {
        isModalOpen.value = false;
    }

    async function newGame(newPlayer: IPlayerDTD) {

        if (!newPlayer.name) {
          inputErrorMessage.value = "Bitte einen Usernamen eingeben";
        } else {
          await game.createGame(newPlayer);
      
          router.push(`/lobby/${game.gameState.gamedata.id}`);
        }
      }
      
      async function joinGame(newPlayer: IPlayerDTD){
        if(!newPlayer.name){
          inputErrorMessage.value = "Bitte einen Username eingeben"
        }else{

          const response = await game.joinLobby(gameId.value,newPlayer);

          if(response){
            const id = game.gameState.gamedata.id;
            router.push(`/lobby/${gameId.value}`);
            return;
          } 
          
          return;
        }
      }

      function setErrorMessage(error: string){
        inputErrorMessage.value = error;
      }


    return { isModalOpen, openModal, closeModal, modalType, newGame, joinGame, setErrorMessage, inputErrorMessage }

})