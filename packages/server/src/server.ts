import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from "cors";
import { initTRPC } from "@trpc/server";
import { z } from 'zod';

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().create();

const appRouter = t.router({
  multiply: t.procedure
    .input(z.number())
    .query((opts) => {
      const { input } = opts;
      return input * 2;
    }
  ),
});
 
// Export type router type signature
export type AppRouter = typeof appRouter;

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  '/api',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server now up at port ${PORT}`)
});