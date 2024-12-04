import type { PlayerType } from '@/stores/game/dtd/PlayerType'
import type { Playerrole } from '@/stores/game/dtd/EPlayerrole'

export interface IPlayerDTD {
  name: string
  email: string
  password: string
  playertype: PlayerType
  playerrole: Playerrole
}
