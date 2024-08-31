import express from "express";
import cors from "cors";
import * as trpc from './trpc'
import { createGameRouter } from "./routers/createGame";
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { getGameRouter } from "./routers/getGame";
import { playerInputRouter } from "./routers/playerInput";

const appRouter = trpc.mergeRouters(createGameRouter, getGameRouter, playerInputRouter)
 
// Export type router type signature
export type AppRouter = typeof appRouter;

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  '/api',
  createExpressMiddleware({
    router: appRouter,
    createContext: trpc.createContext,
  }),
);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server now up at port ${PORT}`)
});