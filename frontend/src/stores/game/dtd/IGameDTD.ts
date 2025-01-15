import type { IPlayerDTD } from '@/stores/game/dtd/IPlayerDTD'
import type { IChickenDTD } from '@/stores/game/dtd/IChickenDTD'
import type { ICharacterDTD } from '@/stores/game/dtd/ICharacterDTD'
import type { IPlayerPositionDTD } from './IPlayerPositionDTD'


export interface IGameDTD {
  id: string
  players: IPlayerDTD[]
  chickens: IChickenDTD[]
  gamemaster: IPlayerDTD | null
  started: boolean
  password: string | null
  playmap?: {
    map: string[]
    width: number
    height: number
  }
  spawnPoints: IPlayerPositionDTD[];
  maxPointsSnackman?: number,
  characters: Record<string, ICharacterDTD>,
}
