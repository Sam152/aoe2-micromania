import { describe, it } from "@std/testing/bdd";
import { assert, assertEquals } from "@std/assert";
import { corruptAfterPruningTree } from "./__fixtures__/corruptAfterPruningTree.ts";
import { corruptAfterPlayingAgainst } from "./__fixtures__/corruptAfterPlayingAgainst.ts";
import { createGameWorkerPool } from "../../training/tournament/createGameWorkerPool.ts";
import { canBeatAllChampions } from "../../training/evolution/canBeatAllChampions.ts";
import { pruneUnitAwareTree } from "./pruneTree.ts";

describe("pruneTree bug", () => {
  it("pruning does not change behaviour against any champion", async () => {
    const pool = createGameWorkerPool(2);

    const result = await canBeatAllChampions({
      champions: corruptAfterPlayingAgainst,
      tree: corruptAfterPruningTree,
      pool,
    });
    assert(result.outcome === "YES");

    const pruned = pruneUnitAwareTree(corruptAfterPruningTree, result.activations);

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
