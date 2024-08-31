import z from 'zod';
import { router, publicProcedure } from '../trpc';
import { TileType } from '../enumValues/TileType';
import { GameLoader } from '../GameLoader';

export const playerInputRouter = router({
  playerInput: publicProcedure
    .input(
      z.object({
        gameId: z.string(),
        x: z.number(),
        y: z.number(),
        tile: z.nativeEnum(TileType)
      })
    )
    .mutation((opts) => {
      const { input } = opts;
      console.log(input);
      const game = GameLoader.getInstance().load(input.gameId);
      game.board.buildTile(input.x, input.y, input.tile);
      return undefined
    }),
});