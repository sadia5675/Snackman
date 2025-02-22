import type {IGameDTD} from "@/stores/game/dtd/IGameDTD";

export interface IGameState {
  ok: boolean,
  gamedata: IGameDTD,
}

export const emptyGame: IGameState = {
  ok: false,
  gamedata: {
    id: "",
    players: [],
    chickens: [],
    gamemaster: null,
    started: false,
    playmap: undefined,
    password: null,
    characters: {},
    spawnPoints: [],
     winnerRole: null,
  },
}
