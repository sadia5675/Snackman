import type {IGameDTD} from "@/stores/game/dtd/IGameDTD";

export interface IGameState {
  ok: boolean,
  gamedata: IGameDTD | null,
}

export const emptyGame: IGameState = {
  ok: false,
  gamedata: null,
}
