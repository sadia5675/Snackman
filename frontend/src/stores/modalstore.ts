import { defineStore } from 'pinia';
import { ref } from 'vue'
import { ModalType } from './game/dtd/EModalType';
import type { IPlayerDTD } from './game/dtd/IPlayerDTD';
import { useGameStore } from './game/gamestore';
import { useRouter } from 'vue-router';
import { Playerrole } from './game/dtd/EPlayerrole';

export const useModalStore = defineStore('modal', () => {


  const isModalOpen = ref(false);
  const modalType = ref<ModalType>();
  const gameId = ref();
  const inputErrorMessage = ref('');
  const game = useGameStore();
  const router = useRouter();
  const requirePassword = ref(false);
  const isGamePrivate = ref(false);

  function openModal(type: ModalType, gameId_: String, isPrivate: boolean) {
    isModalOpen.value = true;
    modalType.value = type;
    gameId.value = gameId_;
    isGamePrivate.value = isPrivate;
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

  async function joinGame(newPlayer: IPlayerDTD) {
    if (!newPlayer.name) {
      inputErrorMessage.value = "Bitte einen Username eingeben"
    } else {

      const response = await game.joinLobby(gameId.value, newPlayer);

      if (response) {
        const id = game.gameState.gamedata.id;
        router.push(`/lobby/${gameId.value}`);
        return;
      }

      return;
    }
  }

  function setErrorMessage(error: string) {
    inputErrorMessage.value = error;
  }

  async function checkPrivateGame(gameId_: string) {
    try {
      const isPrivate = await game.isGamePrivate(gameId_);
      isGamePrivate.value = isPrivate;
      openModal(ModalType.JOIN_GAME, gameId_, isPrivate);
    } catch (error) {
      console.error("Fehler beim Überprüfen des privaten Status:", error);
      inputErrorMessage.value = "Lobby konnte nicht überprüft werden.";
    }
  }


  return { isModalOpen, openModal, closeModal, modalType, newGame, joinGame, setErrorMessage, inputErrorMessage, requirePassword, isGamePrivate, checkPrivateGame }

})
