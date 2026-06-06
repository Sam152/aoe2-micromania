import { botsCount } from "../infra/repo/botsCount.ts";
import { insertBot } from "../infra/repo/insertBot.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "../../mutation/randomlyMutateUnitAwareBehaviourTree.ts";
import { sampleTree } from "../../behaviourTree/__fixtures__/sampleTree.ts";
import { sql } from "../infra/connection.ts";

async function startTournamentHarness() {
  if (await botsCount() < 500) {
    for (let i = 0; i < 500; i++) {
      await insertBot(randomlyMutateUnitAwareBehaviourTree({ tree: sampleTree, count: 50 }));
    }
  }
}

startTournamentHarness().then(() => sql.end());
