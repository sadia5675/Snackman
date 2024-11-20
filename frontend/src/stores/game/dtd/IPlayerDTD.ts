import type {PlayerType} from "@/stores/game/dtd/PlayerType";

export interface IPlayerDTD {
  name: string;
  email: string;
  password: string;
  playertype: PlayerType;
}
