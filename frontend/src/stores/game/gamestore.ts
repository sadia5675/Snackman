import { defineStore } from "pinia";
import { sendMessage, stompClient, subscribeTo } from '@/config/stompWebsocket';
import { type Reactive, reactive, ref } from "vue";
import type { IPlayerDTD } from "@/stores/game/dtd/IPlayerDTD";
import type { IChickenDTD } from "./dtd/IChickenDTD";
import type { GameResponse } from "@/stores/game/responses/GameResponse";
import type { IGameDTD } from "@/stores/game/dtd/IGameDTD";
import { emptyGame, type IGameState } from "@/stores/game/IGameState";
import type { IMessageDTD } from "./dtd/IMessageDTD";
import { useModalStore } from "../modalstore";
import { Playerrole } from "./dtd/EPlayerrole";
import { useRouter } from 'vue-router';
import type {Result} from "@/stores/game/responses/Result";
import { useThemeStore } from "@/stores/themes/themeStore";
import { useMapStore } from "@/stores/map/MapStore";


export const useGameStore = defineStore('gameStore', () => {
  // Base URL for API calls
  const restUrl: string = '/api/game'
  const topicUrl: string = '/topic/game'

  // Game state
  const gameState: Reactive<IGameState> = reactive(emptyGame)
  const modal = useModalStore()

  const jumpAllowed = ref(false);

  const router = useRouter();

  function handleGameStateError() {
    resetGameState()
  }

  async function getJumpAllowed(name: string, lobbyid: string) {
    const playerName = sessionStorage.getItem('myName')
    const response = await fetch(`${restUrl}/${lobbyid}/jumpAllowed`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })

    const result: any = await response.json()
    jumpAllowed.value = result.jumpAllowed;
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
            handleStompMessage(message, () => { })
          })
          //Auf Hühnchenposition abonnieren
          subscribeToChickenPositions(gameState.gamedata.id);
        }
      }

      if (!stompClient.connected) {
        stompClient.activate()
      }
      sessionStorage.setItem("myName", gamemaster.name);
      sessionStorage.setItem("playerInfo", JSON.stringify(gamemaster));

      if (gamemaster.password) {
        sessionStorage.setItem("password", gamemaster.password);
      }

    } catch (error) {
      handleGameStateError()
      console.error('Error creating game:', error)
    }
  }

  function joinLobby(lobbyId: string, newPlayer: IPlayerDTD): Promise<boolean> {
    return new Promise((resolve) => {
      if (stompClient.active) {
        stompClient.deactivate()
      }
      stompClient.onConnect = () => {
        stompClient.unsubscribe(`${topicUrl}/${lobbyId}`)

        if (gameState.gamedata?.players) {
          subscribeTo(`/game/${lobbyId}`, (message: IMessageDTD) => {
            handleStompMessage(message, resolve);
          })

          //Auf Hühnchenposition abonnieren
          subscribeToChickenPositions(lobbyId)

          sendMessage(`${topicUrl}/${lobbyId}/join`, newPlayer)
          sessionStorage.setItem('myName', newPlayer.name)
        }
      }

      stompClient.activate();      
    })
  }

  async function startGame(selectedMapName: string) {
    try {
      const response = await fetch(`${restUrl}/start/${gameState.gamedata.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedMap: selectedMapName }),
      })
      const gameResponse = await handleResponse(response)
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error('Error starting game:', error)
    }
  }

  async function startGameViaStomp(selectedMapName: string, chickenCount: number): Promise<Result> {
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
        sendMessage(`${topicUrl}/${gameState.gamedata.id}/start/${selectedMapName}/${chickenCount}`, actingPlayer) //${chickenCount}
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

  //Aufruf bei neuem Game und joinen -> (bekommt bis jetzt nur eine Map von Hinkeln mit X und Y Pos aus dem Backend)
  function subscribeToChickenPositions(lobbyId: string): void {
    if (!stompClient.connected) {
      console.error("WebSocket ist nicht verbunden!");
      return;
    }
    subscribeTo(`/ingame/${lobbyId}/chickenPosition`, (message: IMessageDTD) => {
      handleStompMessage(message, () => { })
    });
  }

  function handleLeaveResponse(
    message: IMessageDTD,
    leavingPlayer: IPlayerDTD,
    resolve: (value: boolean) => void,
    reject: (reason?: any) => void
  ) {
    console.log("INSIDE HANDLE")
    if (message.status === 'ok') {
      console.log(`${leavingPlayer.name} successfully left.`);
  
      const updatedPlayers = message.feedback as IPlayerDTD[];
      gameState.gamedata.players.splice(0, gameState.gamedata.players.length, ...updatedPlayers);
  
      const myName = sessionStorage.getItem("myName");
      if (myName === leavingPlayer.name) {
        sessionStorage.removeItem("myName");
        stompClient.deactivate();
        router.push({ name: "index" });
      }
      resolve(true);
    }
    else {
      console.error("Leave error:", message.feedback);
      resolve(false);
    }
  }

  function leaveGame(lobbyId: string, leavingPlayer: IPlayerDTD): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        // Nachricht senden
        sendMessage(`/topic/game/${lobbyId}/leave`, leavingPlayer);
        console.log("Leave message sent for:", leavingPlayer.name);
  
        // Auf Rückmeldung warten
        subscribeTo(`/game/${lobbyId}`, (message: IMessageDTD) => {
          handleLeaveResponse(message, leavingPlayer, resolve, reject);
        });
      } catch (error) {
        console.error("Error in leaveGame:", error);
        reject(error); // Promise ablehnen
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

  async function fetchGameStatus(lobbyId: string) {
    try {
      const response = await fetch(`${restUrl}/status/${lobbyId}`)
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
            console.log(gameState)
            break
          case 'playerLeave':
            console.log("PlayerLeave Feedback: ", message.feedback);
            gameState.gamedata.players = message.feedback as IPlayerDTD[];
          case 'themeUpdate':
            const themeStore = useThemeStore()
            const newTheme = message.feedback as string
            if (themeStore.themes[newTheme]) {
              themeStore.selectedTheme = newTheme
              console.log(`Theme updated to: ${newTheme}`)
            } else {
              console.error('Received invalid theme:', newTheme)
            }
            break
          case'mapUpdate':
            const mapStore = useMapStore();
            const newMapName = message.feedback;
            const updatedMap = mapStore.mapsDTD.maps.find(map => map.name === newMapName);
            if (updatedMap) {
              mapStore.mapsDTD.selectedMap = updatedMap;
              console.log(`Map updated to: ${updatedMap.name}`);
            } else {
              console.error('Received invalid map:', newMapName);
            }
            break;
          case 'playerMoveValidation':
            console.log("test")
            break;
          case 'chickenPositions':
            gameState.gamedata.chickens = message.feedback as IChickenDTD[]
            break;
          default:
            console.error('Unknown message type:', message.type)
        }
        resolve(true)
      } else {
        modal.setErrorMessage(message.feedback as string)
        //stompClient.deactivate().then(r => console.log('Deactivated stompClient:', r))
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

    function disconnectWebSocket() {
      if (stompClient && stompClient.connected) {
        stompClient.deactivate();
        console.log("WebSocket client disconnected.");
      }
    }

  return {
    gameState,
    jumpAllowed,
    createGame,
    startGameViaStomp,
    endGame,
    movePlayer,
    leaveGame,
    kickUser,
    joinLobby,
    //setChickenCount,
    fetchGameStatus,
    setPlayerRole,
    setPlayerRoleViaStomp,
    closeTab,
    isGamePrivate,
    resetGameState,
    getJumpAllowed,
    disconnectWebSocket,
    subscribeToChickenPositions
  }
})

