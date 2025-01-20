import type { IItemDTD } from '@/stores/game/dtd/IItemDTD'

export interface IChickenDTD {
  id: string;
  //gameId: string;
  posX: number;
  posY: number;
  angle: number;
  eggList: IItemDTD[];
  currentCalorie?: number | undefined;
}
