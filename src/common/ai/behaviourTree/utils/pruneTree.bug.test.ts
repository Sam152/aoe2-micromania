import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { corruptAfterPruningTree } from "./__fixtures__/corruptAfterPruningTree.ts";
import { corruptAfterPlayingAgainst } from "./__fixtures__/corruptAfterPlayingAgainst.ts";
import { createGameWorkerPool } from "../../training/tournament/createGameWorkerPool.ts";
import { pruneUnitAwareTree } from "./pruneTree.ts";
import { createUnitTypeActivations } from "../../integration/createBot.ts";
import { mergeActivations } from "../../training/utils/mergeActivations.ts";

const expectedHps = [
  { asPlayer1: { 1: 720, 2: 0 }, asPlayer2: { 1: 0, 2: 720 } },
  { asPlayer1: { 1: 770, 2: 0 }, asPlayer2: { 1: 0, 2: 770 } },
  { asPlayer1: { 1: 424, 2: 0 }, asPlayer2: { 1: 0, 2: 442 } },
  { asPlayer1: { 1: 442, 2: 0 }, asPlayer2: { 1: 0, 2: 492 } },
  { asPlayer1: { 1: 490, 2: 0 }, asPlayer2: { 1: 0, 2: 524 } },
  { asPlayer1: { 1: 616, 2: 0 }, asPlayer2: { 1: 0, 2: 620 } },
  { asPlayer1: { 1: 617, 2: 0 }, asPlayer2: { 1: 0, 2: 578 } },
  { asPlayer1: { 1: 144, 2: 0 }, asPlayer2: { 1: 0, 2: 282 } },
  { asPlayer1: { 1: 704, 2: 0 }, asPlayer2: { 1: 0, 2: 702 } },
];

describe("pruneTree bug", () => {
  it("pruning does not change behaviour against any champion", async () => {
    const pool = createGameWorkerPool(2);

    const playAllChampions = async (
      tree: typeof corruptAfterPruningTree,
      activations?: ReturnType<typeof createUnitTypeActivations>,
    ) => {
      const hps = [];
      for (const champion of corruptAfterPlayingAgainst) {
        const asPlayer2 = await pool.runInPool({ 1: champion.tree, 2: tree });
        const asPlayer1 = await pool.runInPool({ 1: tree, 2: champion.tree });
        if (activations) {
          mergeActivations(activations, asPlayer2.bots.player2.activations);
          mergeActivations(activations, asPlayer1.bots.player1.activations);
        }
        hps.push({ asPlayer1: asPlayer1.hp, asPlayer2: asPlayer2.hp });
      }
      return hps;
    };

    // Play the original tree, both to confirm the baseline and to gather the
    // activations that pruning is allowed to act on.
    const activations = createUnitTypeActivations();
    const originalHps = await playAllChampions(corruptAfterPruningTree, activations);
    assertEquals(originalHps, expectedHps);

    const pruned = pruneUnitAwareTree(corruptAfterPruningTree, activations);
    const prunedHps = await playAllChampions(pruned);
    assertEquals(prunedHps, expectedHps);

    pool.terminatePool();
  });
});
