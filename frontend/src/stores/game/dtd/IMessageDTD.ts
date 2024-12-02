import type { IPlayerDTD } from "./IPlayerDTD";

export interface Message {
    feedback: IPlayerDTD[] | string; 
    status: 'ok' | 'error';         
    time: string;                   
  }
  