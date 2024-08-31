import { Hex } from './Hex';
import { HexType } from '../enumValues/HexType';
import { TileType } from '../enumValues/TileType';

export class Board {
  public tiles: Map<[number, number], Hex>;

  constructor(){
    this.tiles = new Map();
    const size = 3;

    for (let q = -size; q <= size; q++) {
      const r1 = Math.max(-size, -q - size);
      const r2 = Math.min(size, -q + size);
      for (var r = r1; r <= r2; r++) {
        this.tiles.set([r, q], new Hex(r, q, HexType.LAND));
      }
    }
  }

  public buildTile(x: number, y: number, tile: TileType): Hex {
    const hex = this.tiles.get([x, y]);
    console.log([x, y]);
    if (hex) {
      hex.tile = tile;
      return hex;
    } else {
      console.log(this.tiles);
      throw new Error(`${x}, ${y} tile not found`);
    }
  }
}