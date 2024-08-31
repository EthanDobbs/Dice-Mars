import { Cache } from "./database/Cache";
import { Game } from "./game";

export class GameLoader {
  private static instance: GameLoader;
  
  private readonly cache = new Cache();

  constructor(){}

  public static getInstance(): GameLoader {
    if (this.instance === undefined) {
      this.instance = new GameLoader();
    }
    return this.instance;
  }

  public newGame(): Game {
    let games = this.cache.getGames();
    const newGame = new Game();
    games[newGame.id] = newGame;
    return newGame;
  }

  public load(gameID: string): Game {
    const games = this.cache.getGames();
    const game = games[gameID];
    if (game) {
      return game;
    } else {
      throw new Error('Game ID not found');
    }
  }
}