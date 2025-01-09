export interface ICharacterDTD {
  id: string;
  name: string;
  gameId: string;
  playerSpeed: number;
  posX: number;
  posY: number;
  posZ: number;
  angleInDegrees: number;
  currentCalorie?: number;
  touchcount?: number;
  item?: any | null;
  items?: any[] | null;
}
