import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { determineWinner } from "../../training/utils/determineWinner.ts";
import { sampleTree } from "../__fixtures__/sampleTree.ts";
import { flattenTree } from "../../mutation/utils/flattenTree.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { pruneUnitAwareTree } from "./pruneTree.ts";
import { winningTree } from "../__fixtures__/winningTree.ts";
import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";

describe("pruneTree", () => {
  it("can prune trees and leave them functionally identical", () => {
    const winner = determineWinner({
      player1: sampleTree,
      player2: winningTree,
    });

    const treeSize = (tree: UnitAwareBehaviourTree) => ({
      archerLength: flattenTree(tree[UnitType.Archer]).length,
      monkLength: flattenTree(tree[UnitType.Monk]).length,
      mangoLength: flattenTree(tree[UnitType.Mangonel]).length,
    });

    assertEquals(treeSize(winningTree), {
      archerLength: 15,
      monkLength: 22,
      mangoLength: 4,
    });

    // Pruning the tree reduces its branches significantly.
    const pruned = pruneUnitAwareTree(winningTree, winner.bots.player2.activations);

    assertEquals(treeSize(pruned), {
      archerLength: 15,
      monkLength: 12,
      mangoLength: 4,
    });

    // But the outcome of a match is exactly the same.
    const prunedWinner = determineWinner({
      player1: sampleTree,
      player2: pruned,
    });
    assertEquals(prunedWinner.hp, winner.hp);
  });
});
