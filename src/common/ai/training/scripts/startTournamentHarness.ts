import { botsCount } from "../infra/repo/botsCount.ts";
import { insertBot } from "../infra/repo/insertBot.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "../../mutation/randomlyMutateUnitAwareBehaviourTree.ts";
import { sampleTree } from "../../behaviourTree/__fixtures__/sampleTree.ts";
import { sql } from "../infra/connection.ts";

const TOTAL_BOTS_IN_POOL = 1_000;
const MUTATION_COUNT = 50;

async function startTournamentHarness() {
  // Always top up the pool.
  const count = await botsCount();
  if (count < TOTAL_BOTS_IN_POOL) {
    for (let i = 0; i < TOTAL_BOTS_IN_POOL - count; i++) {
      await insertBot(randomlyMutateUnitAwareBehaviourTree({ tree: sampleTree, count: MUTATION_COUNT }));
    }
  }

  // Run tournaments, give bots a chance to gain and lose ELO.
  // Cut the bottom 500 bots in the pool.
}

startTournamentHarness().then(() => sql.end());
