export interface MapDTD {
    id: number
    name: string
    map: string[][]
  } 

  export interface MapsDTD {
    maps: MapDTD[]      
    selectedMap:MapDTD | null
  }