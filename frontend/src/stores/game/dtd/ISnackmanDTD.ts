import type { ICharacterDTD } from '@/stores/game/dtd/ICharacterDTD'
import type { IItemDTD } from '@/stores/game/dtd/IItemDTD'

export interface ISnackmanDTD extends ICharacterDTD {
  life: number
  nutriscore: number
  items: IItemDTD[]
}
