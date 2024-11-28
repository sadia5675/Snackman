import type {PlayerType} from "@/stores/game/dtd/PlayerType";
import type {PlayerRole} from "@/stores/game/dtd/PlayerRole";

export interface IPlayerDTD {
  name: string;
  email: string;
  password: string;
  playertype: PlayerType;
  playerrole: PlayerRole;
}
