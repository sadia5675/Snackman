import { defineStore } from "pinia";
import { sendMessage, stompClient, subscribeTo } from '@/config/stompWebsocket';
import { type Reactive, reactive } from "vue";
import type { IPlayerDTD } from "@/stores/game/dtd/IPlayerDTD";
import type { GameResponse } from "@/stores/game/responses/GameResponse";
import type { IGameDTD } from "@/stores/game/dtd/IGameDTD";
import { emptyGame, type IGameState } from "@/stores/game/IGameState";
import type { IMessageDTD} from "./dtd/IMessageDTD";
import { useModalStore } from "../modalstore";
import { Playerrole } from "./dtd/EPlayerrole";
import { useRouter } from 'vue-router';
import type {Result} from "@/stores/game/responses/Result";

export const useGameStore = defineStore('gameStore', () => {
  // Base URL for API calls
  const restUrl: string = '/api/game'
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
      console.log("Erstelle Spiel mit: ",gamemaster);

      const response: Response = await fetch(`${restUrl}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gamemaster),
      })

      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)

      if(gamemaster.password){
        gameState.gamedata.password = gamemaster.password;
      }

      stompClient.onConnect = () => {
        if (gameState.gamedata?.players) {
          subscribeTo(`/game/${gameState.gamedata.id}`, (message: IMessageDTD) => {
            handleStompMessage(message, () => {})
          })
        }
      }

      if (!stompClient.connected) {
        stompClient.activate()
      }
      sessionStorage.setItem("myName", gamemaster.name);
      sessionStorage.setItem("playerInfo", JSON.stringify(gamemaster));

      if(gamemaster.password){
        sessionStorage.setItem("password", gamemaster.password);
      }

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
          subscribeTo(`/game/${lobbyId}`, (message: IMessageDTD) => {
            handleStompMessage(message, resolve);
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
      const response = await fetch(`${restUrl}/start/${gameState.gamedata.id}`, {
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

  async function startGameViaStomp(selectedMapName: string): Promise<Result> {
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

    return new Promise((resolve) => {
      if (!stompClient.connected) {
        resolve({
          ok: false,
          message: 'WebSocket is not connected',
          data: null,
        })
      } else {
        sendMessage(`${topicUrl}/${gameState.gamedata.id}/start/${selectedMapName}`, actingPlayer)
        resolve({
          ok: true,
          message: 'Game started',
          data: null,
        })
      }
    })
  }

  async function endGame() {
    try {
      const response = await fetch(`${restUrl}/end/${gameState.gamedata.id}`, { method: 'POST' })
      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error('Error ending game:', error)
    }
  }

  async function movePlayer(username: string, targetX: number, targetZ: number): Promise<boolean> {
    try {
      const response = await fetch(`${restUrl}/move/${gameState.gamedata.id}/${username}/${targetX}/${targetZ}`, {
        method: 'POST',
      })
      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
      return true;
    } catch (error) {
      console.error('Error moving player:', error)
      return false;
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

          subscribeTo(`/game/${lobbyId}`, (message: IMessageDTD) => {
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
      const response = await fetch(`${restUrl}/kick/${gameState.gamedata.id}/${username.name}/${kickedusername.name}`, {
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
      const response = await fetch(`${restUrl}/setChicken/${gameState.gamedata.id}/${number}`, {
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
      const response = await fetch(`${restUrl}/status/${gameState.gamedata.id}`)
      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error('Error fetching game status:', error)
    }
  }

  async function setPlayerRole(username: string, role: string) {
    try {
      const response = await fetch(`${restUrl}/setRole/${gameState.gamedata.id}`, {
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

    function handleStompMessage(
      message: IMessageDTD,
      resolve: (value: boolean) => void,
    ) {
      console.log(message.feedback)
      if (message.status === 'ok') {
        modal.setErrorMessage('')
        switch (message.type) {
          case 'playerJoin':
            gameState.gamedata.players = message.feedback as IPlayerDTD[]
            break
          case 'playerRole':
            gameState.gamedata.players = message.feedback as IPlayerDTD[]
            break
          case 'gameStart':
            gameState.gamedata = message.feedback as IGameDTD
            break
          case 'playerMoveValidation':
            console.log("test")
          default:
            console.error('Unknown message type:', message.type)
        }
        resolve(true)
      } else {
        modal.setErrorMessage(message.feedback as string)
        stompClient.deactivate().then(r => console.log('Deactivated stompClient:', r))
        resolve(false)
      }
    }

    async function isGamePrivate(gameId: string): Promise<boolean> {
      try {
        const response = await fetch(`${restUrl}/${gameId}/isPrivate`);
        const result = await response.json();

        if (result.status === "ok") {
          return result.isPrivate;
        } else {
          throw new Error(result.message);
        }
      } catch (error) {
        console.error("Fehler beim Überprüfen, ob das Spiel privat ist:", error);
        return false;
      }
    }

  return {
    gameState,
    createGame,
    startGameViaStomp,
    endGame,
    movePlayer,
    leaveGame,
    kickUser,
    joinLobby,
    setChickenCount,
    fetchGameStatus,
    setPlayerRole,
    setPlayerRoleViaStomp,
    closeTab,
    isGamePrivate
  }
})

