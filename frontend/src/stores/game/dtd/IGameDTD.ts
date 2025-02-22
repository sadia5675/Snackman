import type { IPlayerDTD } from '@/stores/game/dtd/IPlayerDTD'
import type { IChickenDTD } from '@/stores/game/dtd/IChickenDTD'
import type { ICharacterDTD } from '@/stores/game/dtd/ICharacterDTD'
import type { IPlayerPositionDTD } from './IPlayerPositionDTD'
import type { ISpawnPointsDTD } from './ISpawnPointsDTD'

import type { Playerrole } from '@/stores/game/dtd/EPlayerrole'

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
  spawnPoints: ISpawnPointsDTD[];
  maxPointsSnackman?: number,
  snackmanMaxLife?: number,
  winnerRole: Playerrole | null,
  characters: Record<string, ICharacterDTD>,
}
