import type { IChickenDTD } from "./IChickenDTD";
import type { IGameDTD } from "./IGameDTD";
import type { IPlayerDTD } from "./IPlayerDTD";
import type { IPlayerPositionDTD } from "./IPlayerPositionDTD";
import type {IGameState} from "@/stores/game/IGameState";

export interface IMessageDTD {
    type: string;
    feedback: IPlayerPositionDTD | IPlayerDTD[] | IGameDTD | string | IPlayerPositionDTD[] | IChickenDTD[];
    status: 'ok' | 'error';
    time: string;
    password?:string
  }
