import { sql } from "../infra/connection.ts";
import { trainingParams } from "../trainingParams.ts";
import { getActiveBotsByElo } from "../infra/repo/getActiveBotsByElo.ts";
import { getActivations } from "../infra/repo/getActivations.ts";
import { pruneUnitAwareTree } from "../../behaviourTree/utils/pruneTree.ts";
import { updateBotTree } from "../infra/repo/updateBotTree.ts";
import { truncateBotActivations } from "../infra/repo/truncateBotActivations.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";
import { countUnitAwareBehaviourTreeNodes } from "../../behaviourTree/utils/countUnitAwareBehaviourTreeNodes.ts";

const { PRUNING_MINIMUM_GAMES_COUNT } = trainingParams;

async function startPruningHarness() {
  // Get all active bots.
  const bots = await getActiveBotsByElo();
  console.log(`Found ${bots.length} active bots`);

  const prunableBots = bots.filter((bot) => bot.treeGamesPlayed > PRUNING_MINIMUM_GAMES_COUNT);
  console.log(`Found ${prunableBots.length} bots with > ${PRUNING_MINIMUM_GAMES_COUNT} games`);

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

startPruningHarness().then(() => sql.end());
