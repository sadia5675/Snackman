import type { IItemDTD } from '@/stores/game/dtd/IItemDTD'

export interface IChickenDTD {
  chickenID: string;
  //gameId: string;
  //currentCalorie?: number | undefined;
  posX: number;
  posY: number;
  angle: number;
  eggList: IItemDTD[];
}
