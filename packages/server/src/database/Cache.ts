import { Game } from '../game';

const evictMillis = 30 * 60 * 1000;
const sweepMillis = 60 * 1000;

export class Cache {
  private games: Record<string, Game> = {}
  private evictionScedule: Record<string, number> = {}

  constructor(){
    scheduleSweep(this, sweepMillis);
  }

  public getGames(): Record<string, Game> {
    return this.games;
  }

  // Set eviction time
  public mark(gameID: string) {
    this.evictionScedule[gameID] = Date.now() + evictMillis;
  }

  public sweep() {
    for (const gameID in this.games) {
      // if not scheduled for eviction, mark
      if (this.evictionScedule[gameID] === undefined) {
        this.mark(gameID);
      // if ready to be evicted, evict
      } else if (this.evictionScedule[gameID] <= Date.now()) {
        this.evict(gameID);
      }
    }
  }

  public evict(gameID: string) {
    console.log(`evicting ${gameID}`);
    // store in db
    delete this.games[gameID];
    delete this.evictionScedule[gameID];
   }
}

function scheduleSweep(cache: Cache, sweepMillis: number) {
  setTimeout(() => {
    console.log('Sweeping cache');
    try {
      cache.sweep();
    } catch {
      console.log('Error sweeping cache');
    }
    scheduleSweep(cache, sweepMillis);
  }, sweepMillis);
}