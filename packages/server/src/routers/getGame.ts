import { router, publicProcedure } from '../trpc';
import { GameLoader } from '../GameLoader';
import { z } from 'zod';

export const getGameRouter = router({
  getGame: publicProcedure
    .input(
      z.string()
    )
    .mutation(({ input }) => {
      return GameLoader.getInstance().load(input).toModel();
    }),
});