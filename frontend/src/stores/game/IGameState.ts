import type {IGameDTD} from "@/stores/game/dtd/IGameDTD";
import { PlayerType } from "./dtd/PlayerType";

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
  },
}
