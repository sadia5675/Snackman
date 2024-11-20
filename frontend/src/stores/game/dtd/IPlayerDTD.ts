import type {PlayerType} from "@/stores/game/dtd/PlayerType";

export interface IPlayerDTD {
  userId: number;
  name: string;
  email: string;
  password: string;
  playertype: PlayerType;
}
