import type {IPlayerDTD} from "@/stores/game/dtd/IPlayerDTD";
import type {IChickenDTD} from "@/stores/game/dtd/IChickenDTD";

export interface IGameDTD {
  id: string;
  players: IPlayerDTD[];
  chickens: IChickenDTD[];
  gamemaster: IPlayerDTD;
  started: boolean;
}

