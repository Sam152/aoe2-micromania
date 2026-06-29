import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { determineWinner } from "../../training/utils/determineWinner.ts";

import { pruneUnitAwareTree } from "./pruneTree.ts";
import { winningTree } from "../__fixtures__/winningTree.ts";
import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { corruptAfterPruningTree } from "./__fixtures__/corruptAfterPruningTree.ts";
import { corruptAfterPlayingAgainst } from "./__fixtures__/corruptAfterPlayingAgainst.ts";

describe("pruneTree bug", () => {
  it("can reproduce bug", () => {
    const winner = determineWinner({
      player1: corruptAfterPruningTree as UnitAwareBehaviourTree,
      player2: corruptAfterPlayingAgainst as UnitAwareBehaviourTree,
    });

    assertEquals(winner.winner, 1);

    // Pruning the tree reduces its branches significantly.
    const pruned = pruneUnitAwareTree(winningTree, winner.bots.player1.activations);

    const prunedWinner = determineWinner({
      player1: pruned,
      player2: corruptAfterPlayingAgainst as UnitAwareBehaviourTree,
    });
    assertEquals(prunedWinner.winner, 1);
  });
});
