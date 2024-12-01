import { defineStore } from "pinia";
import { sendMessage, stompClient, subscribeToLobby } from '@/config/stompWebsocket';
import { type Reactive, reactive } from "vue";
import type { IPlayerDTD } from "@/stores/game/dtd/IPlayerDTD";
import type { GameResponse } from "@/stores/game/responses/GameResponse";
import type { IGameDTD } from "@/stores/game/dtd/IGameDTD";
import { emptyGame, type IGameState } from "@/stores/game/IGameState";
import type { Message } from "./dtd/IMessageDTD";
import { useModalStore } from "../modalstore";
import { Playerrole } from "./dtd/EPlayerrole";
import { PlayerType } from "./dtd/PlayerType";

export const useGameStore = defineStore('gameStore', () => {
  // Base URL for API calls
  const apiUrl = '/api/game'
  const topicUrl = '/topic/game'

  // Game state
  const gameState: Reactive<IGameState> = reactive(emptyGame)
  const modal = useModalStore();

  function handleGameStateError() {
    resetGameState()
  }

  function resetGameState() {
    gameState.ok = emptyGame.ok
    gameState.gamedata = emptyGame.gamedata
  }

  function setGameStateFromResponse(gameResponse: GameResponse) {
    gameState.ok = true
    gameState.gamedata = gameResponse.feedback as IGameDTD
  }

  // Helper function to handle API responses
  async function handleResponse(response: Response): Promise<GameResponse> {
    if (!response.ok) {
      throw new Error(`Error while fetching data with status: ${response.status}`)
    }
    const gameResponse: GameResponse = await response.json()
    if (gameResponse.status === 'error') {
      throw new Error(gameResponse.feedback)
    }

    return gameResponse
  }

  // API methods
  async function createGame(gamemaster: IPlayerDTD) {
    try {
      gamemaster.playerrole = Playerrole.SNACKMAN;
      const response: Response = await fetch(`${apiUrl}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gamemaster),
      })

      const gameResponse = await handleResponse(response);
      setGameStateFromResponse(gameResponse);

      stompClient.onConnect = () => {
        if(gameState.gamedata?.players){
          subscribeToLobby(gameState.gamedata.id, (message: Message) => { gameState.gamedata.players = message.feedback as IPlayerDTD[]})
        }
      }

      if (!stompClient.connected) {
        stompClient.activate()
      }
      sessionStorage.setItem("myName", gamemaster.name);

    } catch (error) {
      handleGameStateError()
      console.error('Error creating game:', error)
    }
  }

  function joinLobby(lobbyId: string, newPlayer: IPlayerDTD): Promise<boolean> {
    return new Promise((resolve) => {
      stompClient.onConnect = () => {
        stompClient.unsubscribe(`/topic/game/${lobbyId}`);

        if (gameState.gamedata?.players) {

          subscribeToLobby(lobbyId, (message: Message) => {

            if (message.status === 'ok') {
              console.log(message.feedback)
              gameState.gamedata.players = message.feedback as IPlayerDTD[];
              modal.setErrorMessage('');

              resolve(true);
            } else {

              modal.setErrorMessage(message.feedback as string);
              stompClient.deactivate();
              resolve(false);
            }
          });

          sendMessage(`/topic/game/${lobbyId}/join`, newPlayer);
          sessionStorage.setItem("myName", newPlayer.name);
        }
      };

      if (!stompClient.connected) {

        stompClient.activate();
      }
    });
  }


  async function startGame() {
    try {
      const response = await fetch(`${apiUrl}/start/${gameState.gamedata.id}`, { method: 'POST' })
      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error('Error starting game:', error)
    }
  }

  async function endGame() {
    try {
      const response = await fetch(`${apiUrl}/end/${gameState.gamedata.id}`, { method: 'POST' })
      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error('Error ending game:', error)
    }
  }

  function leaveGame(lobbyId: string) {
    try {
      sendMessage(`/topic/game/${lobbyId}/leave`, {
        name: 'Berhan',
        email: 'Test MAIL',
        userId: 123
      });
      stompClient.unsubscribe(`/topic/game/${gameState.gamedata.id}`);
      stompClient.deactivate();
      subscribeToLobby(lobbyId, (message) => { gameState.gamedata.players = message })

      console.log("Ich bin geleaved")
    } catch (error) {
      console.log(error)
    }
  }


  async function closeTab() {
    stompClient.onDisconnect = () => {
      if (window.closed) {
        if (stompClient.connected) {
          console.log("ich wurde gelöscht");
          stompClient.deactivate;
        }
      }
    }
  }

  async function kickUser(username: string) {
    try {
      const response = await fetch(`${apiUrl}/kick/${gameState.gamedata.id}/${username}`, {
        method: 'POST',
      })
      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error('Error kicking user:', error)
    }
  }

  async function setChickenCount(number: number) {
    try {
      const response = await fetch(`${apiUrl}/setChicken/${gameState.gamedata.id}/${number}`, {
        method: 'POST',
      })
      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error('Error setting chicken count:', error)
    }
  }

  async function fetchGameStatus() {
    try {
      const response = await fetch(`${apiUrl}/status/${gameState.gamedata.id}`)
      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error('Error fetching game status:', error)
    }
  }

  async function setPlayerRole(username: string, role: string) {
    try {
      const response = await fetch(`${apiUrl}/setRole/${gameState.gamedata.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, role }),
      })

      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error('Error set user role:', error)
    }
  }

  return {
    gameState,
    createGame,
    startGame,
    endGame,
    leaveGame,
    kickUser,
    joinLobby,
    setChickenCount,
    fetchGameStatus,
    setPlayerRole
  }
})
