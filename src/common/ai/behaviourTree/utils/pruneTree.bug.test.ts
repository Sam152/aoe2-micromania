import { describe, it } from "@std/testing/bdd";
import { assert } from "@std/assert";
import { corruptAfterPruningTree } from "./__fixtures__/corruptAfterPruningTree.ts";
import { corruptAfterPlayingAgainst } from "./__fixtures__/corruptAfterPlayingAgainst.ts";
import { createGameWorkerPool } from "../../training/tournament/createGameWorkerPool.ts";
import { canBeatAllChampions } from "../../training/evolution/canBeatAllChampions.ts";
import { pruneUnitAwareTree } from "./pruneTree.ts";

describe("pruneTree bug", () => {
  it("can reproduce bug", async () => {
    const pool = createGameWorkerPool(2);
    const result = await canBeatAllChampions({
      champions: corruptAfterPlayingAgainst,
      tree: corruptAfterPruningTree,
      pool,
    });
    assert(result.outcome === "YES");

    const pruned = pruneUnitAwareTree(corruptAfterPruningTree, result.activations);
    const resultAfterPrune = await canBeatAllChampions({
      champions: corruptAfterPlayingAgainst,
      tree: pruned,
      pool,
    });
    assert(resultAfterPrune.outcome === "YES");

    pool.terminatePool();
  });
});
