import { publicProcedure, router } from "./init.ts";
import { getAllBots } from "../../common/ai/training/infra/repo/getAllBots.ts";

export const appRouter = router({
  getAllBots: publicProcedure.query(getAllBots),
});

export type AppRouter = typeof appRouter;
