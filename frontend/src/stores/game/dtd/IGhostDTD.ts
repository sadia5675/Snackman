import type { ICharacterDTD } from '@/stores/game/dtd/ICharacterDTD'
import type { IItemDTD } from '@/stores/game/dtd/IItemDTD'

export interface IGhostDTD extends ICharacterDTD {
  touchcount: number
  items: IItemDTD[]
}
