import type { IItemDTD } from '@/stores/game/dtd/IItemDTD'

export interface IChickenDTD {
  chickenID: string;
  //gameId: string;
  posX: number;
  posY: number;
  angle: number;
  eggList: IItemDTD[];
  currentCalorie?: number | undefined;
}
