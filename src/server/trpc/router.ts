import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { publicProcedure, router } from "./init.ts";
import { getAllTourneyBots } from "../../common/ai/training/infra/repo/getAllTourneyBots.ts";
import { getAllBorrowBots } from "../../common/ai/training/infra/repo/getAllBorrowBots.ts";

export const appRouter = router({
  getAllBots: publicProcedure.query(getAllTourneyBots),
  getAllBorrowBots: publicProcedure.query(getAllBorrowBots),
});

export type AppRouter = typeof appRouter;

export const trpcHandler = createHTTPHandler({
  router: appRouter,
  createContext: () => ({}),
  basePath: "/trpc/",
});
