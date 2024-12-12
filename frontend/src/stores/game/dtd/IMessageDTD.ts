import type { IPlayerDTD } from "./IPlayerDTD";
import type { IPlayerPositionDTD } from "./IPlayerPositionDTD";
import type {IGameState} from "@/stores/game/IGameState";

export interface Message {
    type: string;
    feedback: IPlayerPositionDTD | IPlayerDTD[] | IGameDTD | string ;
    status: 'ok' | 'error';
    time: string;
  }
