import { defineStore } from "pinia";
import { sendMessage, stompClient, subscribeToLobby } from '@/config/stompWebsocket';
import { type Reactive, reactive } from "vue";
import type { IPlayerDTD } from "@/stores/game/dtd/IPlayerDTD";
import type { GameResponse } from "@/stores/game/responses/GameResponse";
import type { IGameDTD } from "@/stores/game/dtd/IGameDTD";
import { emptyGame, type IGameState } from "@/stores/game/IGameState";

export const useGameStore = defineStore("gameStore", () => {
  // Base URL for API calls
  const apiUrl = "/api/game";

  // Game state
  const gameState: Reactive<IGameState> = reactive(emptyGame)

  function handleGameStateError() {
    resetGameState()
  }

  function resetGameState() {
    gameState.ok = emptyGame.ok;
    gameState.gamedata = emptyGame.gamedata;
  }

  function setGameStateFromResponse(gameResponse: GameResponse) {
    gameState.ok = true;
    gameState.gamedata = gameResponse.feedback as IGameDTD;
  }

  // Helper function to handle API responses
  async function handleResponse(response: Response): Promise<GameResponse> {
    if (!response.ok) {
      throw new Error(`Error while fetching data with status: ${response.status}`);
    }
    const gameResponse: GameResponse = await response.json();
    if (gameResponse.status === "error") {
      throw new Error(gameResponse.feedback);
    }

    return gameResponse;
  }

  // API methods
  async function createGame(gamemaster: IPlayerDTD) {
    try {
      const response: Response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gamemaster),
      });

      const gameResponse = await handleResponse(response);
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error("Error creating game:", error);
    }
  }

  function joinLobby(lobbyId: string) {
    stompClient.onConnect = () => {
      if(gameState.gamedata?.players){
        subscribeToLobby(lobbyId, (message) => { gameState.gamedata.players = message })
        sendMessage(`/topic/game/${lobbyId}/join`,{
          name: 'Berhan',
          email: 'Test MAIL',
          userId: 123
        })
      }
    }

    if (!stompClient.connected) {
      stompClient.activate()
    }
  }

  async function startGame() {
    try {
      const response = await fetch(`${apiUrl}/start`, { method: "POST" });
      const gameResponse = await handleResponse(response);
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error("Error starting game:", error);
    }
  }

  async function endGame() {
    try {
      const response = await fetch(`${apiUrl}/end`, { method: "POST" });
      const gameResponse = await handleResponse(response);
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error("Error ending game:", error);
    }
  }

  async function kickUser(username: string) {
    try {
      const response = await fetch(`${apiUrl}/kick/${username}`, { method: "POST", });
      const gameResponse = await handleResponse(response);
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error("Error kicking user:", error);
    }
  }

  async function setChickenCount(number: number) {
    try {
      const response = await fetch(`${apiUrl}/setChicken/${number}`, {
        method: "POST",
      });
      const gameResponse = await handleResponse(response);
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error("Error setting chicken count:", error);
    }
  }

  async function fetchGameStatus() {
    try {
      const response = await fetch(`${apiUrl}/status`);
      const gameResponse = await handleResponse(response);
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error("Error fetching game status:", error);
    }
  }

  async function setPlayerRole(username: string, role: string) {
    try {
      const response = await fetch(`${apiUrl}/setRole`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, role }),
      });

      const gameResponse = await handleResponse(response);
      setGameStateFromResponse(gameResponse)
    } catch (error) {
      handleGameStateError()
      console.error("Error set user role:", error);
    }
  }



  return {
    gameState,
    createGame,
    startGame,
    endGame,
    kickUser,
    joinLobby,
    setChickenCount,
    fetchGameStatus,
    setPlayerRole
  };
});
