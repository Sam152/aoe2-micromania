import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { corruptAfterPruningTree } from "./__fixtures__/corruptAfterPruningTree.ts";
import { corruptAfterPlayingAgainst } from "./__fixtures__/corruptAfterPlayingAgainst.ts";
import { createGameWorkerPool } from "../../training/tournament/createGameWorkerPool.ts";
import { pruneUnitAwareTree } from "./pruneTree.ts";
import { createUnitTypeActivations } from "../../integration/createBot.ts";
import { mergeActivations } from "../../training/utils/mergeActivations.ts";

describe("pruneTree bug", () => {
  it("pruning does not change behaviour against any champion", async () => {
    const pool = createGameWorkerPool(2);

    // Play the tree against every champion in both positions, gathering the
    // activations that pruning is allowed to act on.
    const activations = createUnitTypeActivations();
    for (const champion of corruptAfterPlayingAgainst) {
      const a = await pool.runInPool({ 1: champion.tree, 2: corruptAfterPruningTree });
      mergeActivations(activations, a.bots.player2.activations);
      const b = await pool.runInPool({ 1: corruptAfterPruningTree, 2: champion.tree });
      mergeActivations(activations, b.bots.player1.activations);
    }

    const pruned = pruneUnitAwareTree(corruptAfterPruningTree, activations);

    // Pruning should only remove dead branches, so the game must play out
    // identically against every champion in both positions.
    for (const [i, champion] of corruptAfterPlayingAgainst.entries()) {
      const origA = await pool.runInPool({ 1: champion.tree, 2: corruptAfterPruningTree });
      const prunedA = await pool.runInPool({ 1: champion.tree, 2: pruned });
      assertEquals(prunedA.hp, origA.hp, `champion ${i}, tree as player 2`);

      const origB = await pool.runInPool({ 1: corruptAfterPruningTree, 2: champion.tree });
      const prunedB = await pool.runInPool({ 1: pruned, 2: champion.tree });
      assertEquals(prunedB.hp, origB.hp, `champion ${i}, tree as player 1`);
    }

    pool.terminatePool();
  });
});
