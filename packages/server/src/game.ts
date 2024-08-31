import { Board } from './board/Board'
import { type GameModel } from './models/GameModel';

function newRandomID(prefix: string) {
  return prefix + (Math.random() * Math.pow(16, 12)).toString(32);
}

export class Game {
  public readonly id: string;
  public board = new Board();

  constructor(){
    this.id = newRandomID('g');
    console.log(this.id);
  }

  public toModel(): GameModel {
    return {
      board: [...this.board.tiles.values()]
    }
  }
}