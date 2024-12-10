import type { IPlayerDTD } from "./IPlayerDTD";
import type { PlayerPosition } from "./IPlayerPositionDTD";

export interface Message {
    type: string;
    feedback: PlayerPosition | IPlayerDTD[] | string ; 
    status: 'ok' | 'error';         
    time: string;                   
  }
  