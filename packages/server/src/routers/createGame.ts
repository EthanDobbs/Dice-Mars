import { GameLoader } from '../GameLoader';
import { router, publicProcedure } from '../trpc';

export const createGameRouter = router({
  createGame: publicProcedure
    .mutation(() => {
      return GameLoader.getInstance().newGame().id;
    }),
});