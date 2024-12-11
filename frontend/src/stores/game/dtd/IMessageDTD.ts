import type { IPlayerDTD } from "./IPlayerDTD";
import type { IPlayerPositionDTD } from "./IPlayerPositionDTD";

export interface Message {
    type: string;
    feedback: IPlayerPositionDTD | IPlayerDTD[] | string ; 
    status: 'ok' | 'error';         
    time: string;                   
  }
  