import { sql } from "../infra/connection.ts";

import { getActivations } from "../infra/repo/getActivations.ts";
import { pruneUnitAwareTree } from "../../behaviourTree/utils/pruneTree.ts";
import { updateBotTree } from "../infra/repo/updateBotTree.ts";
import { truncateBotActivations } from "../infra/repo/truncateBotActivations.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";
import { countUnitAwareBehaviourTreeNodes } from "../../behaviourTree/utils/countUnitAwareBehaviourTreeNodes.ts";
import { getAllTourneyBots } from "../infra/repo/getAllTourneyBots.ts";

export async function startPruningHarness() {
  // Get all active bots.
  const bots = await getAllTourneyBots();
  console.log(`Found ${bots.length} active bots`);

  // We should have played two round robins against the whole pool, so we should
  // have this amount of games played before pruning.
  const minimumGameCount = (bots.length - 1) * 2;

  const prunableBots = bots.filter((bot) => bot.gamesSinceLastPrune >= minimumGameCount);
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
