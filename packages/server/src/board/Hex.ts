import { DieColor } from "../enumValues/DieColor";
import { HexType } from "../enumValues/HexType";
import { TileType } from "../enumValues/TileType";

export type PlacementBonus = {
  type: DieColor | 'card' | 'vp' | 'rotate' | 'wild',
  amount?: number
}

export class Hex {
  public tile: TileType = TileType.EMPTY;

  constructor(
    public readonly x: number, 
    public readonly y: number,
    public readonly type: HexType,
    public readonly placementBonus?: PlacementBonus,
  ){};
}