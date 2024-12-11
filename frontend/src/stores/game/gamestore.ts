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
import { useRouter } from 'vue-router';
import type {Result} from "@/stores/game/responses/Result";

export const useGameStore = defineStore('gameStore', () => {
  // Base URL for API calls
  const apiUrl: string = '/api/game'
  const topicUrl: string = '/topic/game'

  // Game state
  const gameState: Reactive<IGameState> = reactive(emptyGame)
  const modal = useModalStore()

  const router = useRouter();

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
      gamemaster.playerrole = Playerrole.SNACKMAN
      const response: Response = await fetch(`${apiUrl}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gamemaster),
      })

      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)

      stompClient.onConnect = () => {
        if (gameState.gamedata?.players) {
          subscribeToLobby(gameState.gamedata.id, (message: Message) => {
            gameState.gamedata.players = message.feedback as IPlayerDTD[]
          })
        }
      }

      if (!stompClient.connected) {
        stompClient.activate()
      }
      sessionStorage.setItem("myName", gamemaster.name);
      sessionStorage.setItem("playerInfo", JSON.stringify(gamemaster));

    } catch (error) {
      handleGameStateError()
      console.error('Error creating game:', error)
    }
  }

  function joinLobby(lobbyId: string, newPlayer: IPlayerDTD): Promise<boolean> {
    return new Promise((resolve) => {
      stompClient.onConnect = () => {
        stompClient.unsubscribe(`${topicUrl}/${lobbyId}`)

        if (gameState.gamedata?.players) {
          subscribeToLobby(lobbyId, (message: Message) => {
            if (message.status === 'ok') {
              console.log(message.feedback)
              gameState.gamedata.players = message.feedback as IPlayerDTD[]
              modal.setErrorMessage('')

              resolve(true)
            } else {
              modal.setErrorMessage(message.feedback as string)
              stompClient.deactivate()
              resolve(false)
            }
          })

          sendMessage(`${topicUrl}/${lobbyId}/join`, newPlayer)
          sessionStorage.setItem('myName', newPlayer.name)
        }
      }

      if (!stompClient.connected) {
        stompClient.activate()
      }
    })
  }

  async function startGame(selectedMapName: string) {
    try {
      const response = await fetch(`${apiUrl}/start/${gameState.gamedata.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({selectedMap: selectedMapName}),
      })
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

  function leaveGame(lobbyId: string, leavingPlayer: IPlayerDTD): Promise<boolean> {
    return new Promise((resolve) => {
      try {
        if (!stompClient.connected) {
          stompClient.activate();

          stompClient.onConnect = () => {
            sendLeaveMessage();
          };
        } else {
          sendLeaveMessage();
        }

        function sendLeaveMessage() {
          console.log("Sending leave message for:", leavingPlayer.name);
          sendMessage(`/topic/game/${lobbyId}/leave`, { name: leavingPlayer.name });

          subscribeToLobby(lobbyId, (message: Message) => {
            if (message.status === 'ok') {
              console.log(`${leavingPlayer.name} erfolgreich verlassen.`);

              const updatedPlayers = message.feedback as IPlayerDTD[];
              gameState.gamedata.players.splice(0, gameState.gamedata.players.length, ...updatedPlayers);

              const myName = sessionStorage.getItem("myName");
              if (myName === leavingPlayer.name) {
                sessionStorage.removeItem("myName");
                router.push({ name: "index" });
              }

              resolve(true);
            } else {
              console.error("Leave error:", message.feedback);
              resolve(false);
            }
          });
        }
      } catch (error) {
        console.error("Error in leaveGame:", error);
      }
    });
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

  async function kickUser(username: IPlayerDTD, kickedusername: IPlayerDTD) {
    try {
      const response = await fetch(`${apiUrl}/kick/${gameState.gamedata.id}/${username.name}/${kickedusername.name}`, {
        method: 'POST',
      })
      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
      await leaveGame(gameState.gamedata.id, kickedusername)
      console.log("User {} got kicked from {}", kickedusername, username)
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

  function getActingPlayer(): IPlayerDTD | undefined {
    const actingPlayerName: string | null = sessionStorage.getItem('myName')
    return gameState.gamedata?.players?.find((player) => player.name === actingPlayerName)
  }

  function setPlayerRoleViaStomp(
    username: string,
    role: Playerrole,
    lobbyId: string,
  ): Promise<Result> {
    const actingPlayer = getActingPlayer()
    if (!actingPlayer) {
      return new Promise((resolve) =>
        resolve({
          ok: false,
          message: 'No acting player found',
          data: null,
        }),
      )
    }

    // const lobbyId = gameState.gamedata.id
    // if (!lobbyId) {
    //   return new Promise((resolve) =>
    //     resolve({
    //       ok: false,
    //       message: 'No lobby ID found',
    //       data: null,
    //     }),
    //   )
    // }

    console.log('Setting role of ' + username + ' to ' + Playerrole[role])

    return new Promise((resolve) => {
      if (!stompClient.connected) {
        resolve({
          ok: false,
          message: 'WebSocket is not connected',
          data: null,
        })
      } else {
        sendMessage(`${topicUrl}/${lobbyId}/setRole/${username}/${Playerrole[role]}`, actingPlayer)
        resolve({
          ok: true,
          message: 'Role set',
          data: null,
        })
      }
    })
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
    setPlayerRole,
    setPlayerRoleViaStomp,
    closeTab
  }
})
