import { sql } from "../infra/connection.ts";
import { params } from "../params.ts";
import { getActiveBotsByElo } from "../infra/repo/getActiveBotsByElo.ts";
import { getActivations } from "../infra/repo/getActivations.ts";
import { pruneUnitAwareTree } from "../../behaviourTree/utils/pruneTree.ts";
import { updateBotTree } from "../infra/repo/updateBotTree.ts";
import { truncateBotActivations } from "../infra/repo/truncateBotActivations.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";
import { countUnitAwareBehaviourTreeNodes } from "../../behaviourTree/utils/countUnitAwareBehaviourTreeNodes.ts";

const { TOURNEY_ROUND_ROBIN_COUNT, TOTAL_BOTS_PER_GENERATION } = params;

export async function startPruningHarness() {
  // Get all active bots.
  const bots = await getActiveBotsByElo();
  console.log(`Found ${bots.length} active bots`);

  const minimumGameCount = (TOTAL_BOTS_PER_GENERATION - 1) * TOURNEY_ROUND_ROBIN_COUNT;

  const prunableBots = bots.filter((bot) => bot.gamesSinceLastPrune > minimumGameCount);
  console.log(
    `Found ${prunableBots.length} bots with > ${minimumGameCount} games played with the current version of their tree`,
  );

  const formatter = createProgressFormatter({
    totalIterations: prunableBots.length,
  });

  let prunedNodes: number = 0;

  for (const bot of prunableBots) {
    // Activations will represent the nodes of the tree which had any kind of impact
    // on a game, over all of their games played.
    const activations = await getActivations(bot.id);
    const prunedTree = pruneUnitAwareTree(bot.tree, activations);

    prunedNodes += countUnitAwareBehaviourTreeNodes(bot.tree) - countUnitAwareBehaviourTreeNodes(prunedTree);

    await sql.begin(async (tx) => {
      await updateBotTree(bot.id, prunedTree, tx);
      await truncateBotActivations(bot.id, tx);
    });

    formatter.advance();
  }

  console.log(`Pruned ${prunedNodes} nodes`);
}

if (import.meta.main) {
  startPruningHarness().then(() => sql.end());
}
